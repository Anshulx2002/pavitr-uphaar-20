import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { allProducts } from "@/data/products";

interface SearchSuggestion {
  id: string;
  title: string;
  category: string;
  type: "product" | "category";
}

// Generate search suggestions from actual products
const getSearchSuggestions = (): SearchSuggestion[] => {
  const productSuggestions = allProducts.map(product => ({
    id: product.id.toString(),
    title: product.name,
    category: product.category,
    type: "product" as const
  }));
  
  const categories = Array.from(new Set(allProducts.map(p => p.category)));
  const categorySuggestions = categories.map((category, index) => ({
    id: `cat-${index}`,
    title: category,
    category: "Category",
    type: "category" as const
  }));
  
  return [...productSuggestions, ...categorySuggestions];
};

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ className = "", placeholder = "Search products...", onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const searchSuggestions = getSearchSuggestions();

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchSuggestions.filter(
        (suggestion) =>
          suggestion.title.toLowerCase().includes(query.toLowerCase()) ||
          suggestion.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsOpen(true);
    } else {
      setFilteredSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setIsOpen(false);
    onSearch?.(searchQuery);
    
    // Navigate to products page with search query
    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    if (suggestion.type === "category") {
      // Navigate to products page filtered by category
      navigate(`/products?category=${encodeURIComponent(suggestion.title)}`);
    } else {
      // Navigate to products page with search query for specific product
      handleSearch(suggestion.title);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={`relative w-full max-w-md ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch(query)}
          className="pl-10 pr-10 bg-background border-border focus:border-primary focus:ring-primary"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isOpen && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border-2 border-premium-gold-saffron/30 rounded-xl shadow-2xl backdrop-blur-md z-[9999] max-h-80 overflow-y-auto">
          <div className="p-2">
            {filteredSuggestions.slice(0, 8).map((suggestion, index) => (
              <button
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full px-4 py-3 text-left hover:bg-premium-gold-saffron/10 rounded-lg flex items-center justify-between group transition-all duration-200 border border-transparent hover:border-premium-gold-saffron/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-premium-gold-saffron rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium group-hover:text-premium-gold-saffron transition-colors">{suggestion.title}</span>
                    <span className="text-xs text-muted-foreground">{suggestion.category}</span>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 bg-premium-gold-saffron/10 text-premium-gold-saffron rounded-full border border-premium-gold-saffron/20 font-medium">
                  {suggestion.type}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;