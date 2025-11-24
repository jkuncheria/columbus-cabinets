import { Card, CardContent } from "@/components/ui/card";
import kitchenCabinetImage from "@/assets/kitchencabinet.png";
import cabAndCountertopImage from "@/assets/cab-and-countertop.png";

const services = [
  {
    title: "Kitchen Cabinets Only",
    description: "Locally made, solid wood cabinets with all soft-closing, full-overlay doors/drawers and extensive customization options.",
    price: "10'x10' Starting at $3,699",
    image: kitchenCabinetImage,
  },
  {
    title: "Cabinets & Countertops",
    description: "Solid wood cabinets with all soft-closing features and full-overlay doors, paired with granite or quartz countertops.",
    price: "10'x10' Starting at $5,399",
    image: cabAndCountertopImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20 scroll-mt-32">
      <div className="container mx-auto px-4">
        {/* Main Headline */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            High Quality, High Value Cabinets
          </h1>
          <h2 className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium cabinetry at unbeatable prices. Locally made, solid wood cabinets with all soft-closing, full-overlay doors and drawers.
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in-up border-2 border-foreground/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
