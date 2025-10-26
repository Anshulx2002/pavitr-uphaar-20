import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Sacred Significance of Diwali: Traditions and Rituals",
      excerpt: "Explore the deep spiritual meaning behind Diwali celebrations, from lighting diyas to performing Lakshmi Puja. Learn about the ancient traditions that make this festival of lights truly special.",
      author: "Pavitra Uphaar Team",
      date: "October 20, 2024",
      readTime: "5 min read",
      image: "/lovable-uploads/0ab4aa57-a2b8-462d-88ab-8fda71e755d9.png"
    },
    {
      id: 2,
      title: "Essential Pooja Items Every Home Should Have",
      excerpt: "A comprehensive guide to building your sacred space at home. Discover the must-have items for daily worship and special occasions, from brass diyas to pure incense sticks.",
      author: "Pavitra Uphaar Team",
      date: "October 15, 2024",
      readTime: "7 min read",
      image: "/lovable-uploads/18f62fac-4131-4917-b863-cb0619cb947d.png"
    },
    {
      id: 3,
      title: "Understanding Copper Water Benefits in Ayurveda",
      excerpt: "Discover the ancient wisdom of storing water in copper vessels. Learn about the health benefits backed by both Ayurvedic tradition and modern science.",
      author: "Pavitra Uphaar Team",
      date: "October 10, 2024",
      readTime: "6 min read",
      image: "/lovable-uploads/48bb1f46-28a4-4f5b-a779-2f3ca83fd4c7.png"
    },
    {
      id: 4,
      title: "Celebrating Navratri: Nine Days of Divine Devotion",
      excerpt: "A complete guide to Navratri celebrations, including daily rituals, fasting tips, and the significance of each day dedicated to the nine forms of Goddess Durga.",
      author: "Pavitra Uphaar Team",
      date: "October 5, 2024",
      readTime: "8 min read",
      image: "/lovable-uploads/9a70ebdf-b809-4775-b7cb-d4a5f83de787.png"
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
            <article
              key={post.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
