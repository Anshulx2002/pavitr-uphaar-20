import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogFamilyGiftsImage from "@/assets/blog-family-gifts.jpg";

const BlogFamilyGifts = () => {
  const gifts = [
    {
      id: 47,
      name: "Elephant Motif Copper Bottle",
      description: "Give the gift of health and tradition with our <a href='/product/47' class='text-primary hover:underline'>Elephant Motif Copper Bottle</a>. Perfect for health-conscious family members, this premium copper bottle keeps water fresh while providing the health benefits of copper-enriched water. The beautiful elephant design adds a touch of elegance, making it a thoughtful gift for Dhanteras or any special occasion.",
      link: "/product/47"
    },
    {
      id: 48,
      name: "Rani Meher Copper Bottle",
      description: "The <a href='/product/48' class='text-primary hover:underline'>Rani Meher Copper Bottle</a> features stunning traditional Rajasthani artwork. This exquisite copper bottle combines health benefits with cultural beauty, making it a unique gift that shows you care about your family's wellness and appreciate fine craftsmanship.",
      link: "/product/48"
    },
    {
      id: 34,
      name: "Gold Pooja Thali",
      description: "The <a href='/product/34' class='text-primary hover:underline'>Gold Pooja Thali</a> is an exquisite gold-plated thali with intricate designs. Perfect for family members who value daily worship and spiritual practices, this complete set has all essential compartments for elaborate worship ceremonies and special occasions.",
      link: "/product/34"
    },
    {
      id: 19,
      name: "Signature Pooja Gift Box",
      description: "Our <a href='/product/19' class='text-primary hover:underline'>Signature Pooja Gift Box</a> is an exquisite hamper with handcrafted lotus diyas, traditional toran, fragrant incense and dhoop sticks, and premium cashews and raisins. Perfect for all auspicious occasions and bringing joy to the entire family.",
      link: "/product/19"
    },
    {
      id: 37,
      name: "Akhand Brass Diya",
      description: "The <a href='/product/37' class='text-primary hover:underline'>Akhand Brass Diya</a> represents eternal light and prosperity. This traditional brass lamp with glass protection cover is perfect for continuous lighting during festivals and special occasions, ideal for family members who appreciate authentic Indian craftsmanship.",
      link: "/product/37"
    },
    {
      id: 39,
      name: "Aarti Sangrah - Complete Prayer Book",
      description: "For spiritually inclined family members, the <a href='/product/39' class='text-primary hover:underline'>Aarti Sangrah</a> is an invaluable gift. This comprehensive collection of traditional aartis in an elegant gift box helps preserve cultural heritage and makes daily worship more meaningful.",
      link: "/product/39"
    },
    {
      id: 40,
      name: "Laxmi Ganesh Pooja Box",
      description: "Bring blessings of wealth and wisdom with the <a href='/product/40' class='text-primary hover:underline'>Laxmi Ganesh Pooja Box</a>. This exquisite wooden box with golden Laxmi Ganesh images is perfect for performing puja at home and makes a thoughtful gift for new homeowners.",
      link: "/product/40"
    },
    {
      id: 38,
      name: "Gold Kalash - Auspicious Vessel",
      description: "The <a href='/product/38' class='text-primary hover:underline'>Gold Kalash</a> is an exquisite gold-finished sacred vessel with intricate engravings. Perfect for religious ceremonies and makes an elegant gift for housewarmings, weddings, or any special milestone in your family's life.",
      link: "/product/38"
    },
    {
      id: 43,
      name: "Lord Krishna Statue",
      description: "Bring divine blessings with this beautiful <a href='/product/43' class='text-primary hover:underline'>Lord Krishna Statue</a> with golden calf. This handcrafted idol features intricate detailing and vibrant colors, perfect for devotees and adding spiritual energy to any space.",
      link: "/product/43"
    },
    {
      id: 45,
      name: "Lotus LED Diya - Pack of 6",
      description: "Combine tradition with modern convenience with our <a href='/product/45' class='text-primary hover:underline'>Lotus LED Diya Pack of 6</a>. These beautiful crystal lotus LED diyas are perfect for families who want the aesthetic beauty of traditional lamps with the safety and convenience of LED lights.",
      link: "/product/45"
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
                <span>May 15, 2025</span>
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
              src={blogFamilyGiftsImage}
              alt="Family gifts"
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
                  {index + 1}. {gift.name}
                </h2>
                <div 
                  className="text-muted-foreground leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: gift.description }}
                />
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
