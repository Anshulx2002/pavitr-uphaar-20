import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import elephantCopperBottle from "@/assets/elephant-copper-bottle.png";
import raniMeherBottle from "@/assets/rani-meher-copper-bottle.png";
import goldPoojaThali from "@/assets/gold-pooja-thali.jpg";
import silverPoojaThali from "@/assets/silver-pooja-thali.jpg";
import laxmiGaneshBox from "@/assets/laxmi-ganesh-puja-box-small.png";
import akhandBrassDiya from "@/assets/akhand-brass-diya.png";
import goldKalash from "@/assets/gold-kalash.png";
import aartiSangrah from "@/assets/aarti-sangrah.png";
import siddhivinayakPujaBox from "@/assets/siddhivinayak-puja-box.png";
import radhakrishnaPujaBox from "@/assets/radhakrishna-puja-box.png";
import goldenTemplePujaBox from "@/assets/golden-temple-puja-box-big.png";
import ramparivarAyodhyaPujaBox from "@/assets/ramparivar-ayodhya-puja-box-big.png";

const BlogCorporateGifts = () => {
  const gifts = [
    {
      id: 19,
      name: "Elephant Motif Copper Bottle",
      description: "Elevate your corporate gifting with our premium Elephant Motif Copper Bottle with exquisite elephant motif design. This sophisticated gift combines health benefits with elegant design, making it perfect for wellness-focused companies. Your team members will appreciate this thoughtful gift that promotes healthy living while showcasing authentic Indian craftsmanship. Ideal for Dhanteras corporate gifting or employee appreciation events.",
      link: "/products/19",
      image: elephantCopperBottle
    },
    {
      id: 20,
      name: "Rani Meher Copper Bottle",
      description: "The Rani Meher Copper Bottle features stunning traditional Rajasthani Rani Meher artwork, making it a unique corporate gift that stands out. This luxurious copper bottle is perfect for executive gifting or as premium employee appreciation gifts. It represents both wellness and cultural heritage, making a lasting impression on your team members.",
      link: "/products/20",
      image: raniMeherBottle
    },
    {
      id: 2,
      name: "Gold Pooja Thali",
      description: "For corporate gifting during festivals or special celebrations, this exquisite gold-plated pooja thali with intricate designs is an exceptional choice. The complete set with essential compartments represents blessings and prosperity, making it a prestigious gift that conveys respect and good wishes. Perfect for senior management and executive gifting.",
      link: "/products/2",
      image: goldPoojaThali
    },
    {
      id: 3,
      name: "Silver Pooja Thali",
      description: "Gift elegance and tradition with our premium silver-plated pooja thali featuring traditional motifs. This beautifully crafted piece demonstrates your company's respect for cultural values and makes an impressive corporate gift for special occasions, housewarmings, or festival celebrations.",
      link: "/products/3",
      image: silverPoojaThali
    },
    {
      id: 13,
      name: "Laxmi Ganesh Puja Box - Small",
      description: "Gift prosperity and success to your team with the exquisite Laxmi Ganesh Puja Box featuring Goddess Laxmi with Lord Ganesha and Goddess Saraswati. This beautifully crafted set with traditional compartments is perfect for corporate Diwali gifting or for celebrating business milestones. It symbolizes wealth and wisdom, making it an auspicious gift that aligns with your company's success and growth aspirations.",
      link: "/products/13",
      image: laxmiGaneshBox
    },
    {
      id: 10,
      name: "Akhand Brass Diya",
      description: "The premium Akhand Brass Diya with glass protection cover represents continuous success and eternal light – perfect symbolism for corporate gifting. This traditional brass lamp is an elegant gift for festivals, business inaugurations, or employee recognition programs. Its timeless design and spiritual significance make it a memorable corporate gift.",
      link: "/products/10",
      image: akhandBrassDiya
    },
    {
      id: 11,
      name: "Gold Kalash - Auspicious Vessel",
      description: "The Gold Kalash is an exquisite gold-finished sacred vessel with intricate engravings, symbolizing abundance and prosperity. This makes it an ideal corporate gift for special occasions. Perfect for gifting during office inaugurations, milestone celebrations, or as executive gifts, this sacred vessel adds a touch of grandeur and cultural elegance to any corporate gifting program.",
      link: "/products/11",
      image: goldKalash
    },
    {
      id: 12,
      name: "Aarti Sangrah - Complete Prayer Book",
      description: "For team members who value spirituality and tradition, the premium Aarti Sangrah in an elegant gift box makes a thoughtful corporate gift. This comprehensive collection of traditional aartis helps preserve cultural heritage and supports employees' spiritual practices. It's a unique gift that shows your company's respect for diverse beliefs and cultural traditions.",
      link: "/products/12",
      image: aartiSangrah
    },
    {
      id: 24,
      name: "SiddhiVinayak Puja Box",
      description: "The exquisite SiddhiVinayak puja box featuring Lord Ganesha with 8 sacred forms is perfect for corporate gifting during festivals or auspicious occasions. This complete set with compartments for sacred offerings represents new beginnings and success, making it an ideal gift for business inaugurations or celebrating company milestones.",
      link: "/products/24",
      image: siddhivinayakPujaBox
    },
    {
      id: 25,
      name: "Radhakrishna Puja Box",
      description: "Gift divine blessings with this beautiful Radhakrishna puja box featuring divine Radha-Krishna imagery. Its compact size and elegant design make it perfect for personal worship spaces in offices or as thoughtful gifts for team members who value spirituality and tradition.",
      link: "/products/25",
      image: radhakrishnaPujaBox
    },
    {
      id: 45,
      name: "Golden Temple Puja Box - Big",
      description: "Make a grand impression with the magnificent Golden Temple (Harmandir Sahib) puja box featuring intricate architectural detailing of the sacred shrine. This premium deluxe set represents peace, prosperity, and spiritual harmony - perfect for high-value corporate gifting or honoring business partnerships.",
      link: "/products/45",
      image: goldenTemplePujaBox
    },
    {
      id: 47,
      name: "Ramparivar Ayodhya Mandir Puja Box - Big",
      description: "This premium commemorative puja box features the magnificent Ayodhya Ram Mandir temple and sacred Ram Parivar artwork. With gold-plated ceremonial items in luxurious red velvet interior, it's a divine keepsake perfect for celebrating cultural milestones and special corporate occasions.",
      link: "/products/47",
      image: ramparivarAyodhyaPujaBox
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
              Top 10 Perfect Corporate Gifts to Give Your Team Members
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Anshul Chadha</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>November 18, 2024</span>
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
              src={elephantCopperBottle}
              alt="Corporate gifts - Premium Copper Bottle"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Corporate gifting is more than just a gesture – it's an opportunity to strengthen relationships, show appreciation, and build a positive workplace culture. When it comes to choosing gifts for your team members, selecting items that blend tradition, quality, and cultural significance can make a lasting impression. At Pavitra Uphaar, we offer premium sacred products that are perfect for corporate gifting. Here are our top 10 recommendations for corporate gifts that will resonate with your team members.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Pavitra Uphaar for Corporate Gifting?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Pavitra Uphaar, we understand that corporate gifting is about building meaningful connections with your team members. Our carefully curated collection of traditional and sacred products offers the perfect blend of cultural significance, premium quality, and thoughtful presentation. Each item is selected to convey respect, appreciation, and good wishes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether you're celebrating festivals like Diwali and Dhanteras, marking company milestones, or simply expressing appreciation for your team's hard work, these gifts will leave a lasting positive impression. They demonstrate your company's cultural sensitivity and commitment to honoring traditional values while maintaining a modern, professional approach.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For bulk orders and custom corporate gifting solutions, please visit our <Link to="/corporate-gifting" className="text-primary hover:underline">Corporate Gifting page</Link> or <Link to="/contact" className="text-primary hover:underline">contact us</Link> directly. We offer special pricing for bulk orders and can help customize your corporate gifting experience to perfectly match your company's needs and values.
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
