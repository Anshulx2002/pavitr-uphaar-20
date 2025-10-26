import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogCorporateGiftsImage from "@/assets/blog-corporate-gifts.jpg";

const BlogCorporateGifts = () => {
  const gifts = [
    {
      id: 47,
      name: "Elephant Motif Copper Bottle",
      description: "Elevate your corporate gifting with our premium Elephant Motif Copper Bottle. This sophisticated gift combines health benefits with elegant design, making it perfect for wellness-focused companies. Your team members will appreciate this thoughtful gift that promotes healthy living while showcasing exquisite Indian craftsmanship. Ideal for Dhanteras corporate gifting or employee appreciation events.",
      link: "/product/47"
    },
    {
      id: 48,
      name: "Rani Meher Copper Bottle",
      description: "The Rani Meher Copper Bottle features stunning traditional Rajasthani artwork, making it a unique corporate gift that stands out. This luxurious copper bottle is perfect for executive gifting or as premium employee appreciation gifts. It represents both wellness and cultural heritage, making a lasting impression on your team members.",
      link: "/product/48"
    },
    {
      id: 30,
      name: "Diwali Gift Box - Premium Collection",
      description: "Make your corporate Diwali celebrations memorable with our Premium Diwali Gift Box. This complete festive hamper is perfect for gifting to clients and team members during the festival of lights. The beautifully packaged collection reflects your company's appreciation and festive spirit, making it an ideal choice for bulk corporate gifting.",
      link: "/product/30"
    },
    {
      id: 31,
      name: "Karva Chauth Gift Box",
      description: "Show your company's thoughtfulness by gifting female team members the elegant Karva Chauth Gift Box. This specially curated collection demonstrates your organization's cultural sensitivity and care for employees' traditional celebrations. It's a meaningful way to acknowledge and respect diverse cultural practices in your workplace.",
      link: "/product/31"
    },
    {
      id: 1,
      name: "Premium Pooja Thali Set",
      description: "For corporate gifting during festivals or housewarming celebrations of team members, the Premium Pooja Thali Set is an exceptional choice. This elegant brass thali set represents blessings and prosperity, making it a prestigious gift that conveys respect and good wishes. Perfect for senior management and executive gifting.",
      link: "/product/1"
    },
    {
      id: 26,
      name: "Laxmi Ganesh Pooja Box",
      description: "Gift prosperity and success to your team with the Laxmi Ganesh Pooja Box. This beautifully crafted set is perfect for corporate Diwali gifting or for celebrating business milestones. It symbolizes wealth and wisdom, making it an auspicious gift that aligns with your company's success and growth aspirations.",
      link: "/product/26"
    },
    {
      id: 24,
      name: "Akhand Brass Diya",
      description: "The Akhand Brass Diya represents continuous success and eternal light – perfect symbolism for corporate gifting. This traditional brass lamp is an elegant gift for festivals, business inaugurations, or employee recognition programs. Its timeless design and spiritual significance make it a memorable corporate gift.",
      link: "/product/24"
    },
    {
      id: 25,
      name: "Gold Kalash - Auspicious Vessel",
      description: "The Gold Kalash is a symbol of abundance and prosperity, making it an ideal corporate gift for special occasions. Perfect for gifting during office inaugurations, milestone celebrations, or as executive gifts, this sacred vessel adds a touch of grandeur and cultural elegance to any corporate gifting program.",
      link: "/product/25"
    },
    {
      id: 46,
      name: "Lotus LED Diya - Set of 6",
      description: "Combine tradition with modern convenience in your corporate gifting with our Lotus LED Diya set. These eco-friendly, elegant diyas are perfect for office décor or as festival gifts for team members. The set of 6 makes it ideal for bulk corporate orders, offering both aesthetic appeal and practical functionality.",
      link: "/product/46"
    },
    {
      id: 20,
      name: "Aarti Sangrah - Complete Prayer Book",
      description: "For team members who value spirituality and tradition, the Aarti Sangrah makes a thoughtful corporate gift. This comprehensive prayer book helps preserve cultural heritage and supports employees' spiritual practices. It's a unique gift that shows your company's respect for diverse beliefs and cultural traditions.",
      link: "/product/20"
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
                <span>January 18, 2025</span>
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
              src={blogCorporateGiftsImage}
              alt="Corporate gifts"
              className="w-full h-auto"
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
