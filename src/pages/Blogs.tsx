import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import diwaliKitPremium from "@/assets/diwali-kit-premium.png";
import elephantCopperBottle from "@/assets/elephant-copper-bottle.png";
import goldPoojaThali from "@/assets/gold-pooja-thali.jpg";
import raniMeherCopperBottle from "@/assets/rani-meher-copper-bottle.png";

const Blogs = () => {
  useScrollAnimation();
  
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Gifts to Give to Your Family",
      excerpt: "Discover the perfect traditional and sacred gifts for your loved ones. From copper bottles to pooja thalis, find meaningful presents that combine health, spirituality, and cultural significance.",
      author: "Anshul Chadha",
      date: "May 15, 2025",
      readTime: "10 min read",
      image: diwaliKitPremium,
      link: "/blog/family-gifts"
    },
    {
      id: 2,
      title: "Top 10 Perfect Corporate Gifts to Give Your Team Members",
      excerpt: "Elevate your corporate gifting with these premium traditional products. Learn how to choose meaningful gifts that strengthen workplace relationships and celebrate cultural traditions.",
      author: "Anshul Chadha",
      date: "April 18, 2025",
      readTime: "10 min read",
      image: elephantCopperBottle,
      link: "/blog/corporate-gifts"
    },
    {
      id: 3,
      title: "Essential Pooja Items Every Home Should Have",
      excerpt: "A comprehensive guide to building your sacred space at home. Discover the must-have items for daily worship and special occasions, from brass diyas to pure incense sticks.",
      author: "Pavitra Uphaar Team",
      date: "January 5, 2025",
      readTime: "7 min read",
      image: goldPoojaThali,
      link: "/blog/essential-pooja-items"
    },
    {
      id: 4,
      title: "Understanding Copper Water Bottle Benefits in Ayurveda",
      excerpt: "Discover the ancient wisdom of storing water in copper vessels. Learn about the health benefits backed by both Ayurvedic tradition and modern science.",
      author: "Pavitra Uphaar Team",
      date: "October 10, 2025",
      readTime: "6 min read",
      image: raniMeherCopperBottle,
      link: "/blog/copper-bottle-benefits"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section with Gradient */}
        <div className="text-center mb-16 scroll-animate opacity-0 translate-y-4 transition-all duration-700">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
              Insights & Stories
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Blog
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron via-primary to-marigold mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the wisdom of ancient traditions, spiritual practices, and sacred rituals
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={post.link}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 scroll-animate opacity-0 translate-y-4"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <article className="h-full flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-3 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-6 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary/70" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/70" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary/70" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
