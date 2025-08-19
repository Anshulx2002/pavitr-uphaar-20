import { Phone, Mail, MapPin, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-2">
                <img src="/lovable-uploads/9a70ebdf-b809-4775-b7cb-d4a5f83de787.png" alt="Pavitra Uphaar Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pavitra Uphaar</h3>
                <p className="text-sm opacity-75">Traditional Sacred Products</p>
              </div>
            </div>
            <p className="text-sm opacity-75 mb-4">
              Bringing divine blessings to your home with authentic pooja products 
              crafted with devotion and rooted in tradition.
            </p>
            <div className="flex space-x-3">
              <a href="https://instagram.com/pavitra.uphaar" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-8 h-8 opacity-75 hover:opacity-100 cursor-pointer transition-all hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="opacity-75 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="/products" className="opacity-75 hover:opacity-100 transition-opacity">Products</a></li>
              <li><a href="/about" className="opacity-75 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="/faq" className="opacity-75 hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="/contact" className="opacity-75 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/incense-agarbatti" className="opacity-75 hover:opacity-100 transition-opacity">Incense & Agarbatti</a></li>
              <li><a href="/lamps-diyas" className="opacity-75 hover:opacity-100 transition-opacity">Lamps & Diyas</a></li>
              <li><a href="/pooja-accessories" className="opacity-75 hover:opacity-100 transition-opacity">Pooja Accessories</a></li>
              <li><a href="/sacred-threads" className="opacity-75 hover:opacity-100 transition-opacity">Sacred Threads</a></li>
              <li><a href="/flowers-garlands" className="opacity-75 hover:opacity-100 transition-opacity">Flowers & Garlands</a></li>
              <li><a href="/festival-kits" className="opacity-75 hover:opacity-100 transition-opacity">Festival Kits</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold" />
                <span>support@pavitrauphaar.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>123 Temple Street, Sacred Plaza, Mumbai, Maharashtra 400001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="opacity-75 mb-2 md:mb-0">© 2025 Pavitra Uphaar. All rights reserved. | Bringing traditions to modern homes.</p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="opacity-75 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="/terms-of-service" className="opacity-75 hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="/shipping-info" className="opacity-75 hover:opacity-100 transition-opacity">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;