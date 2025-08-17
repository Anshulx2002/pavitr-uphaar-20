import ProductCard from "./ProductCard";
import agarbattiImage from "@/assets/agarbatti.jpg";
import diyaImage from "@/assets/diya.jpg";
import kumkumImage from "@/assets/kumkum.jpg";
import rudrakshaImage from "@/assets/rudraksha.jpg";
import camphorImage from "@/assets/camphor.jpg";
import poojaThaliImage from "@/assets/pooja-thali.jpg";
import garlandImage from "@/assets/garland.jpg";
import sandalwoodImage from "@/assets/sandalwood.jpg";

const products = [
  {
    id: 1,
    name: "Premium Sandalwood Agarbatti",
    price: 299,
    originalPrice: 399,
    image: agarbattiImage,
    rating: 5,
    description: "Hand-rolled incense sticks made from pure sandalwood powder. Burns for 45 minutes with divine fragrance.",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Brass Diya Set",
    price: 549,
    originalPrice: 699,
    image: diyaImage,
    rating: 5,
    description: "Traditional brass oil lamps with intricate designs. Set of 4 diyas perfect for festivals and daily prayers.",
    badge: "Premium"
  },
  {
    id: 3,
    name: "Pure Kumkum Powder",
    price: 149,
    image: kumkumImage,
    rating: 5,
    description: "Authentic vermillion powder made from turmeric and lime. 100g pack for tilaka and rituals."
  },
  {
    id: 4,
    name: "Rudraksha Mala",
    price: 899,
    originalPrice: 1199,
    image: rudrakshaImage,
    rating: 5,
    description: "5-Mukhi Rudraksha beads mala with 108 beads. Blessed and energized for meditation and prayers.",
    badge: "Sacred"
  },
  {
    id: 5,
    name: "Pure Camphor Tablets",
    price: 99,
    image: camphorImage,
    rating: 4,
    description: "Natural camphor tablets for aarti and purification rituals. Pack of 20 tablets."
  },
  {
    id: 6,
    name: "Brass Pooja Thali",
    price: 1299,
    originalPrice: 1599,
    image: poojaThaliImage,
    rating: 5,
    description: "Complete pooja thali set with 7 compartments. Handcrafted brass with traditional motifs.",
    badge: "Premium"
  },
  {
    id: 7,
    name: "Fresh Marigold Garland",
    price: 199,
    image: garlandImage,
    rating: 4,
    description: "Fresh marigold flowers garland for temple decoration and offerings. 2 meter length."
  },
  {
    id: 8,
    name: "Sandalwood Powder",
    price: 399,
    originalPrice: 499,
    image: sandalwoodImage,
    rating: 5,
    description: "Pure Mysore sandalwood powder for tilaka and skin care. 50g premium quality.",
    badge: "Organic"
  }
];

const ProductsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sacred Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked pooja essentials crafted with devotion and blessed with tradition. 
            Each product carries the essence of our spiritual heritage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        
        <div className="text-center mt-12">
          <button className="bg-gradient-gold text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-gold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;