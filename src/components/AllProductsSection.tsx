import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, List, ChevronDown, Sparkles } from "lucide-react";
import { allProducts, categories } from "@/data/products";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

        {/* Premium Category Dropdown & View Controls */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-12">
            
            {/* Luxury Category Dropdown */}
            <div className="flex-1 max-w-md">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between h-14 px-6 py-4 bg-gradient-to-r from-background/90 via-premium-gold-saffron/5 to-background/90 backdrop-blur-sm border-2 border-premium-gold-saffron/20 hover:border-premium-gold-saffron/40 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-premium-gold-saffron to-premium-gold-saffron/80 rounded-full animate-pulse"></div>
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Category</span>
                        <span className="font-semibold text-foreground">
                          {categories.find(cat => cat.id === activeCategory)?.name || "All Products"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-premium-gold-saffron/10 text-premium-gold-saffron border-premium-gold-saffron/20 font-semibold">
                        {categories.find(cat => cat.id === activeCategory)?.count || allProducts.length}
                      </Badge>
                      <ChevronDown className="h-4 w-4 text-premium-gold-saffron transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[300px] p-3 bg-background/95 backdrop-blur-md border-2 border-premium-gold-saffron/20 shadow-2xl z-50"
                >
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-premium-gold-saffron/20 px-2">
                      <Sparkles className="h-4 w-4 text-premium-gold-saffron" />
                      <span className="font-semibold text-foreground text-sm">Sacred Collection</span>
                    </div>
                    {categories.map((category) => (
                      <DropdownMenuItem 
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center justify-between px-3 py-3 h-12 rounded-lg cursor-pointer transition-all duration-200 group ${
                          activeCategory === category.id 
                            ? "bg-gradient-to-r from-premium-gold-saffron/20 to-premium-gold-saffron/10 border border-premium-gold-saffron/30" 
                            : "hover:bg-premium-gold-saffron/5 hover:border-premium-gold-saffron/20 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            activeCategory === category.id 
                              ? "bg-premium-gold-saffron animate-pulse" 
                              : "bg-muted-foreground/30 group-hover:bg-premium-gold-saffron/60"
                          }`}></div>
                          <span className={`font-medium transition-colors ${
                            activeCategory === category.id 
                              ? "text-premium-gold-saffron" 
                              : "text-foreground group-hover:text-premium-gold-saffron"
                          }`}>
                            {category.name}
                          </span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs h-6 px-2 font-semibold transition-all duration-200 ${
                            activeCategory === category.id
                              ? "bg-premium-gold-saffron/20 text-premium-gold-saffron border-premium-gold-saffron/30"
                              : "bg-muted/50 text-muted-foreground group-hover:bg-premium-gold-saffron/10 group-hover:text-premium-gold-saffron group-hover:border-premium-gold-saffron/20"
                          }`}
                        >
                          {category.count}
                        </Badge>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* View Mode Controls */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-background/90 via-premium-gold-saffron/5 to-background/90 backdrop-blur-sm rounded-xl p-2 border-2 border-premium-gold-saffron/20 shadow-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`transition-all duration-300 ${
                  viewMode === "grid" 
                    ? "bg-gradient-to-r from-premium-gold-saffron to-premium-gold-saffron/80 text-white shadow-lg border-premium-gold-saffron/30" 
                    : "border-premium-gold-saffron/20 hover:bg-premium-gold-saffron/5 hover:border-premium-gold-saffron/40"
                }`}
              >
                <Grid className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`transition-all duration-300 ${
                  viewMode === "list" 
                    ? "bg-gradient-to-r from-premium-gold-saffron to-premium-gold-saffron/80 text-white shadow-lg border-premium-gold-saffron/30" 
                    : "border-premium-gold-saffron/20 hover:bg-premium-gold-saffron/5 hover:border-premium-gold-saffron/40"
                }`}
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