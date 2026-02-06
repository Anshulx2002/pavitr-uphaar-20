import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import royalPeacockImage from "@/assets/royal-peacock-krishna-recline-idol.png";
import balKrishnaImage from "@/assets/bal-krishna-makhan-idol.png";
import buddhaImage from "@/assets/buddha-bodhi-tree-idol.png";
import serpentKrishnaImage from "@/assets/serpent-krishna-idol.png";
import goldenBalKrishnaImage from "@/assets/golden-bal-krishna-idol.png";
import heritageTempleImage from "@/assets/heritage-temple-sculpture.png";
import ganeshaWallHangingImage from "@/assets/ganesha-wall-hanging.png";
import ganeshaProsperityImage from "@/assets/ganesha-prosperity-panel.png";
import shrineDeityImage from "@/assets/shrine-deity-idol.png";
import twinGuardianImage from "@/assets/twin-guardian-deity-idol.png";
import artisanMonkImage from "@/assets/artisan-monk-figurine-set.png";
import asceticGaneshaImage from "@/assets/ascetic-ganesha-meditation-idol.png";
import dancingGaneshaImage from "@/assets/dancing-ganesha-idol.png";
import mysticalSageImage from "@/assets/mystical-sage-ganesha.png";

const idols = [
  { id: 50, name: "Royal Peacock Krishna Recline Idol", price: 1499, image: royalPeacockImage, description: "This stunning idol captures Lord Krishna in a graceful reclining pose atop a majestic peacock. The ornate peacock feather crown and crystal-studded flute add divine elegance, while the black wooden base provides a sophisticated foundation. A true masterpiece for any home temple." },
  { id: 52, name: "Buddha Under Bodhi Tree Idol", price: 899, image: buddhaImage, description: "Radiating serenity and enlightenment, this Buddha statue depicts the moment of awakening under the sacred Bodhi tree. The stunning golden finish with turquoise and red mosaic detailing creates a visual harmony that transforms any meditation space into a sanctuary of peace." },
  { id: 63, name: "Mystical Sage Ganesha Idol", price: 499, image: mysticalSageImage, description: "A delightfully unique interpretation of Lord Ganesha as a scholarly sage, complete with traditional red attire, a writing desk, and his faithful mouse companion. This charming idol brings both wisdom and whimsy to your sacred space." },
  { id: 62, name: "Dancing Ganesha Idol", price: 499, image: dancingGaneshaImage, description: "Capturing the joy and exuberance of Lord Ganesha in mid-dance, this vibrant idol features an ornate crown, detailed jewelry, and rich colors. The premium golden base adds a touch of luxury that makes it perfect for festive celebrations." },
  { id: 61, name: "Ascetic Ganesha Meditation Idol", price: 999, image: asceticGaneshaImage, description: "A rare and contemplative depiction of Lord Ganesha in deep meditation on a rocky base. The sacred Om detailing and traditional ascetic elements make this a powerful piece for devotees who appreciate the meditative aspect of spirituality." },
  { id: 53, name: "Contemporary Serpent Krishna Idol", price: 1799, image: serpentKrishnaImage, description: "A bold, modern artistic interpretation of Lord Krishna with flowing purple robes and an iconic peacock feather crown. This contemporary design bridges tradition and modern aesthetics, making it ideal for homes that celebrate both heritage and innovation." },
  { id: 60, name: "Artisan Monk Figurine Set", price: 1599, image: artisanMonkImage, description: "This enchanting set of artisan monk figurines features peaceful, hand-painted poses adorned with jewel-studded traditional robes. Perfect for meditation corners, they radiate tranquility and mindfulness wherever they are placed." },
  { id: 51, name: "Bal Krishna with Makhan Idol", price: 499, image: balKrishnaImage, description: "An irresistibly adorable depiction of young Lord Krishna (Laddu Gopal) enjoying his beloved butter. Hand-painted with vibrant colors and featuring a delicate peacock feather crown, this idol captures the playful innocence of Baby Krishna." },
  { id: 54, name: "Golden Bal Krishna Idol", price: 499, image: goldenBalKrishnaImage, description: "A stunning all-gold rendition of Bal Krishna with his iconic butter pot. The exquisite golden finish highlights every delicate facial detail and ornate crown work, creating a radiant centerpiece for Janmashtami celebrations." },
  { id: 55, name: "Heritage Ayodhya Temple Sculpture", price: 499, image: heritageTempleImage, description: "A magnificent golden replica of the Ayodhya Ram Mandir temple complex, capturing the intricate architectural detailing of multiple spires and domes. This sacred collectible connects devotees to one of India's most revered pilgrimage sites." },
  { id: 56, name: "Ornate Ganesha Wall Hanging", price: 999, image: ganeshaWallHangingImage, description: "A beautifully crafted Ganesha wall hanging featuring traditional rope design and decorative tassels. The hand-painted Lord Ganesha with intricate ethnic patterns makes it the perfect auspicious addition to any entrance or living space." },
  { id: 57, name: "Ganesha Prosperity Panel", price: 999, image: ganeshaProsperityImage, description: "A vibrant and colorful panel featuring Lord Ganesha with veena, sacred mantras, Om symbol, and tabla. This hand-painted prosperity panel is believed to invite good fortune and is ideal for both home and office spaces." },
  { id: 58, name: "Shrine Style Ram Lalla Idol", price: 599, image: shrineDeityImage, description: "A majestic representation of Ram Lalla within an ornate temple shrine frame. The intricate golden detailing, elaborate prabhavali arch, and elegant black wooden base create a divine ambiance worthy of the most sacred home temples." },
  { id: 59, name: "Classic Ram Lalla Temple Idol", price: 999, image: twinGuardianImage, description: "An elegant depiction of Lord Ram in a traditional black finish with golden ornaments and colorful dhoti. The ornate arch with sacred symbols and decorative carved base make this a timeless addition to any devotional space." },
];

