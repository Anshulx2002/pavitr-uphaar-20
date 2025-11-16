import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import goldPoojaThali from "@/assets/gold-pooja-thali.jpg";
import elephantCopperBottle from "@/assets/elephant-copper-bottle.png";
import silverPoojaThali from "@/assets/silver-pooja-thali.jpg";
import akhandBrassDiya from "@/assets/akhand-brass-diya.png";
import aartiSangrah from "@/assets/aarti-sangrah.png";
import laxmiGaneshBox from "@/assets/laxmi-ganesh-puja-box-small.png";
import goldKalash from "@/assets/gold-kalash.png";
import lordKrishnaStatue from "@/assets/lord-krishna-statue.png";
import siddhivinayakPujaBox from "@/assets/siddhivinayak-puja-box.png";
import ganeshPujaBox from "@/assets/ganesh-puja-box-small.png";

const BlogFamilyGifts = () => {
  const gifts = [
    {
      id: 19,
      name: "Elephant Motif Copper Bottle",
      description: "Give the gift of health and tradition with our exquisite Elephant Motif Copper Bottle. Perfect for health-conscious family members, this premium copper bottle keeps water fresh while providing the health benefits of copper-enriched water. The beautiful elephant design adds a touch of elegance, making it a thoughtful gift for Dhanteras or any special occasion.",
      link: "/product/19",
      image: elephantCopperBottle
    },
    {
      id: 2,
      name: "Gold Pooja Thali",
      description: "An exquisite gold-plated pooja thali with intricate designs is the perfect gift for family members who value daily worship and spiritual practices. This complete set with all essential compartments is ideal for elaborate worship ceremonies. Perfect for parents, grandparents, or newlyweds setting up their sacred space.",
      link: "/product/2",
      image: goldPoojaThali
    },
    {
      id: 10,
      name: "Akhand Brass Diya",
      description: "The Akhand Brass Diya with glass protection cover represents eternal light and prosperity. This premium traditional brass lamp is perfect for continuous lighting during festivals and special occasions. Gift it to family members who appreciate authentic Indian craftsmanship and want to illuminate their homes with divine energy.",
      link: "/product/10",
      image: akhandBrassDiya
    },
    {
      id: 12,
      name: "Aarti Sangrah - Complete Prayer Book",
      description: "For spiritually inclined family members, the Aarti Sangrah is an invaluable gift. This premium prayer book in an elegant gift box contains a complete collection of traditional aartis and bhajans, helping preserve cultural heritage and making daily worship more meaningful. Perfect for grandparents, parents, or anyone who enjoys devotional singing.",
      link: "/product/12",
      image: aartiSangrah
    },
    {
      id: 13,
      name: "Laxmi Ganesh Puja Box - Small",
      description: "Bring blessings of wealth and wisdom to your family with the exquisite Laxmi Ganesh Puja Box featuring Goddess Laxmi with Lord Ganesha and Goddess Saraswati. This beautifully crafted set with traditional compartments is perfect for sacred ceremonies and worship at home. It's an especially thoughtful gift for new homeowners or during Diwali to invoke prosperity and success.",
      link: "/product/13",
      image: laxmiGaneshBox
    },
    {
      id: 3,
      name: "Silver Pooja Thali",
      description: "Show your love and appreciation with our elegant silver-plated pooja thali featuring traditional motifs. This premium quality craftsmanship piece is perfect for special occasions and daily worship, making it an ideal gift for all auspicious celebrations in your family.",
      link: "/product/3",
      image: silverPoojaThali
    },
    {
      id: 11,
      name: "Gold Kalash - Auspicious Vessel",
      description: "The Gold Kalash is a symbol of abundance and auspicious beginnings. This exquisite gold-finished sacred vessel with intricate engravings is perfect for religious ceremonies, water rituals, and makes an elegant gift for housewarmings, weddings, or any special milestone in your family's life. Its golden finish adds a touch of grandeur to any pooja room.",
      link: "/product/11",
      image: goldKalash
    },
    {
      id: 16,
      name: "Lord Krishna Statue",
      description: "Bring divine blessings into your family's home with this beautiful handcrafted Lord Krishna Statue with golden calf. Featuring intricate detailing and vibrant colors, this exquisite idol adds spiritual energy to any space and makes a perfect centerpiece for your home temple. An ideal gift for Janmashtami or as a blessing for a new home.",
      link: "/product/16",
      image: lordKrishnaStatue
    },
    {
      id: 24,
      name: "SiddhiVinayak Puja Box",
      description: "Gift success and new beginnings with the exquisite SiddhiVinayak puja box featuring Lord Ganesha with 8 sacred forms. Perfect for families celebrating milestones, housewarmings, or starting new ventures. This complete set brings blessings of wisdom and prosperity to your loved ones.",
      link: "/product/24",
      image: siddhivinayakPujaBox
    },
    {
      id: 31,
      name: "Ganesh Puja Box - Small",
      description: "This exquisite compact Ganesh puja box featuring Lord Ganesha with radiant golden aura is perfect for personal worship and sacred offerings. Ideal for families who want to bring divine blessings into their daily lives with elegant, space-saving devotional items.",
      link: "/product/31",
      image: ganeshPujaBox
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
              Top 10 Gifts to Give to Your Family
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Anshul Chadha</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>November 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden max-w-xl mx-auto">
            <img
              src={goldPoojaThali}
              alt="Premium Gold Pooja Thali - Perfect Family Gift"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Finding the perfect gift for your family members can be challenging, especially when you want to give something meaningful and culturally significant. At Pavitra Uphaar, we believe that the best gifts are those that combine tradition, spirituality, and practical value. Here are our top 10 gift recommendations that will bring joy, blessings, and positive energy to your loved ones.
            </p>

            {gifts.map((gift, index) => (
              <div key={gift.id} className="mb-10 pb-8 border-b border-border last:border-0">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {index + 1}. <Link to={gift.link} className="text-primary hover:underline">{gift.name}</Link>
                </h2>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-48 h-48 flex-shrink-0">
                    <img 
                      src={gift.image} 
                      alt={gift.name}
                      className="w-full h-full object-contain rounded-lg bg-muted/30"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {gift.description}
                    </p>
                    <Link to={gift.link}>
                      <Button variant="outline" className="mt-2">
                        View Product
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Conclusion */}
            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Final Thoughts</h2>
              <p className="text-muted-foreground leading-relaxed">
                These thoughtfully curated gifts from Pavitra Uphaar represent more than just material items – they're expressions of love, tradition, and spiritual connection. Whether you're celebrating a festival, marking a special occasion, or simply want to show appreciation to your family members, these sacred products will bring joy and blessings to their lives. Each item has been carefully selected for its quality, authenticity, and cultural significance, ensuring that your gift will be cherished for years to come.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogFamilyGifts;
