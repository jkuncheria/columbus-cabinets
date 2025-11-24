import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../constants/navItems";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes to a different page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full flex flex-col font-sans z-50 relative">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs py-2 px-4 flex justify-center items-center border-b border-gray-200">
        <div className="text-center text-primary font-semibold">
          <span className="mr-2">🎉 WINTER CLEARANCE EVENT: UP TO 30% OFF CABINETS</span>
          <Link to="/contact" onClick={scrollToTop} className="underline hover:text-primary/80">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="bg-background py-4 px-4 md:px-8 lg:px-16 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo & Mobile Menu Toggle */}
          <div className="w-full md:w-auto flex justify-between items-center">
            <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2">
              <img 
                src="/columbus-cabinets-logo.png" 
                alt="Columbus Cabinets" 
                className="h-8 md:h-10 w-auto"
              />
            </Link>
            <div className="flex items-center gap-2 md:hidden">
              <Link 
                to="/contact"
                onClick={scrollToTop}
                className="p-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <a 
                href="tel:6145551234"
                className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button 
                className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Call & Contact Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              to="/contact"
              onClick={scrollToTop}
              className="flex items-center border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-sm px-4 py-2 rounded-lg transition-all"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
            <a 
              href="tel:6145551234"
              className="flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (380) 278-1778
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-primary text-primary-foreground ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4 md:px-16">
          <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8 lg:space-x-12 text-sm font-extrabold py-4 md:py-0">
            {NAV_ITEMS.map((item) => (
              <li 
                key={item.label} 
                className="border-b border-primary/20 md:border-none last:border-none"
              >
                {item.href.startsWith('#') ? (
                  <a 
                    href={item.href} 
                    className="block py-3 md:py-4 hover:text-accent transition-colors"
                  >
                    {item.label.toUpperCase()}
                  </a>
                ) : (
                  <Link 
                    to={item.href} 
                    className="block py-3 md:py-4 hover:text-accent transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
