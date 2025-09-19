import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import pavitraUphaarBrandImage from "@/assets/pavitra-uphaar-brand.png";

const InstagramFeed = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Festive Background with Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-yellow-950/20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-400 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-pink-400 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 animate-pulse delay-500"></div>
        
        {/* Divine Symbols */}
        <div className="absolute top-32 left-1/4 text-6xl text-orange-300 animate-pulse delay-3000">🪔</div>
        <div className="absolute bottom-40 right-1/4 text-5xl text-red-300 animate-pulse delay-1500">🌺</div>
        <div className="absolute top-1/2 left-16 text-4xl text-yellow-300 animate-pulse delay-2500">✨</div>
        <div className="absolute top-1/3 right-16 text-4xl text-orange-300 animate-pulse delay-4000">🕉️</div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-orange-400/30 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-red-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-yellow-400/30 rounded-full animate-bounce delay-200"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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