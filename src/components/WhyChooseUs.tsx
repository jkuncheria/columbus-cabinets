import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Clock, Package } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Exceptional Value",
    description: "Get premium solid wood, soft-closing, full overlay cabinets for half the price of competitors. Most of our customers land amazing kitchens under $10,000, that's beautiful & durable kitchens without the huge cost.",
  },
  {
    icon: Clock,
    title: "Faster Turnaround",
    description: "We offer quicker lead times than anyone else, with most projects having a lead time of just 2 weeks. Finish your kitchen renovation sooner, with less disruption, and start enjoying your new space much faster.",
  },
  {
    icon: Package,
    title: "Effortless Bundles",
    description: "Simplify your remodel! Get cabinets and stone countertops from one source. View our in-stock granite and quartz slabs, and we'll handle fabrication and installation for bundled prices that make your dream kitchen easy and affordable.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Why Pick Us?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-0 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
