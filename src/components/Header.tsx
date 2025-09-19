import { ShoppingCart, Phone, Menu, ChevronDown, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    { name: "Idols", href: "/products?category=idols", description: "Sacred idols and statues" }
  ];

  return (
    <header className="bg-gradient-to-br from-orange-50 via-yellow-50/90 to-orange-100/70 backdrop-blur-sm border-b border-[hsl(45_60%_75%)] shadow-[0_4px_20px_rgba(218,165,32,0.15),0_1px_3px_rgba(0,0,0,0.1)] sticky top-0 z-50 relative">
      {/* Luxury golden accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(45_85%_65%)] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(42_80%_70%)] to-transparent opacity-60"></div>
      
      {/* Premium festive background with cultural motifs */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-100/50 via-[#F39C12]/20 to-transparent opacity-70 pointer-events-none"></div>
      
      {/* Subtle festive motifs - diyas, lotus, rangoli sparkles */}
      <div className="absolute inset-0 opacity-12 pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(circle at 15% 25%, rgba(243,156,18,0.4) 1px, transparent 1px),
          radial-gradient(circle at 85% 30%, rgba(249,200,70,0.3) 1px, transparent 1px),
          radial-gradient(circle at 25% 75%, rgba(243,156,18,0.3) 1px, transparent 1px),
          radial-gradient(circle at 75% 80%, rgba(249,200,70,0.4) 1px, transparent 1px),
          radial-gradient(circle at 50% 20%, rgba(243,156,18,0.2) 2px, transparent 2px),
          radial-gradient(circle at 30% 60%, rgba(249,200,70,0.2) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '100px 100px, 120px 120px, 110px 110px, 130px 130px, 150px 150px, 140px 140px'
      }}></div>
      
      {/* Traditional Indian motifs - very subtle diya and lotus outlines */}
      <div className="absolute inset-0 opacity-8 pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(ellipse 8px 4px at 20% 30%, transparent 40%, rgba(243,156,18,0.15) 45%, transparent 50%),
          radial-gradient(ellipse 6px 3px at 80% 25%, transparent 40%, rgba(249,200,70,0.12) 45%, transparent 50%),
          radial-gradient(ellipse 8px 4px at 30% 70%, transparent 40%, rgba(243,156,18,0.10) 45%, transparent 50%),
          radial-gradient(ellipse 6px 3px at 70% 75%, transparent 40%, rgba(249,200,70,0.15) 45%, transparent 50%),
          radial-gradient(circle 12px at 50% 50%, transparent 60%, rgba(243,156,18,0.08) 65%, transparent 70%)
        `,
        backgroundSize: '180px 180px, 200px 200px, 160px 160px, 220px 220px, 300px 300px'
      }}></div>
      
      {/* Elegant mandala pattern for cultural richness */}
      <div className="absolute inset-0 opacity-6 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at center, transparent 20%, rgba(243,156,18,0.08) 25%, transparent 30%, rgba(243,156,18,0.04) 35%, transparent 40%)`,
        backgroundSize: '200px 200px',
        backgroundPosition: 'center center'
      }}></div>
      
      {/* Divine golden halo - enhanced */}
      <div className="absolute inset-0 bg-gradient-radial from-[#DAA520]/25 via-[#F39C12]/15 to-transparent opacity-80 pointer-events-none scale-110"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/20 via-[#DAA520]/10 to-transparent opacity-70 pointer-events-none scale-125 animate-pulse"></div>
      
      <div className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo - Mobile Optimized with redirect */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full p-2 shadow-sm">
              <img src="/lovable-uploads/9a70ebdf-b809-4775-b7cb-d4a5f83de787.png" alt="Pavitra Uphaar Logo" className="w-full h-full object-contain" />
            </div>
            <div className="ml-3">
              <h1 className="text-lg md:text-xl font-bold text-foreground">Pavitra Uphaar</h1>
              <p className="text-xs text-muted-foreground hidden md:block">Traditional Sacred Products</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group flex items-center">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[240px] p-2 bg-background border border-border/50 shadow-lg z-50">
                <div className="grid gap-1">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border/50 px-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-foreground text-sm">Our Sacred Collection</span>
                  </div>
                  {productCategories.map((category) => (
                    <DropdownMenuItem key={category.name} asChild>
                      <Link 
                        to={category.href}
                        className="flex flex-col items-start px-2 py-2 h-10 rounded hover:bg-muted/50 transition-all duration-200 cursor-pointer group"
                      >
                        <div className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">{category.name}</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/festival-kits" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Festival Kits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Search Bar - Desktop & Tablet */}
          <div className="hidden md:flex md:w-80 md:mx-4">
            <SearchBar placeholder="Search products, categories..." />
          </div>

          {/* Mobile & Desktop Actions */}
          <div className="flex items-center space-x-2">
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link to="/checkout">
                <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Go to Checkout
                </Button>
              </Link>
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
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">Home</Link>
              <Link to="/products" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">Products</Link>
              <Link to="/festival-kits" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">Festival Kits</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">About</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">Contact</Link>
              
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;