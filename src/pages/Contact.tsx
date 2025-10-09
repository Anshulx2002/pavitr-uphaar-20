import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Clock, Instagram, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const inquirySchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100, "First name must be less than 100 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(100, "Last name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  const handleSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-inquiry', {
        body: data,
      });

      if (error) throw error;

      setShowSuccessDialog(true);
      reset();
    } catch (error: any) {
      console.error("Error sending inquiry:", error);
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again or contact us on Instagram.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <DialogTitle className="text-center text-2xl">Your inquiry has been sent!</DialogTitle>
            <DialogDescription className="text-center space-y-3 pt-4">
              <p className="text-base">We will be in touch with you shortly.</p>
              <p className="text-sm text-muted-foreground">
                You can also message us on Instagram{" "}
                <a 
                  href="https://instagram.com/pavitra.uphaar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  @pavitra.uphaar
                </a>
                {" "}for more requests
              </p>
            </DialogDescription>
          </DialogHeader>
          <Button 
            onClick={() => setShowSuccessDialog(false)} 
            variant="saffron" 
            className="w-full mt-4"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

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
                <form className="space-y-4" onSubmit={handleFormSubmit(handleSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        First Name *
                      </label>
                      <Input 
                        {...register("firstName")}
                        placeholder="Enter your first name"
                        className={errors.firstName ? "border-destructive" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Last Name *
                      </label>
                      <Input 
                        {...register("lastName")}
                        placeholder="Enter your last name"
                        className={errors.lastName ? "border-destructive" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Email *
                    </label>
                    <Input 
                      {...register("email")}
                      type="email" 
                      placeholder="Enter your email"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Phone Number
                    </label>
                    <Input 
                      {...register("phone")}
                      placeholder="Enter your phone number"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Subject *
                    </label>
                    <Input 
                      {...register("subject")}
                      placeholder="What is your inquiry about?"
                      className={errors.subject ? "border-destructive" : ""}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Message *
                    </label>
                    <Textarea 
                      {...register("message")}
                      placeholder="Please describe your inquiry in detail..."
                      className={`min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
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