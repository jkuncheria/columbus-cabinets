import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/columbus-cabinets-logo.png" 
                  alt="Columbus Cabinets" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <p className="text-background/80 text-sm">
              Elevate your cabinetry, elevate your life. Custom bathroom and kitchen cabinets that blend beauty, functionality, and durability.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:6145551234" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                (380) 278-1778
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <div>601 Corduroy Rd</div>
                  <div>Lewis Center, OH 43035</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-background/80">
                <Clock className="w-4 h-4 mt-0.5" />
                <div>
                  <div>Mon – Fri: 8 AM – 6 PM</div>
                  <div>Sat: 9 AM – 3 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80 mb-6">
              <li>
                <Link to="/" className="hover:text-background transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-background transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-background transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/care-tips" className="hover:text-background transition-colors">Care Tips</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-background transition-colors">Contact</Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/columbus.cabinets.fb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/columbuscabinets/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {currentYear} Columbus Cabinets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
