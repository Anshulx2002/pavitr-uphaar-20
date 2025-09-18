import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

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