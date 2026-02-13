import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AllProductsSection from "@/components/AllProductsSection";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { downloadProductsCSV, downloadImageLinksDump } from "@/lib/exportProducts";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* SEO optimized header */}
        <section className="py-8 bg-gradient-to-br from-background via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Complete Sacred Collection
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Discover our complete range of traditional pooja products, carefully selected and 
                blessed to bring divine energy to your spiritual practices.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadProductsCSV}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Product List (CSV)
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadImageLinksDump}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Image Links
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <AllProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;