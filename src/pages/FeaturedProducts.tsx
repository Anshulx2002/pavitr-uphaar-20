import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Sparkles } from "lucide-react";

// Import all the product images
import goldPoojaThaliImage from "@/assets/gold-pooja-thali.jpg";
import silverPoojaThaliImage from "@/assets/silver-pooja-thali.jpg";
import goldKalashImage from "@/assets/gold-kalash.png";
import aartiSangrahImage from "@/assets/aarti-sangrah.png";
import laxmiGaneshPoojaBoxImage from "@/assets/laxmi-ganesh-pooja-box.png";
import woodenDhoopHolderImage from "@/assets/wooden-dhoop-holder.png";
import woodenIncenseHolderImage from "@/assets/wooden-incense-holder.png";
import aartiBookImage from "@/assets/aarti-book.png";
import akhandBrassDiyaImage from "@/assets/akhand-brass-diya.png";

// Featured products - all products from homepage
const featuredProducts = [
  {
    id: 29,
    name: "Gold Pooja Thali",
    price: 2499,
    originalPrice: 3999,
    image: goldPoojaThaliImage,
    rating: 5,
    description: "Exquisite handcrafted gold-plated pooja thali with intricate designs. Perfect for all religious ceremonies and festivals.",
    badge: "Premium"
  },
  {
    id: 30,
    name: "Silver Pooja Thali",
    price: 1999,
    originalPrice: 2999,
    image: silverPoojaThaliImage,
    rating: 4.9,
    description: "Elegant silver-plated pooja thali with traditional engravings. Ideal for daily prayers and special occasions.",
    badge: "Bestseller"
  },
  {
    id: 31,
    name: "Gold Kalash",
    price: 3499,
    originalPrice: 4999,
    image: goldKalashImage,
    rating: 5,
    description: "Sacred brass kalash with gold finish and traditional motifs. Essential for all Hindu rituals and ceremonies.",
    badge: "Sacred"
  },
  {
    id: 32,
    name: "Aarti Sangrah",
    price: 899,
    originalPrice: 1499,
    image: aartiSangrahImage,
    rating: 4.8,
    description: "Complete collection of traditional aartis with beautiful illustrations. Perfect for daily worship and learning.",
    badge: "Complete"
  },
  {
    id: 33,
    name: "Laxmi Ganesh Pooja Box",
    price: 2999,
    originalPrice: 4499,
    image: laxmiGaneshPoojaBoxImage,
    rating: 4.9,
    description: "Premium wooden pooja box with Laxmi Ganesh motifs. Contains all essentials for prosperity prayers.",
    badge: "Prosperity"
  },
  {
    id: 34,
    name: "Wooden Carved Dhoop Stick Holder",
    price: 499,
    originalPrice: 750,
    image: woodenDhoopHolderImage,
    rating: 4.6,
    description: "Handcrafted wooden dhoop holder with intricate carvings. Features ash catching tray for clean burning.",
    badge: "Handmade"
  },
  {
    id: 35,
    name: "Wooden Carved Incense Sticks Holder",
    price: 450,
    originalPrice: 750,
    image: woodenIncenseHolderImage,
    rating: 4.7,
    description: "Elegant triangular wooden incense holder with carved patterns. Features storage compartment for incense sticks.",
    badge: "Elegant"
  },
  {
    id: 36,
    name: "Hanuman Chalisa Aarti Book",
    price: 1499,
    originalPrice: 2499,
    image: aartiBookImage,
    rating: 5,
    description: "Premium gold-finished Hanuman Chalisa book in elegant gift box. Perfect for daily prayers and gifting.",
    badge: "Premium"
  },
  {
    id: 37,
    name: "Akhand Brass Diya",
    price: 1499,
    originalPrice: 2499,
    image: akhandBrassDiyaImage,
    rating: 5,
    description: "Premium Akhand Brass Diya with glass protection cover. Ideal for continuous lighting during festivals and special occasions.",
    badge: "Premium"
  }
];

const FeaturedProducts = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturedProducts;