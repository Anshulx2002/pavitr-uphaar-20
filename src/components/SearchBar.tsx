import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchSuggestion {
  id: string;
  title: string;
  category: string;
  type: "product" | "category";
}

const searchSuggestions: SearchSuggestion[] = [
  { id: "1", title: "Diyas", category: "Lamps", type: "product" },
  { id: "2", title: "Incense Sticks", category: "Agarbatti", type: "product" },
  { id: "3", title: "Pooja Thali", category: "Accessories", type: "product" },
  { id: "4", title: "Rudraksha", category: "Sacred Threads", type: "product" },
  { id: "5", title: "Kumkum", category: "Accessories", type: "product" },
  { id: "6", title: "Camphor", category: "Accessories", type: "product" },
  { id: "7", title: "Sandalwood", category: "Accessories", type: "product" },
  { id: "8", title: "Marigold Garland", category: "Flowers", type: "product" },
  { id: "9", title: "Festival Kits", category: "Kits", type: "category" },
  { id: "10", title: "Brass Items", category: "Accessories", type: "category" },
];

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
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    handleSearch(suggestion.title);
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
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-warm z-50 max-h-60 overflow-y-auto">
          {filteredSuggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-3 text-left hover:bg-muted flex items-center justify-between group transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-foreground font-medium">{suggestion.title}</span>
                <span className="text-xs text-muted-foreground">{suggestion.category}</span>
              </div>
              <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                {suggestion.type}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;