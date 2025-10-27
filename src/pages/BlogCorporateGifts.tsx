import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import elephantCopperBottle from "@/assets/elephant-copper-bottle.png";
import raniMeherCopperBottle from "@/assets/rani-meher-copper-bottle.png";
import signatureGiftBox from "@/assets/laxmi-ganesh-pooja-box.png";
import goldPoojaThali from "@/assets/gold-pooja-thali.jpg";
import laxmiGaneshBox from "@/assets/laxmi-ganesh-pooja-box.png";
import akhandBrassDiya from "@/assets/akhand-brass-diya.png";
import goldKalash from "@/assets/gold-kalash.png";
import lotusLedDiya from "@/assets/lotus-led-diya.png";
import aartiSangrah from "@/assets/aarti-sangrah.png";
import sandalwoodAgarbatti from "@/assets/sandalwood.jpg";

const BlogCorporateGifts = () => {
  useScrollAnimation();
  
  const gifts = [
    {
      id: 47,
      name: "Elephant Motif Copper Bottle",
      description: "Elevate your corporate gifting with our premium <a href='/product/47' class='text-primary hover:underline'>Elephant Motif Copper Bottle</a>. This sophisticated gift combines health benefits with elegant design, making it perfect for wellness-focused companies. Your team members will appreciate this thoughtful gift that promotes healthy living while showcasing exquisite Indian craftsmanship.",
      link: "/product/47",
      image: elephantCopperBottle
    },
    {
      id: 48,
      name: "Rani Meher Copper Bottle",
      description: "The <a href='/product/48' class='text-primary hover:underline'>Rani Meher Copper Bottle</a> features stunning traditional Rajasthani artwork, making it a unique corporate gift that stands out. This luxurious copper bottle is perfect for executive gifting or as premium employee appreciation gifts, representing both wellness and cultural heritage.",
      link: "/product/48",
      image: raniMeherCopperBottle
    },
    {
      id: 19,
      name: "Signature Pooja Gift Box",
      description: "Make your corporate celebrations memorable with our <a href='/product/19' class='text-primary hover:underline'>Signature Pooja Gift Box</a>. This exquisite hamper with handcrafted lotus diyas, traditional toran, fragrant incense and dhoop sticks reflects your company's appreciation and festive spirit, making it ideal for bulk corporate gifting.",
      link: "/product/19",
      image: signatureGiftBox
    },
    {
      id: 34,
      name: "Gold Pooja Thali",
      description: "For corporate gifting during festivals or special occasions, the <a href='/product/34' class='text-primary hover:underline'>Gold Pooja Thali</a> is an exceptional choice. This exquisite gold-plated thali set represents blessings and prosperity, making it a prestigious gift perfect for senior management and executive gifting.",
      link: "/product/34",
      image: goldPoojaThali
    },
    {
      id: 40,
      name: "Laxmi Ganesh Pooja Box",
      description: "Gift prosperity and success with the <a href='/product/40' class='text-primary hover:underline'>Laxmi Ganesh Pooja Box</a>. This beautifully crafted wooden box with golden Laxmi Ganesh images is perfect for corporate celebrations or business milestones, symbolizing wealth and wisdom.",
      link: "/product/40",
      image: laxmiGaneshBox
    },
    {
      id: 37,
      name: "Akhand Brass Diya",
      description: "The <a href='/product/37' class='text-primary hover:underline'>Akhand Brass Diya</a> represents continuous success and eternal light – perfect symbolism for corporate gifting. This premium brass lamp with glass protection is elegant for festivals, business inaugurations, or employee recognition programs.",
      link: "/product/37",
      image: akhandBrassDiya
    },
    {
      id: 38,
      name: "Gold Kalash - Auspicious Vessel",
      description: "The <a href='/product/38' class='text-primary hover:underline'>Gold Kalash</a> is a symbol of abundance and prosperity, making it an ideal corporate gift. Perfect for office inaugurations, milestone celebrations, or as executive gifts, this exquisite gold-finished sacred vessel adds grandeur to any corporate gifting program.",
      link: "/product/38",
      image: goldKalash
    },
    {
      id: 45,
      name: "Lotus LED Diya - Pack of 6",
      description: "Combine tradition with modern convenience with our <a href='/product/45' class='text-primary hover:underline'>Lotus LED Diya Pack of 6</a>. These eco-friendly, elegant crystal lotus diyas are perfect for office décor or as festival gifts, ideal for bulk corporate orders.",
      link: "/product/45",
      image: lotusLedDiya
    },
    {
      id: 39,
      name: "Aarti Sangrah - Complete Prayer Book",
      description: "For team members who value spirituality, the <a href='/product/39' class='text-primary hover:underline'>Aarti Sangrah</a> makes a thoughtful corporate gift. This comprehensive prayer book in an elegant gift box shows your company's respect for diverse beliefs and cultural traditions.",
      link: "/product/39",
      image: aartiSangrah
    },
    {
      id: 1,
      name: "Premium Sandalwood Agarbatti",
      description: "Gift wellness and tranquility with our <a href='/product/1' class='text-primary hover:underline'>Premium Sandalwood Agarbatti</a>. These hand-rolled incense sticks made from pure sandalwood create a peaceful atmosphere, perfect for corporate gifts that promote mindfulness and well-being.",
      link: "/product/1",
      image: sandalwoodAgarbatti
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
                Corporate Gifting
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Top 10 Perfect Corporate Gifts to Give Your Team Members
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
                <span>April 18, 2025</span>
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
              src={elephantCopperBottle}
              alt="Corporate gifts"
              className="w-full h-auto object-contain p-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 pl-6 border-l-4 border-primary/30">
              Corporate gifting is more than just a gesture – it's an opportunity to strengthen relationships, show appreciation, and build a positive workplace culture. When it comes to choosing gifts for your team members, selecting items that blend tradition, quality, and cultural significance can make a lasting impression. At Pavitra Uphaar, we offer premium sacred products that are perfect for corporate gifting. Here are our top 10 recommendations for corporate gifts that will resonate with your team members.
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
                Why Choose Pavitra Uphaar for Corporate Gifting?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                At Pavitra Uphaar, we understand that corporate gifting is about building meaningful connections with your team members. Our carefully curated collection of traditional and sacred products offers the perfect blend of cultural significance, premium quality, and thoughtful presentation. Each item is selected to convey respect, appreciation, and good wishes.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Whether you're celebrating festivals like Diwali and Dhanteras, marking company milestones, or simply expressing appreciation for your team's hard work, these gifts will leave a lasting positive impression. They demonstrate your company's cultural sensitivity and commitment to honoring traditional values while maintaining a modern, professional approach.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                For bulk orders and custom corporate gifting solutions, please visit our <Link to="/corporate-gifting" className="text-primary hover:underline font-medium">Corporate Gifting page</Link> or <Link to="/contact" className="text-primary hover:underline font-medium">contact us</Link> directly. We offer special pricing for bulk orders and can help customize your corporate gifting experience to perfectly match your company's needs and values.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogCorporateGifts;
