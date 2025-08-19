import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, ChevronDown, Sparkles } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");
  
  // Initialize scroll animations
  useScrollAnimation();

  // Filter products based on category and search query
  const filteredProducts = activeCategory === "all" 
    ? allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allProducts.filter(product => 
        product.category === activeCategory && (
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );

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

        {/* Premium Category Dropdown */}
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center gap-6 mb-12">
            
            {/* Search Bar */}
            <div className="w-full max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, categories, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 px-6 py-4 pl-12 pr-6 bg-gradient-to-r from-background/90 via-premium-gold-saffron/5 to-background/90 backdrop-blur-sm border-2 border-premium-gold-saffron/20 hover:border-premium-gold-saffron/40 focus:border-premium-gold-saffron/60 rounded-xl shadow-lg focus:shadow-xl transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Filter className="h-5 w-5 text-premium-gold-saffron" />
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-premium-gold-saffron transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
            
            {/* Luxury Category Dropdown */}
            <div className="w-full max-w-md">
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
                        {filteredProducts.length}
                      </Badge>
                      <ChevronDown className="h-4 w-4 text-premium-gold-saffron transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="center" 
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
                        onClick={() => {
                          setActiveCategory(category.id);
                          setSearchQuery(""); // Clear search when changing category
                        }}
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
          </div>

          {/* Active Category Info */}
          <div className="text-center mb-12 p-6 rounded-2xl bg-gradient-to-r from-background/80 via-premium-gold-saffron/5 to-background/80 backdrop-blur-sm border border-premium-gold-saffron/20 shadow-card">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {activeCategory === "all" ? "Complete Sacred Collection" : categories.find(cat => cat.id === activeCategory)?.name || "All Products"}
            </h3>
            {searchQuery && (
              <p className="text-lg text-premium-gold-saffron font-medium mb-2">
                Search results for: "{searchQuery}"
              </p>
            )}
            <p className="text-lg text-muted-foreground">
              {searchQuery 
                ? `Showing ${filteredProducts.length} products matching your search`
                : `Discover our complete range of traditional pooja products, carefully selected and blessed to bring divine energy to your spiritual practices.`
              }
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={product.id} className="scroll-animate hover-lift">
                <ProductCard {...product} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-premium-gold-saffron/20 to-premium-gold-saffron/10 rounded-full flex items-center justify-center">
                  <Filter className="w-12 h-12 text-premium-gold-saffron" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">No Products Found</h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery 
                    ? `No products match your search "${searchQuery}". Try different keywords or browse categories.`
                    : "No products available in this category at the moment."
                  }
                </p>
                {searchQuery && (
                  <Button 
                    onClick={() => setSearchQuery("")}
                    className="bg-gradient-to-r from-premium-gold-saffron to-premium-gold-saffron/80 text-white hover:from-premium-gold-saffron/90 hover:to-premium-gold-saffron/70"
                  >
                    Clear Search
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Premium Call to Action */}
        <div className="text-center scroll-animate">
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl bg-gradient-to-br from-background/90 via-premium-gold-saffron/8 to-background/90 backdrop-blur-sm border border-premium-gold-saffron/20 shadow-hover">
            <div className="flex items-center gap-3 text-premium-gold-saffron">
              <div className="w-3 h-3 bg-gradient-to-r from-premium-gold-saffron to-premium-gold-saffron/80 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">Need Help Choosing?</span>
              <div className="w-3 h-3 bg-gradient-to-r from-premium-gold-saffron/80 to-premium-gold-saffron rounded-full animate-pulse"></div>
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
                className="bg-gradient-to-r from-premium-gold-saffron to-premium-gold-saffron/80 hover:from-premium-gold-saffron/90 hover:to-premium-gold-saffron/70 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
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
                className="border-2 border-premium-gold-saffron/30 hover:border-premium-gold-saffron/50 px-10 py-4 rounded-full transition-all duration-300 hover:bg-premium-gold-saffron/5"
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