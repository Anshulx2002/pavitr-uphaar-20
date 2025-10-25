import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Users, Gift, CheckCircle, Instagram, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const CorporateGifting = () => {
  const benefits = [
    {
      icon: Package,
      title: "Bulk Orders",
      description: "We handle orders of any size, from small teams to large corporations"
    },
    {
      icon: Gift,
      title: "Personalized Packaging",
      description: "Custom branded packaging and personalized messages for your company"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "A dedicated account manager to handle your corporate needs"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Premium authentic products blessed by experienced priests"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-orange-50 via-yellow-50/90 to-red-50/60">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Corporate Gifting
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              We can ship personalized packages in bulk to your companies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-saffron text-white hover:opacity-90">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
              <a href="https://instagram.com/pavitra.uphaar" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <Instagram className="mr-2 h-5 w-5" />
                  Message on Instagram
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Us for Corporate Gifting?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We understand the importance of meaningful corporate gifts that reflect your company's values
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-warm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perfect For
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Festival Celebrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Share the joy of Diwali, Dussehra, Navratri, and other festivals with your team and clients
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Employee Appreciation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Show gratitude to your employees with thoughtful traditional gifts that honor their culture
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Client Gifting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Strengthen business relationships with premium curated gift sets that leave a lasting impression
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
                  <p className="text-muted-foreground">
                    Fill out our contact form or message us on Instagram with your requirements
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customize Your Order</h3>
                  <p className="text-muted-foreground">
                    Work with our team to select products and customize packaging with your branding
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">We Handle Everything</h3>
                  <p className="text-muted-foreground">
                    From sourcing to packaging to delivery, we manage your bulk order with care and precision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-yellow-50/90 to-red-50/60">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Create Memorable Corporate Gifts?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us help you create meaningful connections through traditional sacred products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-saffron text-white hover:opacity-90">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Fill Contact Form
                </Button>
              </Link>
              <a href="https://instagram.com/pavitra.uphaar" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <Instagram className="mr-2 h-5 w-5" />
                  Message on Instagram
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CorporateGifting;
