import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogPoojaItemsImage from "@/assets/blog-pooja-items.jpg";

const BlogEssentialPoojaItems = () => {
  const items = [
    {
      id: 1,
      name: "Premium Pooja Thali Set",
      description: "A complete pooja thali is the foundation of any sacred space. Our <a href='/product/1' class='text-primary hover:underline'>Premium Pooja Thali Set</a> includes all essential items needed for daily worship and special ceremonies. This elegant brass thali comes with kumkum holder, rice holder, diya, bell, and incense holder, making it a one-stop solution for your worship needs.",
      link: "/product/1"
    },
    {
      id: 24,
      name: "Akhand Brass Diya",
      description: "The <a href='/product/24' class='text-primary hover:underline'>Akhand Brass Diya</a> is essential for continuous lighting during festivals and special occasions. This traditional brass lamp represents the eternal light of divine presence and is perfect for daily aarti and maintaining a sacred atmosphere in your pooja room.",
      link: "/product/24"
    },
    {
      id: 2,
      name: "Premium Incense Sticks - Sandalwood",
      description: "No pooja is complete without the divine fragrance of incense. Our <a href='/product/2' class='text-primary hover:underline'>Premium Sandalwood Incense Sticks</a> create a peaceful atmosphere and help in meditation. Made from natural ingredients, these agarbattis purify the environment and enhance spiritual practice.",
      link: "/product/2"
    },
    {
      id: 10,
      name: "Pure Camphor for Aarti",
      description: "<a href='/product/10' class='text-primary hover:underline'>Pure Camphor</a> is essential for performing aarti ceremonies. Its pure white flame and pleasant aroma create a divine ambiance during worship. Use it in your diya or camphor holder for traditional aarti rituals that have been practiced for generations.",
      link: "/product/10"
    },
    {
      id: 6,
      name: "Sacred Rudraksha Beads",
      description: "<a href='/product/6' class='text-primary hover:underline'>Sacred Rudraksha Beads</a> are considered highly auspicious in Hindu tradition. These divine beads can be used for meditation, making malas, or keeping in your pooja room for spiritual protection and positive energy.",
      link: "/product/6"
    },
    {
      id: 7,
      name: "Premium Kumkum for Tilak",
      description: "<a href='/product/7' class='text-primary hover:underline'>Premium Kumkum</a> is essential for applying tilak and performing religious ceremonies. This pure, natural kumkum is perfect for daily worship, festivals, and special occasions. Every pooja room should have this sacred powder.",
      link: "/product/7"
    },
    {
      id: 25,
      name: "Gold Kalash - Auspicious Vessel",
      description: "The <a href='/product/25' class='text-primary hover:underline'>Gold Kalash</a> is a sacred vessel used in various rituals and ceremonies. This auspicious item symbolizes abundance and prosperity, making it essential for housewarmings, pujas, and other religious ceremonies.",
      link: "/product/25"
    },
    {
      id: 20,
      name: "Aarti Sangrah - Complete Prayer Book",
      description: "Having the <a href='/product/20' class='text-primary hover:underline'>Aarti Sangrah</a> in your home ensures you can perform proper worship with correct lyrics and procedures. This comprehensive collection of traditional aartis and bhajans is invaluable for daily prayers and special occasions.",
      link: "/product/20"
    },
    {
      id: 8,
      name: "Fresh Marigold Garland",
      description: "<a href='/product/8' class='text-primary hover:underline'>Fresh Marigold Garlands</a> are essential for decorating deities and creating a festive atmosphere during pooja. These vibrant flowers are traditionally used in Hindu worship and add beauty and fragrance to your sacred space.",
      link: "/product/8"
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
