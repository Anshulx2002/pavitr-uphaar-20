import { allProducts } from "@/data/products";

export const downloadProductsCSV = () => {
  const baseUrl = window.location.origin;
  const headers = ["SKU ID", "Name", "Price (₹)", "Original Price (₹)", "Category", "Badge", "Rating", "Size", "Image URL", "Description"];
  
  const rows = allProducts.map(p => [
    p.id,
    `"${p.name.replace(/"/g, '""')}"`,
    p.price,
    p.originalPrice ?? "",
    p.category,
    p.badge ?? "",
    p.rating,
    p.size ?? "",
    `"${baseUrl}${p.image}"`,
    `"${p.description.replace(/"/g, '""')}"`,
  ]);

  const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "pavitra-uphaar-products.csv";
  a.click();
  URL.revokeObjectURL(url);
};

export const downloadImageLinksDump = () => {
  const baseUrl = window.location.origin;
  
  const orderedNames = [
    "Hanuman Chalisa Aarti Book",
    "Aarti Sangrah",
    "Laxmi Ganesh Puja Box - Small",
    "Jesus Last Supper Prayer Box",
    "SiddhiVinayak Puja Box",
    "Radhakrishna Puja Box",
    "Kolhapuri Maa Deluxe Puja Box",
    "24 Jain Tirthankar Puja Box",
    "Ambee Maa Puja Box",
    "Radha Krishna Gold Puja Box",
    "Gayatri Maa Puja Box",
    "Ganesh Puja Box - Small",
    "Laxmi Ganesh Puja Jewellery Box with Compartment - Big",
    "Laxmi Ganesh Saraswati 3D Puja Jewellery Box with Compartment - Big",
    "Shatrunjay Siddhachakra Deluxe Puja Box - Big",
    "Jesus Prayer Box - Big",
    "RamDarbar Puja Box - Small",
    "Balaji Gold Puja Box - Small",
    "Laxmi Ganesh Puja Box - Small",
    "Balaji (3D) Puja Box - Small",
    "RamLalla Puja Box - Small",
    "Tridev Puja Box - Big",
    "Jain Puja Box - Big",
    "Laxmi Kuber and Tortoise Puja Box - Big",
    "Balaji Puja Box - Big",
    "Golden Temple Puja Box - Big",
    "Laxmiji Puja Box - Small",
    "Ramparivar Ayodhya Mandir Puja Box - Big",
    "Sai Samadhi Puja Box - Big",
    "Guru Nanak Puja Box - Small",
    "Royal Peacock Krishna Recline Idol",
    "Bal Krishna with Makhan Idol",
    "Buddha Under Bodhi Tree Idol",
    "Contemporary Serpent Krishna Idol",
    "Golden Bal Krishna Idol",
    "Heritage Ayodhya Temple Sculpture",
    "Ornate Ganesha Wall Hanging",
    "Ganesha Prosperity Panel",
    "Shrine Style Ram Lalla Idol",
    "Classic Ram Lalla Temple Idol",
    "Artisan Monk Figurine Set",
    "Ascetic Ganesha Meditation Idol",
    "Dancing Ganesha Idol",
    "Mystical Sage Ganesha Idol",
  ];

  const headers = ["SKU ID", "Name", "Image URL"];
  const rows = orderedNames.map(name => {
    const p = allProducts.find(prod => prod.name === name);
    if (p) {
      return [p.id, `"${p.name.replace(/"/g, '""')}"`, `"${baseUrl}${p.image}"`];
    }
    return ["", `"${name}"`, "NOT FOUND"];
  });

  const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "pavitra-uphaar-image-links.csv";
  a.click();
  URL.revokeObjectURL(url);
};
