import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogPoojaItemsImage from "@/assets/blog-pooja-items.jpg";

const BlogEssentialPoojaItems = () => {
  const items = [
    {
      id: 34,
      name: "Gold Pooja Thali",
      description: "A complete pooja thali is the foundation of any sacred space. Our <a href='/product/34' class='text-primary hover:underline'>Gold Pooja Thali</a> is an exquisite gold-plated thali with intricate designs and all essential compartments needed for elaborate worship ceremonies and daily rituals.",
      link: "/product/34"
    },
    {
      id: 37,
      name: "Akhand Brass Diya",
      description: "The <a href='/product/37' class='text-primary hover:underline'>Akhand Brass Diya</a> is essential for continuous lighting during festivals and special occasions. This premium brass lamp with glass protection cover represents the eternal light of divine presence and is perfect for daily aarti.",
      link: "/product/37"
    },
    {
      id: 1,
      name: "Premium Sandalwood Agarbatti",
      description: "No pooja is complete without the divine fragrance of incense. Our <a href='/product/1' class='text-primary hover:underline'>Premium Sandalwood Agarbatti</a> creates a peaceful atmosphere with pure sandalwood powder. These hand-rolled incense sticks purify the environment and enhance spiritual practice.",
      link: "/product/1"
    },
    {
      id: 41,
      name: "Wooden Incense Holder",
      description: "The <a href='/product/41' class='text-primary hover:underline'>Wooden Incense Holder</a> is a handcrafted holder with intricate carved designs, perfect for holding incense sticks during pooja ceremonies. This beautiful accessory adds elegance to your sacred space.",
      link: "/product/41"
    },
    {
      id: 42,
      name: "Wooden Dhoop Stick Holder",
      description: "Keep your pooja space organized with the <a href='/product/42' class='text-primary hover:underline'>Wooden Dhoop Stick Holder</a>. This elegant triangular holder with carved patterns features a storage compartment, making it both functional and beautiful.",
      link: "/product/42"
    },
    {
      id: 38,
      name: "Gold Kalash - Auspicious Vessel",
      description: "The <a href='/product/38' class='text-primary hover:underline'>Gold Kalash</a> is an exquisite gold-finished sacred vessel with intricate engravings used in various rituals and ceremonies. This auspicious item symbolizes abundance and prosperity, essential for housewarmings and pujas.",
      link: "/product/38"
    },
    {
      id: 39,
      name: "Aarti Sangrah - Complete Prayer Book",
      description: "Having the <a href='/product/39' class='text-primary hover:underline'>Aarti Sangrah</a> in your home ensures you can perform proper worship with correct lyrics and procedures. This comprehensive collection of traditional aartis in an elegant gift box is invaluable for daily prayers.",
      link: "/product/39"
    },
    {
      id: 40,
      name: "Laxmi Ganesh Pooja Box",
      description: "The <a href='/product/40' class='text-primary hover:underline'>Laxmi Ganesh Pooja Box</a> is an exquisite wooden box with golden Laxmi Ganesh images. This complete set with traditional compartments is perfect for sacred ceremonies and daily worship at home.",
      link: "/product/40"
    },
    {
      id: 43,
      name: "Lord Krishna Statue",
      description: "A beautiful <a href='/product/43' class='text-primary hover:underline'>Lord Krishna Statue</a> adds divine energy to your pooja room. This handcrafted idol with golden calf features intricate detailing and vibrant colors, perfect as the centerpiece for your home temple.",
      link: "/product/43"
    },
    {
      id: 47,
      name: "Elephant Motif Copper Bottle",
      description: "Keep sacred water fresh with our <a href='/product/47' class='text-primary hover:underline'>Elephant Motif Copper Bottle</a>. Traditionally, copper vessels are used to store water for pooja and drinking. The copper-enriched water has numerous health benefits and maintains its purity for religious ceremonies.",
      link: "/product/47"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/blogs">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Essential Pooja Items Every Home Should Have
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Pavitra Uphaar Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 5, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={blogPoojaItemsImage}
              alt="Essential pooja items"
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Creating a sacred space in your home is essential for spiritual well-being and daily worship. Whether you're setting up a new pooja room or enhancing your existing one, having the right items is crucial for performing rituals with devotion and authenticity. At Pavitra Uphaar, we've curated a list of essential pooja items that every Hindu household should have to maintain a complete and functional sacred space.
            </p>

            {items.map((item, index) => (
              <div key={item.id} className="mb-10 pb-8 border-b border-border last:border-0">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {index + 1}. {item.name}
                </h2>
                <div 
                  className="text-muted-foreground leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <Link to={item.link}>
                  <Button variant="outline" className="mt-2">
                    View Product
                  </Button>
                </Link>
              </div>
            ))}

            {/* Conclusion */}
            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Creating Your Sacred Space</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Having these essential pooja items ensures that you can perform daily worship and special ceremonies with authenticity and devotion. Each item serves a specific purpose in Hindu rituals and contributes to creating a complete spiritual practice at home.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Pavitra Uphaar, we provide authentic, high-quality pooja items that honor traditional practices while meeting modern standards of craftsmanship. Visit our <Link to="/products" className="text-primary hover:underline">products page</Link> to explore our complete collection of sacred items for your home. For any questions or guidance on setting up your pooja room, feel free to <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogEssentialPoojaItems;
