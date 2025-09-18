import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import pavitraUphaarBrandImage from "@/assets/pavitra-uphaar-brand.png";

const InstagramFeed = () => {
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

        {/* Brand Image */}
        <div className="text-center mb-12">
          <a 
            href="https://instagram.com/pavitra.uphaar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={pavitraUphaarBrandImage} 
              alt="Pavitra Uphaar - Rooted in Tradition, Crafted with Devotion" 
              className="max-w-md w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto"
            />
          </a>
        </div>

        {/* Single Centered CTA */}
        <div className="text-center">
          <Button 
            variant="saffron"
            size="lg"
            className="shadow-lg hover:shadow-xl transition-all duration-300 text-white font-semibold px-8 py-4 text-lg"
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