import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogFamilyGifts = () => {
  const gifts = [
    {
      id: 47,
      name: "Elephant Motif Copper Bottle",
      description: "Give the gift of health and tradition with our exquisite Elephant Motif Copper Bottle. Perfect for health-conscious family members, this premium copper bottle keeps water fresh while providing the health benefits of copper-enriched water. The beautiful elephant design adds a touch of elegance, making it a thoughtful gift for Dhanteras or any special occasion.",
      link: "/product/47"
    },
    {
      id: 1,
      name: "Premium Pooja Thali Set",
      description: "A complete Premium Pooja Thali Set is the perfect gift for family members who value daily worship and spiritual practices. This elegant brass thali comes with all essential items needed for performing aarti and pooja ceremonies. It's an ideal gift for parents, grandparents, or newlyweds setting up their sacred space.",
      link: "/product/1"
    },
    {
      id: 30,
      name: "Diwali Gift Box - Premium Collection",
      description: "Celebrate the festival of lights with our Premium Diwali Gift Box, a complete festive hamper that brings joy to the entire family. This beautifully curated collection includes traditional items perfect for Diwali celebrations, making it an ideal gift for relatives and loved ones during the festive season.",
      link: "/product/30"
    },
    {
      id: 24,
      name: "Akhand Brass Diya",
      description: "The Akhand Brass Diya represents eternal light and prosperity. This traditional brass lamp is perfect for continuous lighting during festivals and special occasions. Gift it to family members who appreciate authentic Indian craftsmanship and want to illuminate their homes with divine energy.",
      link: "/product/24"
    },
    {
      id: 20,
      name: "Aarti Sangrah - Complete Prayer Book",
      description: "For spiritually inclined family members, the Aarti Sangrah is an invaluable gift. This comprehensive collection of traditional aartis and bhajans helps preserve cultural heritage and makes daily worship more meaningful. Perfect for grandparents, parents, or anyone who enjoys devotional singing.",
      link: "/product/20"
    },
    {
      id: 26,
      name: "Laxmi Ganesh Pooja Box",
      description: "Bring blessings of wealth and wisdom to your family with the Laxmi Ganesh Pooja Box. This beautifully crafted set is perfect for performing Lakshmi-Ganesh puja at home. It's an especially thoughtful gift for new homeowners or during Diwali to invoke prosperity and success.",
      link: "/product/26"
    },
    {
      id: 31,
      name: "Karva Chauth Gift Box",
      description: "Show your love and appreciation with the specially curated Karva Chauth Gift Box. Perfect for wives, mothers, and daughters-in-law, this elegant gift set contains all the essentials for observing the Karva Chauth fast and celebration, making the day even more special.",
      link: "/product/31"
    },
    {
      id: 25,
      name: "Gold Kalash - Auspicious Vessel",
      description: "The Gold Kalash is a symbol of abundance and auspicious beginnings. This sacred vessel is perfect for religious ceremonies and makes an elegant gift for housewarmings, weddings, or any special milestone in your family's life. Its golden finish adds a touch of grandeur to any pooja room.",
      link: "/product/25"
    },
    {
      id: 28,
      name: "Lord Krishna Statue - Exquisite Idol",
      description: "Bring divine blessings into your family's home with this beautiful Lord Krishna Statue. Perfect for devotees and collectors, this exquisitely crafted idol adds spiritual energy to any space. An ideal gift for Janmashtami or as a blessing for a new home.",
      link: "/product/28"
    },
    {
      id: 46,
      name: "Lotus LED Diya - Set of 6",
      description: "Combine tradition with modern convenience with our beautiful Lotus LED Diya set. These eco-friendly, reusable diyas are perfect for families who want the aesthetic beauty of traditional lamps with the safety and convenience of LED lights. Ideal for festivals, celebrations, and creating a serene ambiance at home.",
      link: "/product/46"
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
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src="/src/assets/gold-pooja-thali.jpg"
              alt="Premium Gold Pooja Thali - Perfect Family Gift"
              className="w-full h-auto"
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
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {gift.description}
                </p>
                <Link to={gift.link}>
                  <Button variant="outline" className="mt-2">
                    View Product
                  </Button>
                </Link>
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
