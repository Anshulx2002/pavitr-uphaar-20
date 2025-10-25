import { useState } from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Flame, Sparkles, Flower, Zap, Target } from "lucide-react";
import { getProductsByCategory } from "@/data/products";

// Category configuration mapping
const CATEGORY_CONFIG = {
  "incense-agarbatti": {
    title: "Incense & Agarbatti",
    description: "Sacred fragrances to purify your space and elevate your spiritual practice",
    icon: Sparkles,
    dataCategory: "incense"
  },
  "lamps-diyas": {
    title: "Lamps & Diyas",
    description: "Traditional oil lamps and diyas to illuminate your sacred space with divine light",
    icon: Flame,
    dataCategory: "lamps"
  },
  "pooja-accessories": {
    title: "Pooja Accessories",
    description: "Essential items for your daily worship and spiritual ceremonies",
    icon: Target,
    dataCategory: "accessories"
  },
  "flowers-garlands": {
    title: "Flowers & Garlands",
    description: "Fresh and artificial flowers to adorn your deities and sacred spaces",
    icon: Flower,
    dataCategory: "flowers"
  },
  "sacred-threads": {
    title: "Sacred Threads",
    description: "Traditional threads and malas for protection and spiritual practice",
    icon: Zap,
    dataCategory: "threads"
  }
};

const CategoryPage = () => {
  const { category: urlCategory } = useParams<{ category: string }>();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Extract category from URL param or pathname (e.g., /incense-agarbatti -> incense-agarbatti)
  const category = urlCategory || location.pathname.replace('/', '');

  // Validate category parameter
  if (!category || !CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG]) {
    return <Navigate to="/products" replace />;
  }

  const config = CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG];
  const IconComponent = config.icon;
  
  // Filter products by category_slug (mapped to dataCategory)
  const products = getProductsByCategory(config.dataCategory);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-background via-accent/5 to-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                  <IconComponent className="w-4 h-4 mr-2" />
                  {products.length} Products - QA Count: {products.length}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {config.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {config.description}
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                    description={product.description}
                    badge={product.badge}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <IconComponent className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  We're currently updating our {config.title.toLowerCase()} collection.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    className="w-10 h-10 p-0"
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;