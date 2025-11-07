/**
 * Meta Conversions API (CAPI) Helper
 * Sends server-side events to Meta for improved tracking accuracy
 */

const PIXEL_ID = '2653852868288120';
const META_API_VERSION = 'v18.0';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface PurchaseEventData {
  event_id: string;
  order_ref: string;
  amount_rupees: number;
  cart_items: CartItem[];
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  shipping_address: string;
}

/**
 * Hash data using SHA-256 (Meta requires hashed PII)
 */
async function hashSHA256(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Normalize and hash email
 */
async function hashEmail(email: string): Promise<string> {
  const normalized = email.toLowerCase().trim();
  return await hashSHA256(normalized);
}

/**
 * Normalize and hash phone (convert to E.164 format)
 */
async function hashPhone(phone: string): Promise<string> {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  // Add +91 country code if not present
  const normalized = digits.startsWith('91') ? `+${digits}` : `+91${digits}`;
  return await hashSHA256(normalized);
}

/**
 * Normalize and hash name
 */
async function hashName(name: string): Promise<string> {
  const normalized = name.toLowerCase().trim();
  return await hashSHA256(normalized);
}

/**
 * Extract location details from shipping address
 */
function extractLocationFromAddress(shippingAddress: string): {
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
} {
  // Shipping address format: "address, city, state - pincode, country"
  const parts = shippingAddress.split(',').map(p => p.trim());
  
  let city: string | undefined;
  let state: string | undefined;
  let zip: string | undefined;
  let country: string | undefined;

  if (parts.length >= 2) {
    city = parts[parts.length - 3]?.trim();
  }
  
  if (parts.length >= 3) {
    const stateZipPart = parts[parts.length - 2];
    const stateZipMatch = stateZipPart?.match(/^(.+?)\s*-\s*(\d{6})$/);
    if (stateZipMatch) {
      state = stateZipMatch[1].trim();
      zip = stateZipMatch[2].trim();
    }
  }
  
  if (parts.length >= 1) {
    country = parts[parts.length - 1]?.trim();
  }

  return { city, state, zip, country };
}

/**
 * Send Purchase event to Meta Conversions API
 */
export async function sendMetaPurchaseEvent(eventData: PurchaseEventData): Promise<void> {
  const accessToken = Deno.env.get('META_ACCESS_TOKEN');
  
  if (!accessToken) {
    console.error('META_ACCESS_TOKEN not configured');
    throw new Error('Meta access token not configured');
  }

  try {
    console.log('Preparing Meta CAPI Purchase event:', eventData.event_id);

    // Hash customer data
    const [hashedEmail, hashedPhone, hashedFirstName] = await Promise.all([
      hashEmail(eventData.customer_email),
      hashPhone(eventData.customer_phone),
      hashName(eventData.customer_name.split(' ')[0]), // First name only
    ]);

    // Extract location data
    const location = extractLocationFromAddress(eventData.shipping_address);
    const hashedCity = location.city ? await hashSHA256(location.city.toLowerCase()) : undefined;
    const hashedState = location.state ? await hashSHA256(location.state.toLowerCase()) : undefined;

    // Prepare event data
    const eventTime = Math.floor(Date.now() / 1000);
    
    const metaEvent = {
      data: [
        {
          event_name: 'Purchase',
          event_time: eventTime,
          event_id: eventData.event_id,
          action_source: 'website',
          user_data: {
            em: [hashedEmail],
            ph: [hashedPhone],
            fn: [hashedFirstName],
            ...(hashedCity && { ct: [hashedCity] }),
            ...(hashedState && { st: [hashedState] }),
            ...(location.zip && { zp: [location.zip] }),
            ...(location.country && { country: [location.country.toLowerCase().substring(0, 2)] }),
          },
          custom_data: {
            value: eventData.amount_rupees,
            currency: 'INR',
            content_ids: eventData.cart_items.map(item => String(item.id)),
            contents: eventData.cart_items.map(item => ({
              id: String(item.id),
              quantity: item.quantity,
              item_price: item.price,
            })),
            num_items: eventData.cart_items.reduce((sum, item) => sum + item.quantity, 0),
          },
        },
      ],
    };

    console.log('Sending event to Meta CAPI with event_id:', eventData.event_id);

    // Send to Meta Conversions API
    const url = `https://graph.facebook.com/${META_API_VERSION}/${PIXEL_ID}/events?access_token=${accessToken}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(metaEvent),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Meta CAPI error response:', errorText);
      throw new Error(`Meta CAPI returned ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    console.log('Meta CAPI response:', result);

    if (result.events_received) {
      console.log(`✓ Meta CAPI: ${result.events_received} event(s) received`);
    }

    // Log any warnings or errors from Meta
    if (result.messages) {
      console.log('Meta CAPI messages:', result.messages);
    }

  } catch (error) {
    console.error('Error sending Meta CAPI event:', error);
    throw error;
  }
}
