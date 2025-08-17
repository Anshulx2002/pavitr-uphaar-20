import { ShoppingCart, Phone, Menu, ChevronDown, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  const productCategories = [
    { name: "Festival Kits", href: "/festival-kits", description: "Complete pooja sets for festivals" },
    { name: "Incense & Agarbatti", href: "/incense-agarbatti", description: "Premium quality incense sticks" },
    { name: "Lamps & Diyas", href: "/lamps-diyas", description: "Traditional brass and clay lamps" },
    { name: "Pooja Accessories", href: "/pooja-accessories", description: "Essential items for daily worship" },
    { name: "Flowers & Garlands", href: "/flowers-garlands", description: "Fresh flowers and decorative garlands" },
    { name: "Sacred Threads", href: "/sacred-threads", description: "Blessed threads and malas" }
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border shadow-warm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Mobile Optimized with redirect */}
          <a href="/" className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full p-2 shadow-sm">
              <img src="/lovable-uploads/9a70ebdf-b809-4775-b7cb-d4a5f83de787.png" alt="Pavitra Uphaar Logo" className="w-full h-full object-contain" />
            </div>
            <div className="ml-3">
              <h1 className="text-lg md:text-xl font-bold text-foreground">Pavitra Uphaar</h1>
              <p className="text-xs text-muted-foreground hidden md:block">Traditional Sacred Products</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="/" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary transition-all duration-300 font-medium p-0 h-auto bg-transparent hover:bg-transparent">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80 p-4 bg-background/95 backdrop-blur-md border border-border/50 shadow-2xl">
                <div className="grid gap-3">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Our Sacred Collection</span>
                  </div>
                  {productCategories.map((category) => (
                    <DropdownMenuItem key={category.name} asChild>
                      <a 
                        href={category.href}
                        className="flex flex-col items-start p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 cursor-pointer group"
                      >
                        <div className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">{category.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground mt-1 ml-5">{category.description}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/festival-kits" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Festival Kits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Search Bar - Desktop & Tablet */}
          <div className="hidden md:flex md:w-80 md:mx-4">
            <SearchBar placeholder="Search products, categories..." />
          </div>

          {/* Mobile & Desktop Actions */}
          <div className="flex items-center space-x-2">
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Cart - Opens drawer */}
            <CartDrawer isOpen={isCartOpen} onOpenChange={setIsCartOpen}>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getCartItemsCount() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground animate-pulse">
                    {getCartItemsCount()}
                  </Badge>
                )}
              </Button>
            </CartDrawer>
            
            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="mt-4 py-4 border-t border-border space-y-4">
            {/* Mobile Search */}
            <div className="px-2">
              <SearchBar placeholder="Search products..." />
            </div>
            
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">Home</a>
              <a href="/products" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">Products</a>
              <a href="/festival-kits" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">Festival Kits</a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">About</a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">Contact</a>
              
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;