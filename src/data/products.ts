// Import all images
import diyaImage from "@/assets/diya.jpg";
import kumkumImage from "@/assets/kumkum.jpg";
import rudrakshaImage from "@/assets/rudraksha.jpg";
import camphorImage from "@/assets/camphor.jpg";
import poojaThaliImage from "@/assets/pooja-thali.jpg";
import goldPoojaThaliImage from "@/assets/gold-pooja-thali.jpg";
import silverPoojaThaliImage from "@/assets/silver-pooja-thali.jpg";
import garlandImage from "@/assets/garland.jpg";
import sandalwoodImage from "@/assets/sandalwood.jpg";
import aartiBookImage from "@/assets/aarti-book.png";
import akhandBrassDiyaImage from "@/assets/akhand-brass-diya.png";
import goldKalashImage from "@/assets/gold-kalash.png";
import aartiSanghrahImage from "@/assets/aarti-sangrah.png";
import laxmiGaneshPoojaBoxImage from "@/assets/laxmi-ganesh-pooja-box.png";
import lordKrishnaStatueImage from "@/assets/lord-krishna-statue.png";
import kamdhenusIdolSilverImage from "@/assets/kamdhenu-idol-silver.jpg";
import elephantCopperBottleImage from "@/assets/elephant-copper-bottle.png";
import raniMeherCopperBottleImage from "@/assets/rani-meher-copper-bottle.png";
import jesusLastSupperBoxImage from "@/assets/jesus-last-supper-box.png";
import siddhivinayakPujaBoxImage from "@/assets/siddhivinayak-puja-box.png";
import radhakrishnaPujaBoxImage from "@/assets/radhakrishna-puja-box.png";
import kolhapuriMaaPujaBoxImage from "@/assets/kolhapuri-maa-puja-box.png";
import jainTirthankarPujaBoxImage from "@/assets/jain-tirthankar-puja-box.png";
import ambeeMaaPujaBoxImage from "@/assets/ambee-maa-puja-box.png";
import radhakrishnaGoldPujaBoxImage from "@/assets/radhakrishna-gold-puja-box.png";
import gayatriMaaPujaBoxImage from "@/assets/gayatri-maa-puja-box.png";
import ganeshPujaBoxSmallImage from "@/assets/ganesh-puja-box-small.png";
import laxmiGaneshPoojaBoxSmallImage from "@/assets/laxmi-ganesh-puja-box-small.png";
import laxmiGaneshJewelleryBoxImage from "@/assets/laxmi-ganesh-jewellery-box.png";
import laxmiGaneshSaraswatiJewelleryBoxImage from "@/assets/laxmi-ganesh-saraswati-jewellery-box.png";
import laxmiGaneshSaraswatiJewelleryBox2Image from "@/assets/laxmi-ganesh-saraswati-jewellery-box-2.png";
import shatrunjayPujaBoxImage from "@/assets/shatrunjay-siddhachakra-puja-box.png";
import jesusPujaBoxBigImage from "@/assets/jesus-puja-box-big.png";
import ramDarbarPujaBoxSmallImage from "@/assets/ram-darbar-puja-box-small.png";
import balajiGoldPujaBoxSmallImage from "@/assets/balaji-gold-puja-box-small.png";
import laxmiGaneshSmallPujaBoxImage from "@/assets/laxmi-ganesh-small-puja-box.png";
import balaji3dPujaBoxSmallImage from "@/assets/balaji-3d-puja-box-small.png";
import ramlallaPujaBoxSmallImage from "@/assets/ramlalla-puja-box-small.png";
import tridevPujaBoxBigImage from "@/assets/tridev-puja-box-big.png";
import jainPujaBoxBigImage from "@/assets/jain-puja-box-big.png";
import laxmiKuberTortoisePujaBoxBigImage from "@/assets/laxmi-kuber-tortoise-puja-box-big.png";
import balajiPujaBoxBigImage from "@/assets/balaji-puja-box-big.png";
import goldenTemplePujaBoxBigImage from "@/assets/golden-temple-puja-box-big.png";
import laxmijiPujaBoxSmallImage from "@/assets/laxmiji-puja-box-small.png";
import ramparivarAyodhyaPujaBoxBigImage from "@/assets/ramparivar-ayodhya-puja-box-big.png";
import saiSamadhiPujaBoxBigImage from "@/assets/sai-samadhi-puja-box-big.png";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  description: string;
  badge?: string;
  category: string;
}

