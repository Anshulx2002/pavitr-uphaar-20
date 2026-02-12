import { allProducts } from "@/data/products";

export const downloadProductsCSV = () => {
  const headers = ["ID", "Name", "Price (₹)", "Original Price (₹)", "Category", "Badge", "Rating", "Size", "Image Path", "Description"];
  
  const rows = allProducts.map(p => [
    p.id,
    `"${p.name.replace(/"/g, '""')}"`,
    p.price,
    p.originalPrice ?? "",
    p.category,
    p.badge ?? "",
    p.rating,
    p.size ?? "",
    `"${p.image}"`,
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
