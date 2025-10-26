import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogCopperBenefitsImage from "@/assets/blog-copper-benefits.jpg";

const BlogCopperBottleBenefits = () => {
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
              Understanding Copper Water Bottle Benefits in Ayurveda
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Pavitra Uphaar Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 10, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={blogCopperBenefitsImage}
              alt="Copper water bottles"
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For thousands of years, Ayurveda has recognized the health benefits of storing water in copper vessels. This ancient practice, known as "Tamra Jal," involves storing water in copper containers overnight and drinking it first thing in the morning. Modern science is now validating what our ancestors knew all along – copper-enriched water offers numerous health benefits. Let's explore the science and tradition behind copper water bottles.
            </p>

            {/* The Science Behind Copper Water */}
            <div className="mb-10 pb-8 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Science Behind Copper Water
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When water is stored in a copper vessel for 6-8 hours, small amounts of copper dissolve into the water through a natural process called oligodynamic effect. This copper-enriched water has antimicrobial properties and provides essential trace minerals that our body needs for optimal functioning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our <Link to="/product/47" className="text-primary hover:underline">Elephant Motif Copper Bottle</Link> and <Link to="/product/48" className="text-primary hover:underline">Rani Meher Copper Bottle</Link> are crafted from pure copper, ensuring you get the maximum health benefits of this ancient practice.
              </p>
            </div>

            {/* Health Benefits */}
            <div className="mb-10 pb-8 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10 Amazing Health Benefits of Copper Water
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">1. Boosts Digestive Health</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Copper has properties that stimulate peristalsis, kill harmful bacteria, and reduce inflammation in the stomach, making it an excellent remedy for ulcers, indigestion, and infections.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2. Aids Weight Loss</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Copper helps your body break down fat more efficiently and eliminate it more effectively, supporting your weight loss journey naturally.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">3. Slows Down Aging</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Copper is packed with antioxidants and cell-forming properties that help fight off free radicals, promoting skin health and slowing down the aging process.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">4. Prevents Anemia</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Copper helps in the absorption of iron from food, assists in red blood cell formation, and helps regulate blood flow, preventing anemia.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">5. Regulates Thyroid Function</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Copper is one of the most important trace minerals the thyroid gland needs to function optimally, helping maintain hormonal balance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">6. Stimulates Brain Function</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Copper is known to be a brain stimulant and helps synthesize phospholipids, which are essential for myelin sheath formation, enhancing brain efficiency.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">7. Fights Arthritis and Joint Pain</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Copper has anti-inflammatory properties that help relieve aches and pains caused by arthritis and inflamed joints.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">8. Maintains Cardiovascular Health</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Copper helps minimize the risk of developing heart disease, regulate blood pressure and heart rate, and lower cholesterol levels.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">9. Supports Skin Health</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Copper aids in the production of melanin and new cells, helping heal wounds faster and keeping your skin looking young and radiant.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">10. Natural Antimicrobial Properties</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Copper naturally purifies water by killing bacteria, viruses, and other microorganisms, making it naturally safe to drink.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Use */}
            <div className="mb-10 pb-8 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How to Use Your Copper Water Bottle
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To get the maximum benefits from your copper bottle, follow these simple steps:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fill your copper bottle with room temperature or cool water before going to bed</li>
                  <li>Let the water sit in the bottle for 6-8 hours (overnight is ideal)</li>
                  <li>Drink this copper-enriched water first thing in the morning on an empty stomach</li>
                  <li>Start with 2-3 glasses per day and observe how your body responds</li>
                  <li>Clean your bottle regularly with lemon and salt to maintain its shine and effectiveness</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Both our <Link to="/product/47" className="text-primary hover:underline">Elephant Motif Copper Bottle</Link> and <Link to="/product/48" className="text-primary hover:underline">Rani Meher Copper Bottle</Link> are designed for daily use and easy maintenance.
                </p>
              </div>
            </div>

            {/* Ayurvedic Perspective */}
            <div className="mb-10 pb-8 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Ayurvedic Perspective
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In Ayurveda, copper is known to balance all three doshas – Vata, Pitta, and Kapha. According to ancient texts, water stored in a copper vessel becomes "Tamra Jal" and acquires certain qualities from copper. This charged water helps:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Balance the pH levels in the body</li>
                <li>Improve digestion and metabolism</li>
                <li>Enhance energy levels throughout the day</li>
                <li>Purify the blood and improve circulation</li>
                <li>Strengthen the immune system naturally</li>
              </ul>
            </div>

            {/* Choosing Your Copper Bottle */}
            <div className="mb-10 pb-8 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Choosing the Right Copper Bottle
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Pavitra Uphaar, we offer two exquisite copper bottle designs to suit your preferences:
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    <Link to="/product/47" className="text-primary hover:underline">Elephant Motif Copper Bottle</Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Features an exquisite elephant design symbolizing strength and wisdom. Perfect for those who appreciate traditional Indian artistry and want a conversation piece that also promotes health.
                  </p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    <Link to="/product/48" className="text-primary hover:underline">Rani Meher Copper Bottle</Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Showcases beautiful traditional Rajasthani Rani Meher artwork. Ideal for those who love intricate patterns and cultural heritage reflected in their daily wellness items.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Start Your Wellness Journey Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Incorporating copper water into your daily routine is a simple yet powerful way to embrace ancient wisdom for modern wellness. The combination of Ayurvedic tradition and scientific validation makes copper bottles an essential addition to any health-conscious lifestyle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether you choose the <Link to="/product/47" className="text-primary hover:underline">Elephant Motif Copper Bottle</Link> or the <Link to="/product/48" className="text-primary hover:underline">Rani Meher Copper Bottle</Link>, you're investing in your health and connecting with a practice that has sustained wellness for thousands of years.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Explore our complete collection of traditional wellness products at <Link to="/products" className="text-primary hover:underline">Pavitra Uphaar</Link>. For questions or guidance on choosing the right copper bottle for you, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogCopperBottleBenefits;
