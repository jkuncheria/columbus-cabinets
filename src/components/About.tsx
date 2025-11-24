import { Button } from "@/components/ui/button";
import { Award, Clock, DollarSign, Timer } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Clock, label: "years of experience", value: "5+" },
  { icon: Award, label: "trusted brands", value: "3+" },
  { icon: DollarSign, label: "satisfied customers", value: "500+" },
  { icon: Timer, label: "service areas", value: "10+" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to <span className="font-semibold text-foreground">Columbus Cabinets</span>, 
                your local partner in creating beautiful, functional spaces. Based in Lewis Center, Ohio, we proudly serve 
                homeowners, contractors, and designers throughout the greater Columbus area with premium cabinetry solutions tailored to your needs.
              </p>
              <p>
                Our journey began with a simple idea: quality cabinets shouldn't come with confusing processes or sky-high prices. 
                That's why we've built our reputation on providing thoughtfully designed cabinets, straightforward guidance, 
                and personalized service from start to finish.
              </p>
              <p>
                We work with trusted brands like J&K Cabinetry, 10% Cabinetry, and TA Cabinetry to bring you a wide range of 
                style, color, and layout options. Whether you're building a new home, remodeling your kitchen, or upgrading 
                your rental property, we're here to help you select the right cabinetry—assembled or unassembled, classic or contemporary.
              </p>
            </div>
            <Button 
              className="mt-6 bg-primary hover:bg-primary/90" 
              size="lg"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in-up">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
