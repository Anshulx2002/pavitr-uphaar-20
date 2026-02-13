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
  const lines = allProducts.map(p => `${p.id} | ${p.name} | ${baseUrl}${p.image}`);
  const text = lines.join("\n");
  const blob = new Blob([text], { type: "text/plain;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "pavitra-uphaar-image-links.txt";
  a.click();
  URL.revokeObjectURL(url);
};
