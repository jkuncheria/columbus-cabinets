import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/building.png";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful custom kitchen and bathroom cabinets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/45 via-foreground/35 to-foreground/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-48 pb-32 text-center w-full">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <div className="flex justify-center">
            <div className="inline-block bg-background/30 backdrop-blur-sm rounded-lg px-6 md:px-10 py-4 md:py-6 border border-background/20">
              <h1 className="font-display text-2xl md:text-7xl font-bold text-background leading-tight drop-shadow-2xl">
                <span className="whitespace-nowrap">#1 Ranked Cabinet Store</span>
                <br />
                <span className="text-accent font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">in Central Ohio</span>
              </h1>
            </div>
          </div>
          <p className="text-lg text-background/80 max-w-2xl mx-auto">
            Custom cabinets that blend beauty, functionality, and durability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-background px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-background/50 text-background hover:bg-background/20 bg-background/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              <a href="tel:6145551234">
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </div>

          {/* Multi-Step Form - COMMENTED OUT */}
          {/* <div className="max-w-md lg:max-w-2xl mx-auto bg-background/20 rounded-xl shadow-2xl p-4 md:p-6 border border-background/30">
            <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
              Get Your Free Quote
            </h2>
            Form content commented out...
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
