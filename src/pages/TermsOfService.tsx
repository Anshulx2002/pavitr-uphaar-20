import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Pavitra Uphaar's website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Products and Services</h2>
              <p>
                Pavitra Uphaar specializes in traditional sacred products including agarbatti, diyas, kumkum, rudraksha, camphor, pooja thalis, garlands, and sandalwood powder. All products are sourced with care and respect for traditional practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Orders and Payment</h2>
              <p>
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order. Payment must be made in full before dispatch of goods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Shipping and Delivery</h2>
              <p>
                We strive to deliver products in perfect condition. Delivery to major metropolitan cities (Mumbai, Delhi, Bengaluru, Ahmedabad, Baroda, Pune, Kolkata, NCR, Chandigarh, Nagpur, Chennai, Hyderabad) takes 7 working days. Rest of India receives delivery within 3 weeks. These are estimated timeframes and may vary during festival seasons. Risk of loss and title for items purchased pass to you upon delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Returns and Refunds</h2>
              <p>
                Due to the sacred nature of our products, returns are limited to damaged or defective items. Please contact us within 7 days of delivery for any issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p>
                Pavitra Uphaar shall not be liable for any indirect, incidental, special, or consequential damages arising out of the use of our products or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
              <p>
                For any questions regarding these terms, please contact us at support@pavitrauphaar.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;