const BlogSacredIdols = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Link to="/blogs">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              14 Sacred Idols to Transform Your Home Temple in 2025
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Pavitra Uphaar Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>February 5, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
          </div>

          <div className="mb-8 rounded-xl overflow-hidden max-w-xl mx-auto">
            <img
              src={royalPeacockImage}
              alt="Royal Peacock Krishna Recline Idol"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              A home temple is more than a sacred corner — it's a spiritual sanctuary where daily life meets devotion. The right idol can elevate this space, turning routine prayers into deeply meaningful rituals. Whether you're setting up a new mandir or refreshing an existing one, choosing the perfect murti is a deeply personal journey.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At <strong className="text-foreground">Pavitra Uphaar</strong>, we've curated a stunning collection of 14 handcrafted idols that blend traditional artistry with contemporary design. Each piece is carefully selected for its spiritual significance, craftsmanship, and beauty. Here's our guide to help you find your perfect sacred companion.
            </p>

            <hr className="border-border my-8" />

            {idols.map((idol, index) => (
              <div key={idol.id} className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {index + 1}. {idol.name} — ₹{idol.price}
                </h2>
                <div className="rounded-xl overflow-hidden max-w-sm mx-auto mb-4 bg-muted/10 p-4">
                  <img
                    src={idol.image}
                    alt={idol.name}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {idol.description}
                </p>
                <Link
                  to={`/product/${idol.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  View Product →
                </Link>
              </div>
            ))}

            <hr className="border-border my-8" />

            <h2 className="text-2xl font-bold text-foreground">How to Choose the Right Idol for Your Home Temple</h2>
            <p className="text-muted-foreground leading-relaxed">
              Selecting a deity idol is both a spiritual and aesthetic decision. Here are a few things to consider:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Personal devotion:</strong> Choose a deity you feel the deepest connection with. Your home temple should reflect your spiritual path.</li>
              <li><strong className="text-foreground">Space and size:</strong> Consider the dimensions of your mandir. Each of our idols comes with exact size specifications to help you plan.</li>
              <li><strong className="text-foreground">Material and finish:</strong> Hand-painted idols add vibrant character, while golden-finish pieces bring a regal glow to your sacred space.</li>
              <li><strong className="text-foreground">Occasion:</strong> Some idols are perfect for specific festivals — Bal Krishna for Janmashtami, Ganesha for Ganesh Chaturthi, or Ram Lalla for Ram Navami.</li>
              <li><strong className="text-foreground">Gifting:</strong> Sacred idols make deeply meaningful gifts for housewarmings, weddings, and festivals.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">Why Shop with Pavitra Uphaar?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every idol in our collection is handpicked for quality and spiritual authenticity. We ensure secure packaging so your sacred purchase arrives in perfect condition. With prices starting at just ₹499 and discounts of up to 50%, bringing divine energy into your home has never been more accessible.
            </p>

            <div className="bg-accent/10 border border-border rounded-xl p-6 mt-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Ready to Transform Your Home Temple?</h3>
              <p className="text-muted-foreground mb-4">
                Browse our complete collection of sacred idols and find the perfect addition to your spiritual space.
              </p>
              <Link to="/products?category=idols">
                <Button className="bg-gradient-premium-gold hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full">
                  Shop All Idols
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogSacredIdols;
