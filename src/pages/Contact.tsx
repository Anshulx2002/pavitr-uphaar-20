import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Your inquiry has been sent!",
        description: "We will be in touch with you shortly. You can also message us on Instagram @pavitra.uphaar for more requests",
      });
      setIsSubmitting(false);
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're here to help you with your spiritual journey. Reach out to us for any queries 
              about our products or spiritual guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-warm">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">support@pavitrauphaar.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        LBS Marg, Opp R-City Mall<br />
                        Ghatkopar, Mumbai, 400086
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sun: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Instagram className="w-6 h-6 text-gold" />
                     <div>
                       <p className="font-medium">Follow Us</p>
                       <a 
                         href="https://instagram.com/pavitra.uphaar" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-muted-foreground hover:text-gold transition-colors"
                       >
                         @pavitra.uphaar
                       </a>
                       <p className="text-sm text-muted-foreground mt-1">
                         You can also message us on Instagram for any inquiry
                       </p>
                     </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form */}
            <Card className="border-warm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Send us an Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Subject *
                    </label>
                    <Input placeholder="What is your inquiry about?" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Please describe your inquiry in detail..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="saffron" className="w-full" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;