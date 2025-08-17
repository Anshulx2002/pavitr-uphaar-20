import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flower, Filter } from "lucide-react";
import { getProductsByCategory } from "@/data/products";

const FlowersGarlands = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  const allProducts = getProductsByCategory("flowers");
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/3 w-48 h-48 bg-gradient-radial from-primary/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-radial from-accent/40 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/30 backdrop-blur-sm">
              <Flower className="w-4 h-4" />
              Divine Flowers Collection
              <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                {allProducts.length} Products
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Flowers &
              </span>
              <br />
              <span className="text-foreground">Garlands</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Fresh flowers and beautiful garlands to adorn your deities and create a fragrant, divine atmosphere in your sacred space.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {currentProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                {currentProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="scroll-animate hover-lift"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "bg-gradient-to-r from-primary to-accent text-white" : ""}
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <Filter className="w-16 h-16 mx-auto text-muted-foreground mb-6" />
                <h3 className="text-2xl font-semibold text-foreground mb-3">No Products Found</h3>
                <p className="text-muted-foreground">
                  We couldn't find any flower products at the moment. Please check back later.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FlowersGarlands;