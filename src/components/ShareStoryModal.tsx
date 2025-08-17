import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Upload, Instagram, Heart, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface ShareStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareStoryModal = ({ isOpen, onClose }: ShareStoryModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    city: "",
    story: "",
    consent: false
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => 
      file.type === 'image/jpeg' || file.type === 'image/png'
    );
    
    if (validFiles.length !== files.length) {
      toast({
        title: "File Type Error",
        description: "Please select only .jpg and .png files",
        variant: "destructive"
      });
    }
    
    setSelectedFiles(validFiles);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.contact || !formData.story || !formData.consent) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and agree to the consent",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare email data
      const emailData = {
        to_email: "contact@pavitrauphaar.com", // Replace with your actual email
        from_name: formData.name,
        contact: formData.contact,
        city: formData.city || "Not provided",
        story: formData.story,
        file_count: selectedFiles.length,
        consent: "Yes, agreed to marketing use"
      };

      // Initialize EmailJS (you'll need to set up your service ID, template ID, and public key)
      // For now, we'll simulate the email send
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowThankYou(true);
      
      toast({
        title: "Story Submitted Successfully!",
        description: "Thank you for sharing your story with us."
      });
      
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your story. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setFormData({
      name: "",
      contact: "",
      city: "",
      story: "",
      consent: false
    });
    setSelectedFiles([]);
    setShowThankYou(false);
    onClose();
  };

  if (showThankYou) {
    return (
      <Dialog open={isOpen} onOpenChange={resetAndClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-6">
            <div className="mx-auto w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Thank you for sharing your story!
            </h3>
            <p className="text-muted-foreground mb-6">
              We may feature it on our Instagram. Stay connected with us.
            </p>
            <div className="space-y-3">
              <Button 
                onClick={() => window.open('https://instagram.com/pavitra.uphaar', '_blank')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Follow us on Instagram
              </Button>
              <Button variant="outline" onClick={resetAndClose} className="w-full">
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Camera className="h-5 w-5 text-primary" />
            Share Your Story
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Email/Phone *</Label>
              <Input
                id="contact"
                value={formData.contact}
                onChange={(e) => handleInputChange('contact', e.target.value)}
                placeholder="Email or phone number"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              placeholder="Your city (optional)"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="story">Your Story *</Label>
            <Textarea
              id="story"
              value={formData.story}
              onChange={(e) => handleInputChange('story', e.target.value)}
              placeholder="Share your experience with Pavitra Uphaar products..."
              className="min-h-[100px]"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Upload Photos (.jpg, .png)</Label>
            <div className="border border-border rounded-lg p-4">
              <input
                type="file"
                multiple
                accept=".jpg,.jpeg,.png"
                onChange={handleFileSelect}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <span className="text-sm text-muted-foreground">
                  Click to upload photos
                </span>
              </label>
              {selectedFiles.length > 0 && (
                <div className="mt-3 space-y-1">
                  <p className="text-sm font-medium">Selected files:</p>
                  {selectedFiles.map((file, index) => (
                    <p key={index} className="text-xs text-muted-foreground">
                      {file.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-sm leading-relaxed">
              I agree to Pavitra Uphaar using my story/photos for marketing and social media. *
            </Label>
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1 bg-gradient-saffron hover:opacity-90"
            >
              {isSubmitting ? "Sending..." : "Send My Story"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ShareStoryModal;