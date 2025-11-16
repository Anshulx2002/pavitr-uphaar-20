import { ShoppingCart, Menu, ChevronDown, Sparkles, Star, User, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/contexts/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { getCartItemsCount, user } = useCart();
  const navigate = useNavigate();

  // Check if user is admin
  useEffect(() => {
    if (user) {
      checkAdminStatus();
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  const checkAdminStatus = async () => {
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user?.id)
      .eq('role', 'admin')
      .maybeSingle();
    
    setIsAdmin(!!data);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to logout",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
      navigate("/");
    }
  };

  const productCategories = [
    { name: "Puja Box", href: "/products?category=puja-boxes", description: "Sacred puja boxes with divine compartments" },
    { name: "Incense & Agarbatti", href: "/incense-agarbatti", description: "Premium quality incense sticks" },
    { name: "Lamps & Diyas", href: "/lamps-diyas", description: "Traditional brass and clay lamps" },
    { name: "Pooja Accessories", href: "/pooja-accessories", description: "Essential items for daily worship" },
    { name: "Idols", href: "/products?category=idols", description: "Sacred idols and statues" },
  ];

  return (
    <header className="bg-gradient-to-br from-orange-50 via-yellow-50/90 to-red-50/60 backdrop-blur-sm border-b border-[hsl(45_60%_75%)] shadow-[0_4px_20px_rgba(218,165,32,0.15),0_1px_3px_rgba(0,0,0,0.1)] sticky top-0 z-50 relative">
      {/* Luxury golden accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-vermillion to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-festive-orange to-transparent opacity-60"></div>

      {/* Premium festive background with cultural motifs */}
      <div className="absolute inset-0 bg-gradient-radial from-vermillion/30 via-festive-orange/15 to-transparent opacity-70 pointer-events-none"></div>

      {/* Subtle festive motifs - diyas, lotus, rangoli sparkles */}
      <div
        className="absolute inset-0 opacity-12 pointer-events-none"
        style={{
          backgroundImage: `
          radial-gradient(circle at 15% 25%, hsl(var(--vermillion) / 0.4) 1px, transparent 1px),
          radial-gradient(circle at 85% 30%, hsl(var(--marigold) / 0.3) 1px, transparent 1px),
          radial-gradient(circle at 25% 75%, hsl(var(--festive-orange) / 0.3) 1px, transparent 1px),
          radial-gradient(circle at 75% 80%, hsl(var(--sindoor) / 0.4) 1px, transparent 1px),
          radial-gradient(circle at 50% 20%, hsl(var(--crimson-red) / 0.2) 2px, transparent 2px),
          radial-gradient(circle at 30% 60%, hsl(var(--vermillion) / 0.2) 1.5px, transparent 1.5px)
        `,
          backgroundSize: "100px 100px, 120px 120px, 110px 110px, 130px 130px, 150px 150px, 140px 140px",
        }}
      ></div>

      {/* Traditional Indian motifs - very subtle diya and lotus outlines */}
      <div
        className="absolute inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: `
          radial-gradient(ellipse 8px 4px at 20% 30%, transparent 40%, hsl(var(--vermillion) / 0.15) 45%, transparent 50%),
          radial-gradient(ellipse 6px 3px at 80% 25%, transparent 40%, hsl(var(--festive-orange) / 0.12) 45%, transparent 50%),
          radial-gradient(ellipse 8px 4px at 30% 70%, transparent 40%, hsl(var(--sindoor) / 0.10) 45%, transparent 50%),
          radial-gradient(ellipse 6px 3px at 70% 75%, transparent 40%, hsl(var(--marigold) / 0.15) 45%, transparent 50%),
          radial-gradient(circle 12px at 50% 50%, transparent 60%, hsl(var(--crimson-red) / 0.08) 65%, transparent 70%)
        `,
          backgroundSize: "180px 180px, 200px 200px, 160px 160px, 220px 220px, 300px 300px",
        }}
      ></div>

      {/* Elegant mandala pattern for cultural richness */}
      <div
        className="absolute inset-0 opacity-6 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, transparent 20%, rgba(243,156,18,0.08) 25%, transparent 30%, rgba(243,156,18,0.04) 35%, transparent 40%)`,
          backgroundSize: "200px 200px",
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Divine golden halo - enhanced */}
      <div className="absolute inset-0 bg-gradient-radial from-vermillion/25 via-festive-orange/15 to-transparent opacity-80 pointer-events-none scale-110"></div>
      <div className="absolute inset-0 bg-gradient-radial from-marigold/20 via-sindoor/10 to-transparent opacity-70 pointer-events-none scale-125 animate-pulse"></div>

      <div className="container mx-auto px-4 py-2.5 md:py-3 relative z-10">
        <div className="flex items-center justify-between">
          {/* Brand Name - Properly Sized */}
          <Link to="/" className="flex items-center group pr-4 md:pr-8 lg:pr-10" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex flex-col">
              <h1 className="text-base md:text-lg lg:text-xl font-bold text-foreground leading-none tracking-tight whitespace-nowrap">
                Pavitra Uphaar
              </h1>
              <p className="hidden md:block text-[11px] text-muted-foreground/70 mt-0.5 font-medium tracking-wide">
                Traditional Sacred Products
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
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
              <DropdownMenuContent
                align="start"
                className="min-w-[240px] p-2 bg-background border border-border/50 shadow-lg z-50"
              >
                <div className="grid gap-1">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border/50 px-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-foreground text-sm">Our Sacred Collection</span>
                  </div>
                  {productCategories.map((category) => (
                    <DropdownMenuItem
                      key={category.name}
                      onSelect={(e) => {
                        e.preventDefault();
                        navigate(category.href);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-start px-2 py-2 rounded hover:bg-muted/50 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                          {category.name}
                        </span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/reviews"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/blogs"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Blogs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/corporate-gifting"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Corporate Gifting
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Search Bar - Desktop & Tablet */}
          <div className="hidden md:flex md:w-80 md:mx-4">
            <SearchBar placeholder="Search products, categories..." />
          </div>

          {/* Mobile & Desktop Actions */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link to="/checkout">
                <Button variant="festive" size="sm" className="text-white font-medium">
                  Go to Checkout
                </Button>
              </Link>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => navigate("/account")}>
                      <User className="mr-2 h-4 w-4" />
                      Account
                    </DropdownMenuItem>
                    {isAdmin && (
                      <DropdownMenuItem onClick={() => navigate("/admin/view")}>
                        <Shield className="mr-2 h-4 w-4" />
                        Admin Panel
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/auth">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
              )}
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
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="mt-4 py-4 border-t border-border space-y-4">
            {/* Mobile Search */}
            <div className="px-2">
              <SearchBar placeholder="Search products..." />
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">
                Home
              </Link>
              <Link
                to="/products"
                className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2"
              >
                Products
              </Link>
              <Link
                to="/reviews"
                className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2"
              >
                Reviews
              </Link>
              <Link
                to="/blogs"
                className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2"
              >
                Blogs
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">
                About
              </Link>
              <Link
                to="/corporate-gifting"
                className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2"
              >
                Corporate Gifting
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2"
              >
                Contact
              </Link>

              <Link
                to="/checkout"
                className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2"
              >
                Checkout
              </Link>
              {user ? (
                <>
                  <Link
                    to="/account"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2"
                  >
                    Account
                  </Link>
                  {isAdmin && (
                    <Link
                      to="/admin/view"
                      className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/auth" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2">
                  Login / Sign Up
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