export const allProducts: Product[] = [
  // Sacred Threads (removed sandalwood mala and red thread kalava)
  {
    id: 2,
    name: "Gold Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: goldPoojaThaliImage,
    rating: 5,
    description:
      "Exquisite gold-plated pooja thali with intricate designs. Complete set with all essential compartments for elaborate worship ceremonies.",
    badge: "Premium",
    category: "accessories",
  },
  {
    id: 3,
    name: "Silver Pooja Thali",
    price: 2499,
    originalPrice: 3499,
    image: silverPoojaThaliImage,
    rating: 5,
    description:
      "Elegant silver-plated pooja thali with traditional motifs. Premium quality craftsmanship for special occasions and daily worship.",
    badge: "Premium",
    category: "accessories",
  },

  {
    id: 9,
    name: "Hanuman Chalisa Aarti Book",
    price: 1499,
    originalPrice: 2499,
    image: aartiBookImage,
    rating: 5,
    description:
      "Premium gold-finished Hanuman Chalisa book in elegant gift box. Perfect for daily prayers and gifting.",
    badge: "Premium",
    category: "accessories",
  },
  {
    id: 10,
    name: "Akhand Brass Diya",
    price: 1499,
    originalPrice: 2499,
    image: akhandBrassDiyaImage,
    rating: 5,
    description:
      "Premium Akhand Brass Diya with glass protection cover. Ideal for continuous lighting during festivals and special occasions.",
    badge: "Premium",
    category: "lamps",
  },
  {
    id: 11,
    name: "Gold Kalash",
    price: 1499,
    originalPrice: 2499,
    image: goldKalashImage,
    rating: 5,
    description:
      "Elevate your Aarti experience with our Gold Kalash. Exquisite gold-finished sacred vessel with intricate engravings for water rituals and ceremonies.",
    badge: "Premium",
    category: "accessories",
  },
  {
    id: 12,
    name: "Aarti Sangrah",
    price: 1499,
    originalPrice: 2499,
    image: aartiSanghrahImage,
    rating: 5,
    description:
      "Premium Aarti Sangrah book in elegant gift box. Complete collection of traditional aartis for daily prayers and special occasions.",
    badge: "Premium",
    category: "accessories",
  },
  {
    id: 13,
    name: "Laxmi Ganesh Puja Box - Small",
    price: 999,
    originalPrice: 1299,
    image: laxmiGaneshPoojaBoxSmallImage,
    rating: 5,
    description:
      "Exquisite puja box featuring Goddess Laxmi with Lord Ganesha and Goddess Saraswati. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Compact size perfect for prosperity, wisdom, and sacred worship ceremonies.",
    badge: "23% OFF",
    category: "puja-boxes",
  },
  {
    id: 16,
    name: "Lord Krishna Statue",
    price: 2499,
    originalPrice: 4000,
    image: lordKrishnaStatueImage,
    rating: 4.9,
    description:
      "Beautiful handcrafted Lord Krishna statue with golden calf. Features intricate detailing and vibrant colors. Perfect centerpiece for your home temple.",
    badge: "Sacred",
    category: "idols",
  },
  {
    id: 17,
    name: "Kamdhenu Idol Silver",
    price: 3999,
    originalPrice: 5999,
    image: kamdhenusIdolSilverImage,
    rating: 4.9,
    description:
      "Exquisite silver-finished Kamdhenu cow idol with calf. Symbol of prosperity and abundance. Perfect for home temple and gifting during auspicious occasions.",
    badge: "Sacred",
    category: "idols",
  },
  {
    id: 19,
    name: "Elephant Motif Copper Bottle",
    price: 1750,
    originalPrice: 2500,
    image: elephantCopperBottleImage,
    rating: 5,
    description:
      "Premium copper bottle with exquisite elephant motif design. Perfect for Dhanteras and daily use. Keeps water fresh and provides health benefits of copper-enriched water.",
    badge: "Dhanteras Special",
    category: "accessories",
  },
  {
    id: 20,
    name: "Rani Meher Copper Bottle",
    price: 1750,
    originalPrice: 2500,
    image: raniMeherCopperBottleImage,
    rating: 5,
    description:
      "Exquisite copper bottle featuring traditional Rajasthani Rani Meher artwork. Perfect for Dhanteras celebrations and healthy copper-enriched water storage.",
    badge: "Dhanteras Special",
    category: "accessories",
  },

  {
    id: 23,
    name: "Jesus Last Supper Puja Box",
    price: 1299,
    originalPrice: 1599,
    image: jesusLastSupperBoxImage,
    rating: 4.8,
    description:
      "Exquisite Jesus Last Supper puja box featuring a beautiful depiction of The Last Supper. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Perfect for sacred worship and spiritual offerings.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 24,
    name: "SiddhiVinayak Puja Box",
    price: 1299,
    originalPrice: 1599,
    image: siddhivinayakPujaBoxImage,
    rating: 4.9,
    description:
      "Exquisite SiddhiVinayak puja box featuring Lord Ganesha with 8 sacred forms. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Complete set with compartments for sacred offerings and worship ceremonies.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 25,
    name: "Radhakrishna Puja Box",
    price: 999,
    originalPrice: 1299,
    image: radhakrishnaPujaBoxImage,
    rating: 4.9,
    description:
      "Beautiful Radhakrishna puja box featuring divine Radha-Krishna imagery. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Compact size perfect for personal worship and sacred offerings.",
    badge: "23% OFF",
    category: "puja-boxes",
  },
  {
    id: 26,
    name: "Kolhapuri Maa Deluxe Puja Box",
    price: 1299,
    originalPrice: 1599,
    image: kolhapuriMaaPujaBoxImage,
    rating: 4.9,
    description:
      "Exquisite Kolhapuri Maa deluxe puja box featuring sacred deity imagery with intricate golden detailing. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Complete set with traditional compartments for sacred ceremonies and worship.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 27,
    name: "24 Jain Tirthankar Puja Box",
    price: 1299,
    originalPrice: 1599,
    image: jainTirthankarPujaBoxImage,
    rating: 4.9,
    description:
      "Exquisite puja box featuring all 24 Jain Tirthankars in stunning golden frames. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Complete set with sacred compartments for Jain worship and offerings.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 28,
    name: "Ambee Maa Puja Box",
    price: 1299,
    originalPrice: 1599,
    image: ambeeMaaPujaBoxImage,
    rating: 4.9,
    description:
      "Exquisite Ambee Maa deluxe puja box featuring Goddess Durga with 8 sacred forms surrounded by divine deities in ornate golden frame. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Complete deluxe set with traditional compartments, sacred plaques, and golden figurines for elaborate worship ceremonies.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 29,
    name: "Radha Krishna Gold Puja Box",
    price: 1299,
    originalPrice: 1599,
    image: radhakrishnaGoldPujaBoxImage,
    rating: 4.9,
    description:
      "Exquisite Radha Krishna gold puja box featuring divine Radha-Krishna in Vrindavan with intricate golden artwork. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Premium set with ornate golden compartments for sacred worship and offerings.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 30,
    name: "Gayatri Maa Puja Box",
    price: 1299,
    originalPrice: 1599,
    image: gayatriMaaPujaBoxImage,
    rating: 4.9,
    description:
      "Exquisite Gayatri Maa puja box featuring Goddess Gayatri seated on lotus with sacred symbols. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Premium set with sacred Om and Swastik plaques for divine worship and offerings.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 31,
    name: "Ganesh Puja Box - Small",
    price: 999,
    originalPrice: 1299,
    image: ganeshPujaBoxSmallImage,
    rating: 4.9,
    description:
      "Exquisite compact Ganesh puja box featuring Lord Ganesha with radiant golden aura. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Perfect size for personal worship and sacred offerings.",
    badge: "23% OFF",
    category: "puja-boxes",
  },
  {
    id: 32,
    name: "Laxmi Ganesh Puja Jewellery Box with Compartment - Big",
    price: 1799,
    originalPrice: 1999,
    image: laxmiGaneshJewelleryBoxImage,
    rating: 4.9,
    description:
      "Exquisite large puja jewellery box featuring Goddess Laxmi and Lord Ganesha with intricate golden artwork. Dimensions: 21.3 cm x 11.5 cm x 6.1 cm. Premium deluxe set with multiple compartments, sacred plaques, and golden figurines for elaborate worship ceremonies and jewellery storage.",
    badge: "10% OFF",
    category: "puja-boxes",
  },
  {
    id: 33,
    name: "Laxmi Ganesh Saraswati 3D Puja Jewellery Box with Compartment - Big",
    price: 1799,
    originalPrice: 1999,
    image: laxmiGaneshSaraswatiJewelleryBoxImage,
    images: [laxmiGaneshSaraswatiJewelleryBoxImage, laxmiGaneshSaraswatiJewelleryBox2Image],
    rating: 4.9,
    description:
      "Exquisite large 3D puja jewellery box featuring Goddess Laxmi, Lord Ganesha, and Goddess Saraswati with stunning 3D artwork and golden halos. Premium deluxe set with multiple compartments, sacred plaques, and ornate golden figurines for elaborate worship ceremonies and jewellery storage.",
    badge: "10% OFF",
    category: "puja-boxes",
  },
  {
    id: 34,
    name: "Shatrunjay Siddhachakra Deluxe Puja Box - Big",
    price: 1299,
    originalPrice: 1599,
    image: shatrunjayPujaBoxImage,
    rating: 4.9,
    description:
      "Exquisite Shatrunjay Siddhachakra deluxe puja box featuring intricate golden artwork of sacred Jain pilgrimage site. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Premium set with sacred compartments and ceremonial items for elaborate Jain worship ceremonies.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 35,
    name: "Jesus Puja Box - Big",
    price: 1299,
    originalPrice: 1599,
    image: jesusPujaBoxBigImage,
    rating: 4.9,
    description:
      "Exquisite Jesus puja box featuring beautiful depiction of Jesus Christ with intricate golden detailing and sacred compartments. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Premium set with Love and Peace plaques for sacred worship and spiritual offerings.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 36,
    name: "RamDarbar Puja Box - Small",
    price: 999,
    originalPrice: 1299,
    image: ramDarbarPujaBoxSmallImage,
    rating: 4.9,
    description:
      "Exquisite compact RamDarbar puja box featuring Lord Rama with Sita, Laxman, and Hanuman in stunning golden artwork. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Perfect size for personal worship with sacred compartments and ornate golden detailing.",
    badge: "23% OFF",
    category: "puja-boxes",
  },
  {
    id: 37,
    name: "Balaji Gold Puja Box - Small",
    price: 999,
    originalPrice: 1299,
    image: balajiGoldPujaBoxSmallImage,
    rating: 4.9,
    description:
      "Exquisite compact Balaji Gold puja box featuring Lord Venkateswara with radiant golden aura and intricate sacred artwork. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Perfect size for personal worship with divine compartments and ornate golden embellishments.",
    badge: "23% OFF",
    category: "puja-boxes",
  },
  {
    id: 38,
    name: "Laxmi Ganesh Puja Box - Small",
    price: 999,
    originalPrice: 1299,
    image: laxmiGaneshSmallPujaBoxImage,
    rating: 4.9,
    description:
      "Exquisite compact Laxmi Ganesh puja box featuring Goddess Laxmi and Lord Ganesha with stunning golden embossed artwork in elegant white frame. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Perfect size for personal worship with divine compartments for sacred offerings and ceremonies.",
    badge: "23% OFF",
    category: "puja-boxes",
  },
  {
    id: 39,
    name: "Balaji (3D) Puja Box - Small",
    price: 999,
    originalPrice: 1299,
    image: balaji3dPujaBoxSmallImage,
    rating: 4.9,
    description:
      "Exquisite compact Balaji 3D puja box featuring Lord Venkateswara in stunning three-dimensional artwork with vibrant orange and golden tones. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Premium 3D design perfect for personal worship with divine compartments and ornate golden embellishments.",
    badge: "23% OFF",
    category: "puja-boxes",
  },
  {
    id: 40,
    name: "RamLalla Puja Box - Small",
    price: 999,
    originalPrice: 1299,
    image: ramlallaPujaBoxSmallImage,
    rating: 4.9,
    description:
      "Exquisite compact RamLalla puja box featuring Lord Ram (infant form) in ornate golden temple setting with intricate decorative patterns. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Premium set with elegant white exterior, golden ceremonial items, and sacred compartments for divine worship and offerings.",
    badge: "23% OFF",
    category: "puja-boxes",
  },
  {
    id: 41,
    name: "Tridev Puja Box - Big",
    price: 1299,
    originalPrice: 1599,
    image: tridevPujaBoxBigImage,
    rating: 4.9,
    description:
      "Exquisite large Tridev puja box featuring Lord Ganesha, Lord Balaji, and Goddess Lakshmi in stunning golden embossed artwork with intricate patterns. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Premium deluxe set with elegant black exterior, multiple golden compartments, sacred plaques, and ornate ceremonial items for elaborate worship ceremonies.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 42,
    name: "Jain Puja Box - Big",
    price: 1299,
    originalPrice: 1599,
    image: jainPujaBoxBigImage,
    rating: 4.9,
    description:
      "Exquisite large Jain puja box featuring 24 golden Tirthankar figurines arranged around a sacred scripture holder, with intricate temple artwork depicting sacred Jain pilgrimage sites and shrines. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Premium deluxe set with elegant white exterior, complete with all 24 Tirthankars and ornate golden temple compartments for elaborate Jain worship ceremonies.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 43,
    name: "Laxmi Kuber and Tortoise Puja Box - Big",
    price: 1299,
    originalPrice: 1599,
    image: laxmiKuberTortoisePujaBoxBigImage,
    rating: 4.9,
    description:
      "Exquisite large Laxmi Kuber and Tortoise puja box featuring Goddess Lakshmi and Lord Kuber with sacred tortoise symbol in stunning golden embossed artwork. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Premium deluxe set with elegant black exterior, ornate golden compartments, and sacred ceremonial items for wealth and prosperity worship ceremonies.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 44,
    name: "Balaji Puja Box - Big",
    price: 1299,
    originalPrice: 1599,
    image: balajiPujaBoxBigImage,
    rating: 4.9,
    description:
      "Exquisite large Balaji puja box featuring Lord Venkateswara (Balaji) in three divine forms within ornate temple architecture with stunning golden embossed artwork. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Premium deluxe set with elegant black exterior, multiple golden compartments, sacred plaques, and ornate ceremonial items for elaborate worship ceremonies.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 45,
    name: "Golden Temple Puja Box - Big",
    price: 1299,
    originalPrice: 1599,
    image: goldenTemplePujaBoxBigImage,
    rating: 4.9,
    description:
      "Magnificent large Golden Temple (Harmandir Sahib) puja box featuring intricate architectural detailing of the sacred shrine with gold and silver plated embossed artwork. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Premium deluxe set with elegant black exterior, multiple compartments with sacred symbols, and ceremonial items for divine worship.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 46,
    name: "Laxmiji Puja Box - Small",
    price: 999,
    originalPrice: 1299,
    image: laxmijiPujaBoxSmallImage,
    rating: 4.9,
    description:
      "Exquisite compact Goddess Laxmi puja box with gold and silver plated embossed artwork featuring the divine goddess seated on lotus with wealth symbols. Dimensions: 11.5 cm x 11.5 cm x 4 cm. Premium white finish with red velvet interior, perfect for daily worship and blessings.",
    badge: "23% OFF",
    category: "puja-boxes",
  },
  {
    id: 47,
    name: "Ramparivar Ayodhya Mandir Puja Box - Big",
    price: 1299,
    originalPrice: 1599,
    image: ramparivarAyodhyaPujaBoxBigImage,
    rating: 4.9,
    description:
      "Premium commemorative puja box featuring the magnificent Ayodhya Ram Mandir temple and sacred Ram Parivar artwork. Contains gold-plated ceremonial items in luxurious red velvet interior. Dimensions: 21.3 cm x 11.5 cm x 4 cm. A divine keepsake celebrating the historic Ayodhya temple.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
  {
    id: 48,
    name: "Sai Samadhi Puja Box - Big",
    price: 1299,
    originalPrice: 1599,
    image: saiSamadhiPujaBoxBigImage,
    rating: 4.9,
    description:
      "Divine Sai Samadhi puja box featuring Shirdi Sai Baba in sacred temple architecture with intricate golden embossed artwork. Dimensions: 21.3 cm x 11.5 cm x 4 cm. Premium deluxe set with elegant black exterior, luxurious red velvet interior, and ornate golden compartments for complete worship ceremonies.",
    badge: "19% OFF",
    category: "puja-boxes",
  },
];

export const categories = [
  { id: "all", name: "All Products", count: allProducts.length },
  { id: "puja-boxes", name: "Puja Box", count: allProducts.filter((p) => p.category === "puja-boxes").length },
  { id: "lamps", name: "Lamps & Diyas", count: allProducts.filter((p) => p.category === "lamps").length },
  {
    id: "accessories",
    name: "Pooja Accessories",
    count: allProducts.filter((p) => p.category === "accessories").length,
  },
  { id: "idols", name: "Idols", count: allProducts.filter((p) => p.category === "idols").length },
];

export const getProductsByCategory = (category: string) => {
  return allProducts.filter((product) => product.category === category);
};

export const getFeaturedProducts = () => {
  return allProducts.filter(
    (product) =>
      product.badge && ["Best Seller", "Premium", "Sacred", "Handcrafted", "Elegant"].includes(product.badge),
  );
};
