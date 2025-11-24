import { MapPin, Phone } from "lucide-react";

const ServiceArea = () => {
  const serviceAreas = [
    { city: "Columbus", zip: "43000-43299" },
    { city: "Lewis Center", zip: "43035" },
    { city: "Dublin", zip: "43016-43017" },
    { city: "Westerville", zip: "43081-43082" },
    { city: "Powell", zip: "43065" },
    { city: "Delaware", zip: "43015" },
    { city: "Worthington", zip: "43085" },
    { city: "Gahanna", zip: "43230" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground rounded-full mb-4">
            <MapPin className="h-8 w-8 text-background" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Service Areas
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Proudly serving the greater Columbus area with premium cabinetry solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-background border-2 border-foreground rounded-lg p-4 hover:shadow-lg transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">{area.city}</h3>
                  <p className="text-sm text-foreground/70">ZIP: {area.zip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-background border-2 border-foreground rounded-xl p-8 text-center max-w-2xl mx-auto shadow-elegant">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Don't See Your Area?</h3>
          <p className="text-foreground/70 mb-6">
            We may still be able to help! Contact us to check if we serve your location.
          </p>
          <a
            href="tel:6145551234"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Call Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
