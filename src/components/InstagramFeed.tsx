import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    // Load LightWidget script
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Follow Our Journey</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our daily spiritual offerings and customer celebrations
          </p>
        </div>

        {/* LightWidget Instagram Widget */}
        <div className="mb-12 max-w-4xl mx-auto">
          <iframe 
            src="//lightwidget.com/widgets/f412d8a53e7554f9a95cc1d24359f5b3.html" 
            scrolling="no" 
            allowTransparency={true}
            className="lightwidget-widget w-full border-0 overflow-hidden"
            style={{ width: '100%', border: 0, overflow: 'hidden' }}
          />
        </div>

        {/* Single Centered CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://instagram.com/pavitra.uphaar', '_blank')}
          >
            <Instagram className="h-5 w-5 mr-2" />
            Follow @pavitra.uphaar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;