import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ShareStoryModal from "./ShareStoryModal";

// Current Instagram posts data - Updated regularly
const instagramPosts = [
  {
    id: 1,
    image: "/src/assets/diwali-kit.jpg",
    caption: "Divine Diwali preparations with our complete festive kit",
    likes: 342,
    date: "1 day ago"
  },
  {
    id: 2,
    image: "/src/assets/pooja-thali.jpg",
    caption: "Handcrafted brass pooja thali - where tradition meets elegance",
    likes: 278,
    date: "2 days ago"
  },
  {
    id: 3,
    image: "/src/assets/diya.jpg",
    caption: "Traditional clay diyas bringing warmth to every home",
    likes: 456,
    date: "3 days ago"
  },
  {
    id: 4,
    image: "/src/assets/navratri-kit.jpg",
    caption: "Celebrating nine nights of devotion with our Navratri essentials",
    likes: 189,
    date: "4 days ago"
  },
  {
    id: 5,
    image: "/src/assets/rudraksha.jpg",
    caption: "Sacred Rudraksha beads for meditation and spiritual protection",
    likes: 234,
    date: "5 days ago"
  },
  {
    id: 6,
    image: "/src/assets/agarbatti.jpg",
    caption: "Premium sandalwood incense sticks for peaceful prayers",
    likes: 167,
    date: "6 days ago"
  },
  {
    id: 7,
    image: "/src/assets/garland.jpg",
    caption: "Fresh marigold garlands crafted with devotion",
    likes: 145,
    date: "1 week ago"
  },
  {
    id: 8,
    image: "/src/assets/kumkum.jpg",
    caption: "Pure kumkum and tilaka for your daily worship rituals",
    likes: 123,
    date: "1 week ago"
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Follow Our Journey</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our daily spiritual offerings and customer celebrations
          </p>
        </div>

        {/* Instagram Grid - 3 cols desktop, 2 tablet, 1 mobile with 16px gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {instagramPosts.slice(0, 6).map((post) => (
            <div key={post.id} className="group">
              {/* Square Image Tile */}
              <div
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => window.open('https://instagram.com/pavitra.uphaar', '_blank')}
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Desktop Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hidden md:flex">
                  <div className="text-white text-center p-4">
                    <Instagram className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-medium mb-1">{post.likes} likes</p>
                    <p className="text-xs opacity-90">{post.date}</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Caption Below */}
              <div className="md:hidden mt-3 text-center">
                <p className="text-sm text-muted-foreground font-medium">{post.likes} likes</p>
                <p className="text-xs text-muted-foreground/80">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Single Centered CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://instagram.com/pavitra.uphaar', '_blank')}
          >
            <Instagram className="h-5 w-5 mr-2" />
            Follow @pavitra.uphaar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;