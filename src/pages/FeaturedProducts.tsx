import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Sparkles } from "lucide-react";
import { getFeaturedProducts, allProducts } from "@/data/products";

const featuredProducts = getFeaturedProducts();

const FeaturedProducts = () => {
  const products = featuredProducts.length ? featuredProducts : allProducts;
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, hsl(var(--accent)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 60px 60px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Featured</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-extrabold">
              Collection
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Everything for your pooja, handpicked and blessed for your spiritual journey
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {products && products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                  description={product.description}
                  badge={product.badge}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturedProducts;