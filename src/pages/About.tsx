import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Shield, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">About Pavitra Uphaar</h1>
            <p className="text-xl text-muted-foreground">
              Preserving Sacred Traditions Through Authentic Pooja Products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Heritage</h2>
              <p className="text-muted-foreground mb-4">
                Pavitra Uphaar was born from a deep reverence for Indian spiritual traditions and 
                the sacred rituals that have been passed down through generations. Our journey 
                began with a simple belief: every devotee deserves access to authentic, 
                high-quality pooja products that honor the sanctity of their spiritual practice.
              </p>
              <p className="text-muted-foreground">
                Founded by a family of devotees who understood the importance of purity in 
                spiritual offerings, we have dedicated ourselves to sourcing and crafting 
                products that meet the highest standards of quality and authenticity.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                We believe that spiritual practice should be supported by products that are 
                as pure and sacred as the intentions behind them. Every agarbatti, every diya, 
                every grain of kumkum is carefully selected to ensure it meets our exacting 
                standards for purity and authenticity.
              </p>
              <p className="text-muted-foreground">
                Our mission extends beyond commerce – we are custodians of tradition, 
                ensuring that future generations have access to the same quality of sacred 
                products that have blessed countless homes and temples.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-radial from-gold/5 to-transparent rounded-full"></div>
            
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center relative z-10">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center group scroll-animate">
                <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                  <Shield className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Authenticity</h3>
                <p className="text-muted-foreground text-sm transition-all duration-300 group-hover:text-foreground">
                  Every product is sourced from traditional artisans and time-honored methods
                </p>
                <div className="w-0 h-0.5 bg-primary mx-auto mt-3 transition-all duration-500 group-hover:w-12"></div>
              </div>
              
              <div className="text-center group scroll-animate">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                  <Zap className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Purity</h3>
                <p className="text-muted-foreground text-sm transition-all duration-300 group-hover:text-foreground">
                  We maintain the highest standards of purity in all our sacred offerings
                </p>
                <div className="w-0 h-0.5 bg-primary mx-auto mt-3 transition-all duration-500 group-hover:w-12"></div>
              </div>
              
              <div className="text-center group scroll-animate">
                <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                  <Heart className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Devotion</h3>
                <p className="text-muted-foreground text-sm transition-all duration-300 group-hover:text-foreground">
                  Our work is guided by deep devotion and respect for spiritual traditions
                </p>
                <div className="w-0 h-0.5 bg-primary mx-auto mt-3 transition-all duration-500 group-hover:w-12"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Join Our Sacred Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When you choose Pavitra Uphaar, you become part of a community dedicated to 
              preserving and honoring the sacred traditions that enrich our spiritual lives. 
              Together, we keep the divine light burning bright in every home and heart.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;