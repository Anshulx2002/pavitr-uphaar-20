import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import diwaliKitPremium from "@/assets/diwali-kit-premium.png";
import elephantCopperBottle from "@/assets/elephant-copper-bottle.png";
import raniMeherCopperBottle from "@/assets/rani-meher-copper-bottle.png";
import goldPoojaThali from "@/assets/gold-pooja-thali.jpg";
import signatureGiftBox from "@/assets/laxmi-ganesh-pooja-box.png";
import akhandBrassDiya from "@/assets/akhand-brass-diya.png";
import aartiSangrah from "@/assets/aarti-sangrah.png";
import laxmiGaneshBox from "@/assets/laxmi-ganesh-pooja-box.png";
import goldKalash from "@/assets/gold-kalash.png";
import lordKrishnaStatue from "@/assets/lord-krishna-statue.png";
import lotusLedDiya from "@/assets/lotus-led-diya.png";

const BlogFamilyGifts = () => {
  useScrollAnimation();
  
  const gifts = [
    {
      id: 47,
      name: "Elephant Motif Copper Bottle",
      description: "Give the gift of health and tradition with our <a href='/product/47' class='text-primary hover:underline'>Elephant Motif Copper Bottle</a>. Perfect for health-conscious family members, this premium copper bottle keeps water fresh while providing the health benefits of copper-enriched water. The beautiful elephant design adds a touch of elegance, making it a thoughtful gift for Dhanteras or any special occasion.",
      link: "/product/47",
      image: elephantCopperBottle
    },
    {
      id: 48,
      name: "Rani Meher Copper Bottle",
      description: "The <a href='/product/48' class='text-primary hover:underline'>Rani Meher Copper Bottle</a> features stunning traditional Rajasthani artwork. This exquisite copper bottle combines health benefits with cultural beauty, making it a unique gift that shows you care about your family's wellness and appreciate fine craftsmanship.",
      link: "/product/48",
      image: raniMeherCopperBottle
    },
    {
      id: 34,
      name: "Gold Pooja Thali",
      description: "The <a href='/product/34' class='text-primary hover:underline'>Gold Pooja Thali</a> is an exquisite gold-plated thali with intricate designs. Perfect for family members who value daily worship and spiritual practices, this complete set has all essential compartments for elaborate worship ceremonies and special occasions.",
      link: "/product/34",
      image: goldPoojaThali
    },
    {
      id: 19,
      name: "Signature Pooja Gift Box",
      description: "Our <a href='/product/19' class='text-primary hover:underline'>Signature Pooja Gift Box</a> is an exquisite hamper with handcrafted lotus diyas, traditional toran, fragrant incense and dhoop sticks, and premium cashews and raisins. Perfect for all auspicious occasions and bringing joy to the entire family.",
      link: "/product/19",
      image: signatureGiftBox
    },
    {
      id: 37,
      name: "Akhand Brass Diya",
      description: "The <a href='/product/37' class='text-primary hover:underline'>Akhand Brass Diya</a> represents eternal light and prosperity. This traditional brass lamp with glass protection cover is perfect for continuous lighting during festivals and special occasions, ideal for family members who appreciate authentic Indian craftsmanship.",
      link: "/product/37",
      image: akhandBrassDiya
    },
    {
      id: 39,
      name: "Aarti Sangrah - Complete Prayer Book",
      description: "For spiritually inclined family members, the <a href='/product/39' class='text-primary hover:underline'>Aarti Sangrah</a> is an invaluable gift. This comprehensive collection of traditional aartis in an elegant gift box helps preserve cultural heritage and makes daily worship more meaningful.",
      link: "/product/39",
      image: aartiSangrah
    },
    {
      id: 40,
      name: "Laxmi Ganesh Pooja Box",
      description: "Bring blessings of wealth and wisdom with the <a href='/product/40' class='text-primary hover:underline'>Laxmi Ganesh Pooja Box</a>. This exquisite wooden box with golden Laxmi Ganesh images is perfect for performing puja at home and makes a thoughtful gift for new homeowners.",
      link: "/product/40",
      image: laxmiGaneshBox
    },
    {
      id: 38,
      name: "Gold Kalash - Auspicious Vessel",
      description: "The <a href='/product/38' class='text-primary hover:underline'>Gold Kalash</a> is an exquisite gold-finished sacred vessel with intricate engravings. Perfect for religious ceremonies and makes an elegant gift for housewarmings, weddings, or any special milestone in your family's life.",
      link: "/product/38",
      image: goldKalash
    },
    {
      id: 43,
      name: "Lord Krishna Statue",
      description: "Bring divine blessings with this beautiful <a href='/product/43' class='text-primary hover:underline'>Lord Krishna Statue</a> with golden calf. This handcrafted idol features intricate detailing and vibrant colors, perfect for devotees and adding spiritual energy to any space.",
      link: "/product/43",
      image: lordKrishnaStatue
    },
    {
      id: 45,
      name: "Lotus LED Diya - Pack of 6",
      description: "Combine tradition with modern convenience with our <a href='/product/45' class='text-primary hover:underline'>Lotus LED Diya Pack of 6</a>. These beautiful crystal lotus LED diyas are perfect for families who want the aesthetic beauty of traditional lamps with the safety and convenience of LED lights.",
      link: "/product/45",
      image: lotusLedDiya
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/blogs">
          <Button variant="ghost" className="mb-8 group hover:translate-x-1 transition-transform">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Button>
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto scroll-animate opacity-0 translate-y-4 transition-all duration-700">
          <div className="mb-10">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                Gift Guide
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Top 10 Gifts to Give to Your Family
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Anshul Chadha</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary/70" />
                <span>May 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary/70" />
                <span>10 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 bg-gradient-to-br from-background via-primary/5 to-saffron/5">
            <img
              src={diwaliKitPremium}
              alt="Family gifts"
              loading="lazy"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/placeholder.svg'; }}
              className="w-full h-auto object-contain p-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 pl-6 border-l-4 border-primary/30">
              Finding the perfect gift for your family members can be challenging, especially when you want to give something meaningful and culturally significant. At Pavitra Uphaar, we believe that the best gifts are those that combine tradition, spirituality, and practical value. Here are our top 10 gift recommendations that will bring joy, blessings, and positive energy to your loved ones.
            </p>

            {gifts.map((gift, index) => (
              <div key={gift.id} className="mb-12 pb-10 border-b border-border/50 last:border-0 scroll-animate opacity-0 translate-y-4 transition-all duration-700" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mt-1">
                    {gift.name}
                  </h2>
                </div>
                <div 
                  className="text-muted-foreground leading-relaxed mb-6 text-lg ml-16"
                  dangerouslySetInnerHTML={{ __html: gift.description }}
                />
                <div className="ml-16 flex flex-col gap-4">
                  <div className="w-48 h-48 rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg bg-gradient-to-br from-background via-primary/5 to-saffron/5 p-4">
                    <img 
                      src={gift.image} 
                      alt={gift.name}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/placeholder.svg'; }}
                      className="w-full h-full object-contain hover-scale"
                    />
                  </div>
                  <Link to={gift.link} className="inline-block">
                    <Button variant="default" className="group shadow-lg hover:shadow-xl transition-all">
                      View Product
                      <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}

            {/* Conclusion */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 via-saffron/5 to-marigold/5 border-2 border-primary/20 rounded-2xl shadow-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-saffron to-primary rounded-full"></div>
                Final Thoughts
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
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
