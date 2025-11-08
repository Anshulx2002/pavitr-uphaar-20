import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import raniMeherBottle from "@/assets/rani-meher-copper-bottle.png";

const BlogCopperBenefits = () => {
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
              Understanding Copper Water Benefits in Ayurveda
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Pavitra Uphaar Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden max-w-xl mx-auto">
            <img
              src={raniMeherBottle}
              alt="Premium Copper Water Bottle - Traditional Rani Meher Design"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For thousands of years, Ayurveda has recognized the healing properties of copper. The ancient practice of storing water in copper vessels, known as "Tamra Jal," has been a cornerstone of traditional Indian wellness. Today, modern science is beginning to validate what our ancestors knew intuitively - that copper-enriched water offers remarkable health benefits.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">The Science Behind Copper Water</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When water is stored in a copper vessel for 6-8 hours (ideally overnight), tiny copper particles leach into the water through a natural process called oligodynamic effect. This copper-infused water, when consumed on an empty stomach, can have positive effects on your health. The process naturally ionizes the water, making it more alkaline and beneficial for the body.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Key Health Benefits of Copper Water</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">1. Improves Digestive Health</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              According to Ayurveda, copper has the ability to cleanse and detoxify the stomach. It stimulates peristalsis (the rhythmic contraction and relaxation of the stomach), kills harmful bacteria, and reduces inflammation in the digestive tract. Drinking copper water on an empty stomach can help regulate digestive function and prevent issues like acidity, gas, and indigestion.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2. Supports Weight Loss</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Copper water helps break down fat and eliminate it more efficiently from the body. It also helps maintain digestive health, which is crucial for weight management. The detoxifying properties of copper water support the body's natural metabolism, making it an excellent addition to a healthy weight loss regime.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3. Enhances Cardiovascular Health</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Copper helps regulate blood pressure, heart rate, and cholesterol levels. It prevents the accumulation of plaque in arteries and dilates blood vessels to allow better blood flow to the heart. Studies suggest that copper deficiency can lead to cardiovascular complications, making copper water an important part of heart health maintenance.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4. Boosts Immune System</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Copper is known for its oligodynamic nature - meaning it can destroy bacteria naturally. This property makes copper water excellent for boosting immunity. The copper ions in the water have antimicrobial properties that help fight off infections and strengthen the body's natural defense mechanisms.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5. Promotes Healthy Skin</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Copper is a key component in the production of melanin and new cells. It aids in cell regeneration and fights off free radicals, leading to healthier, more radiant skin. The antioxidant properties of copper help slow down aging and reduce the appearance of fine lines and wrinkles.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">6. Supports Brain Function</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Copper plays a crucial role in brain stimulation and function. It helps in the synthesis of phospholipids that are essential for myelin formation (the protective covering of neurons). Proper copper levels support better cognitive function and may help prevent age-related cognitive decline.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">7. Balances the Three Doshas</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In Ayurvedic terms, copper water helps balance all three doshas - Vata, Pitta, and Kapha. This balance is essential for overall health and well-being. Copper's cooling nature particularly helps pacify excess Pitta, making it beneficial for those with heat-related imbalances.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">How to Use Copper Water Correctly</h2>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Best Practices:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Fill your copper bottle with room temperature water in the evening</li>
                <li>Let it sit overnight (6-8 hours minimum)</li>
                <li>Drink 2-3 glasses of this water on an empty stomach in the morning</li>
                <li>Wait 30-45 minutes before eating breakfast</li>
                <li>Don't store water for more than 24 hours in the copper vessel</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Maintaining Your Copper Bottle</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To keep your copper bottle in optimal condition:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Clean it regularly with a mixture of lemon juice and salt, or use a paste of tamarind</li>
              <li>Rinse thoroughly with water after cleaning</li>
              <li>Dry completely before storing</li>
              <li>Never use soap or harsh chemicals as they can damage the copper</li>
              <li>The natural patina that forms is normal and indicates pure copper</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Important Precautions</h2>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-6 rounded-lg mb-6">
              <p className="text-muted-foreground leading-relaxed mb-3">
                While copper water is beneficial, it's important to use it correctly:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Don't consume copper water throughout the day - limit to 2-3 glasses in the morning</li>
                <li>Avoid storing acidic beverages (citrus juices, carbonated drinks) in copper vessels</li>
                <li>Pregnant women and people with Wilson's disease should consult a doctor before use</li>
                <li>Ensure your copper bottle is made of pure copper, not plated</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Choosing the Right Copper Bottle</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When selecting a copper water bottle, ensure it's made from pure copper (not copper-plated). Look for bottles that are seamless or have minimal joints, as these are easier to clean and maintain. The craftsmanship matters - traditional hammered or etched designs not only look beautiful but also indicate quality workmanship.
            </p>

            {/* Product Showcase */}
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Link to="/product/47" className="group">
                <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary">Elephant Motif Copper Bottle</h3>
                  <p className="text-sm text-muted-foreground mb-3">Premium copper bottle with exquisite elephant motif design. Perfect for Dhanteras and daily use.</p>
                  <Button variant="outline" size="sm">View Product</Button>
                </div>
              </Link>
              <Link to="/product/48" className="group">
                <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary">Rani Meher Copper Bottle</h3>
                  <p className="text-sm text-muted-foreground mb-3">Exquisite copper bottle featuring traditional Rajasthani Rani Meher artwork.</p>
                  <Button variant="outline" size="sm">View Product</Button>
                </div>
              </Link>
            </div>

            {/* Conclusion */}
            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Embrace Ancient Wisdom</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The practice of drinking copper water is a simple yet powerful way to incorporate ancient Ayurvedic wisdom into your modern lifestyle. With consistent use and proper maintenance, a quality copper water bottle can be a lifelong companion on your wellness journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Pavitra Uphaar, we offer beautifully crafted, pure copper bottles that combine traditional artistry with health benefits. Explore our <Link to="/products" className="text-primary hover:underline">copper bottle collection</Link> and start your journey toward better health today.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogCopperBenefits;
