import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, List } from "lucide-react";
import { allProducts, categories } from "@/data/products";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const AllProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  // Initialize scroll animations
  useScrollAnimation();

  const filteredProducts = activeCategory === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-background via-accent/3 to-background relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-radial from-primary/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-radial from-accent/40 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-radial from-secondary/40 to-transparent rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-20 right-1/3 w-32 h-32 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Premium Category Tabs & View Controls */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full lg:w-auto">
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 w-full lg:w-auto h-auto p-2 bg-gradient-to-r from-background/80 via-accent/10 to-background/80 backdrop-blur-sm border border-border/50 shadow-card">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-xs lg:text-sm px-3 lg:px-4 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-gold transition-all duration-300 hover:bg-accent/20"
                  >
                    <div className="flex flex-col items-center gap-1.5">
                      <span className="font-medium">{category.name}</span>
                      <Badge variant="secondary" className="text-xs h-5 px-2 bg-primary/10 text-primary border-primary/20">
                        {category.count}
                      </Badge>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-lg p-2 border border-border/50 shadow-card">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`flex-1 lg:flex-none transition-all duration-300 ${viewMode === "grid" ? "bg-gradient-to-r from-primary to-accent text-white shadow-gold" : ""}`}
              >
                <Grid className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`flex-1 lg:flex-none transition-all duration-300 ${viewMode === "list" ? "bg-gradient-to-r from-primary to-accent text-white shadow-gold" : ""}`}
              >
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
            </div>
          </div>

          {/* Active Category Info */}
          <div className="text-center mb-12 p-6 rounded-2xl bg-gradient-to-r from-background/80 via-accent/5 to-background/80 backdrop-blur-sm border border-border/30 shadow-card">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {categories.find(cat => cat.id === activeCategory)?.name || "All Products"}
            </h3>
            <p className="text-lg text-muted-foreground">
              Showing <span className="font-semibold text-primary">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''} in this collection
            </p>
          </div>
        </div>

        {/* Premium Products Grid/List */}
        <div className={`
          ${viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8" 
            : "space-y-8"
          }
          mb-20
        `}>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`scroll-animate hover-lift group ${viewMode === "list" ? "max-w-none" : ""}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                  description={product.description}
                  badge={product.badge}
                  viewMode={viewMode}
                />
                {/* Premium hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Call to Action */}
        <div className="text-center scroll-animate">
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl bg-gradient-to-br from-background/90 via-accent/8 to-background/90 backdrop-blur-sm border border-border/40 shadow-hover">
            <div className="flex items-center gap-3 text-primary">
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">Need Help Choosing?</span>
              <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Expert Guidance Available
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Our spiritual advisors are here to help you choose the perfect items for your sacred practices. 
              Connect with us for personalized recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-10 py-4 rounded-full shadow-gold hover:shadow-hover transform transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact">
                  <Filter className="w-5 h-5 mr-3" />
                  Get Expert Advice
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-primary/30 hover:border-primary/50 px-10 py-4 rounded-full transition-all duration-300 hover:bg-primary/5"
              >
                <Link to="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProductsSection;