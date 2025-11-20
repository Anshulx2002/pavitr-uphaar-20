import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you do Corporate gifting?",
      answer: "Yes we certainly do. You can fill out the contact us form or message us on instagram for any bulk personalised orders for your companies and we will be very happy to assist you with it."
    },
    {
      question: "What makes your pooja products authentic?",
      answer: "All our products are sourced directly from traditional artisans and blessed by experienced priests. We ensure that every item follows ancient Vedic traditions and is made using time-honored methods passed down through generations."
    },
    {
      question: "What are your delivery timelines?",
      answer: "We deliver to major metropolitan cities (Mumbai, Delhi, Bengaluru, Ahmedabad, Baroda, Pune, Kolkata, NCR, Chandigarh, Nagpur, Chennai, Hyderabad) within 7 working days. For the rest of the country, delivery takes up to 3 weeks. We understand the importance of timely delivery for religious ceremonies and process orders promptly."
    },
    {
      question: "Are your incense sticks made from natural ingredients?",
      answer: "Absolutely! Our agarbatti and dhoop are made from pure natural ingredients including sandalwood, jasmine, rose, and other aromatic herbs. We do not use any artificial fragrances or harmful chemicals."
    },
    {
      question: "Can I return products if they arrive damaged?",
      answer: "Yes, we have a 7-day return policy for damaged or defective products. Simply contact our customer service team with photos of the damaged items, and we'll arrange for a replacement or full refund. Refunds will be processed within 7 days of receiving the returned product."
    },
    {
      question: "Do you provide bulk orders for temples and ashrams?",
      answer: "Yes, we offer special wholesale pricing for temples, ashrams, and religious institutions. Please contact us directly for bulk order requirements and we'll provide customized pricing."
    },
    {
      question: "How do I know which products are suitable for specific poojas?",
      answer: "Each product page includes detailed descriptions about which ceremonies and deities they're most suitable for. You can also contact our spiritual advisors for personalized recommendations based on your specific pooja requirements."
    },
    {
      question: "Are your products eco-friendly?",
      answer: "Yes, sustainability is important to us. Our products are made from natural, biodegradable materials. Our packaging is also eco-friendly and recyclable to minimize environmental impact."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we ship within India only. However, we're working on expanding our services internationally. Please subscribe to our newsletter to be notified when international shipping becomes available."
    },
    {
      question: "How should I store pooja items to maintain their quality?",
      answer: "Store items in a cool, dry place away from direct sunlight. Incense sticks should be kept in airtight containers to preserve their fragrance. Sacred threads and garlands should be stored in cotton cloth bags."
    },
    {
      question: "Do you offer spiritual consultation services?",
      answer: "While we primarily focus on providing authentic pooja products, we do have experienced advisors who can guide you on product selection for specific ceremonies. For detailed spiritual consultation, we can recommend qualified priests and spiritual guides."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products, services, and spiritual practices. 
              If you need more help, feel free to contact us.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-warm rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-saffron text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;