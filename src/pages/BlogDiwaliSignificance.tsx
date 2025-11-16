import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import akhandBrassDiya from "@/assets/akhand-brass-diya.png";

const BlogDiwaliSignificance = () => {
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
              The Sacred Significance of Diwali: Traditions and Rituals
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Pavitra Uphaar Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 20, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden max-w-xl mx-auto">
            <img
              src={akhandBrassDiya}
              alt="Traditional Akhand Brass Diya for Diwali"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Diwali, the festival of lights, is one of the most celebrated festivals in India and among Hindu communities worldwide. Beyond the sparkle of diyas and the burst of fireworks lies a profound spiritual significance that has been passed down through generations. Understanding these traditions helps us connect more deeply with this ancient celebration.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">The Legend Behind Diwali</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Diwali celebrates the return of Lord Rama to Ayodhya after 14 years of exile and his victory over the demon king Ravana. The people of Ayodhya lit millions of diyas to welcome their beloved king home, marking the triumph of light over darkness and good over evil. This legend forms the spiritual foundation of how we celebrate Diwali today.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">The Five Days of Diwali</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Day 1: Dhanteras</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The festival begins with Dhanteras, dedicated to Lord Dhanvantari, the god of Ayurveda. This day is considered highly auspicious for purchasing gold, silver, and new utensils. Many families also buy new diyas and brass items, symbolizing the welcoming of prosperity and health into their homes.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Day 2: Naraka Chaturdashi (Choti Diwali)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Also known as Choti Diwali, this day commemorates Lord Krishna's victory over the demon Narakasura. Families wake up early for an oil bath, light diyas, and prepare their homes for the main Diwali celebration the next day.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Day 3: Lakshmi Puja (Main Diwali)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The third day is the most important - the main Diwali night. Families perform Lakshmi Puja to invite the goddess of wealth and prosperity into their homes. Homes are thoroughly cleaned and decorated with rangoli, flowers, and countless diyas. The evening puja is followed by family gatherings, festive meals, and the exchange of gifts and sweets.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Day 4: Govardhan Puja</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This day celebrates Lord Krishna's act of lifting Mount Govardhan to protect villagers from torrential rains sent by Lord Indra. Devotees create small hillocks of cow dung, symbolizing Mount Govardhan, and worship them with flowers and food offerings.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Day 5: Bhai Dooj</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The festival concludes with Bhai Dooj, celebrating the bond between brothers and sisters. Sisters perform aarti for their brothers and pray for their long life and prosperity, while brothers promise to protect and care for their sisters.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Essential Diwali Rituals</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Lighting Diyas</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The tradition of lighting diyas is central to Diwali. These small oil lamps symbolize the removal of spiritual darkness and the spreading of knowledge and wisdom. An Akhand Diya (continuous lamp) is often kept burning throughout the night, representing the eternal presence of the divine.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Lakshmi Puja</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Lakshmi Puja is performed with great devotion using a decorated pooja thali containing sacred items like kumkum, turmeric, rice, flowers, and sweets. The ritual begins with Ganesh puja, followed by prayers to Goddess Lakshmi, invoking her blessings for prosperity and abundance.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Rangoli Making</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Creating colorful rangoli designs at the entrance of homes is believed to welcome Goddess Lakshmi. These intricate patterns made with colored powders, flowers, or rice represent creativity, harmony, and the welcoming of good fortune.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Exchanging Gifts and Sweets</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sharing gifts and traditional sweets with family, friends, and neighbors is an integral part of Diwali. This practice strengthens social bonds and spreads joy and prosperity within the community.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">The Spiritual Essence</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Beyond the festivities and celebrations, Diwali carries a deep spiritual message. It reminds us to cultivate inner light - the light of knowledge, wisdom, and spiritual awareness. Just as we light diyas in our homes, we must also ignite the lamp of understanding within ourselves, dispelling the darkness of ignorance, hatred, and negativity.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The festival encourages us to start afresh, leaving behind past mistakes and embracing new beginnings with hope and positivity. It's a time for self-reflection, forgiveness, and strengthening relationships with loved ones.
            </p>

            {/* Conclusion */}
            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Celebrating with Pavitra Uphaar</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Pavitra Uphaar, we believe in preserving and honoring these sacred traditions. Our carefully curated collection of pooja essentials - from authentic brass diyas and elegant pooja thalis to puja boxes - helps you celebrate Diwali with devotion and grace.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Explore our <Link to="/products" className="text-primary hover:underline">product collection</Link> to find everything you need for a truly blessed celebration. May this Diwali bring light, prosperity, and joy to your home and heart.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDiwaliSignificance;
