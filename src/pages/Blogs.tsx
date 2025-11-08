import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Gifts to Give to Your Family",
      excerpt: "Discover the perfect traditional and sacred gifts for your loved ones. From copper bottles to pooja thalis, find meaningful presents that combine health, spirituality, and cultural significance.",
      author: "Anshul Chadha",
      date: "November 15, 2024",
      readTime: "10 min read",
      image: "/src/assets/gold-pooja-thali.jpg",
      link: "/blog/family-gifts"
    },
    {
      id: 2,
      title: "Top 10 Perfect Corporate Gifts to Give Your Team Members",
      excerpt: "Elevate your corporate gifting with these premium traditional products. Learn how to choose meaningful gifts that strengthen workplace relationships and celebrate cultural traditions.",
      author: "Anshul Chadha",
      date: "November 18, 2024",
      readTime: "10 min read",
      image: "/src/assets/elephant-copper-bottle.png",
      link: "/blog/corporate-gifts"
    },
    {
      id: 3,
      title: "The Sacred Significance of Diwali: Traditions and Rituals",
      excerpt: "Explore the deep spiritual meaning behind Diwali celebrations, from lighting diyas to performing Lakshmi Puja. Learn about the ancient traditions that make this festival of lights truly special.",
      author: "Pavitra Uphaar Team",
      date: "October 20, 2024",
      readTime: "5 min read",
      image: "/src/assets/akhand-brass-diya.png",
      link: "#"
    },
    {
      id: 4,
      title: "Understanding Copper Water Benefits in Ayurveda",
      excerpt: "Discover the ancient wisdom of storing water in copper vessels. Learn about the health benefits backed by both Ayurvedic tradition and modern science.",
      author: "Pavitra Uphaar Team",
      date: "October 10, 2024",
      readTime: "6 min read",
      image: "/src/assets/rani-meher-copper-bottle.png",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the wisdom of ancient traditions, spiritual practices, and sacred rituals
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={post.link}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <article>
                <div className="aspect-video overflow-hidden bg-muted/30">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
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
