import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, ShoppingBag, MapPin, Users, Wrench, FileText, ArrowRight, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/structuredData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    number: "1",
    icon: Layout,
    title: "Cabinet Design Consultations",
    description: "Our design experts will help you transform your ideas into a cohesive, functional layout that fits your style and space. We work with you to select door styles, finishes, color palettes, and storage features. We also walk you through material and construction choices—like MDF vs. plywood vs. solid wood—so you can make confident, informed decisions.",
  },
  {
    number: "2",
    icon: ShoppingBag,
    title: "Product Selection from Trusted Suppliers",
    description: "We proudly partner with leading manufacturers such as J&K Cabinetry, 10% Cabinetry, and TA Cabinetry. Explore a wide variety of cabinet styles, finishes, and features that suit everything from budget-friendly updates to high-end custom kitchens. You can browse a curated selection of these brands on our Products page.",
  },
  {
    number: "3",
    icon: MapPin,
    title: "Showroom Experience",
    description: "Nothing compares to seeing cabinetry in person. Visit our showroom at 601 Corduroy Rd, Lewis Center, OH 43035 to explore fully assembled displays, hardware samples, finish swatches, and functional accessories. It's the perfect space to compare door styles, test smart storage solutions, and consult with our team in a relaxed, informative setting. You can preview some of our work on our Gallery page.",
  },
  {
    number: "4",
    icon: Users,
    title: "Coordination with Your Contractor",
    description: "We understand that many homeowners already have a trusted contractor or builder. At Columbus Cabinets, we're happy to work directly with your contractor to ensure a seamless experience. We can accommodate requests for both assembled and unassembled cabinetry, depending on project needs. Our team will also assist in designing a functional, accurate cabinet layout that integrates smoothly with your construction schedule and site requirements.",
  },
  {
    number: "5",
    icon: Wrench,
    title: "Hardware, Accessories & Storage Solutions",
    description: "We offer more than just cabinets—we help optimize your space with smart accessories and functional hardware. Choose from soft-close hinges, full-extension slides, pull-out shelves, spice racks, lazy Susans, tray dividers, waste pullouts, appliance garages, and more. If you're not sure where to start, check out our blog on creative cabinet solutions for small kitchens.",
  },
  {
    number: "6",
    icon: FileText,
    title: "Quotes & Project Support",
    description: "Ready to start planning? We provide detailed cabinet quotes based on your layout, measurements, and product choices. Our team is here to help answer your questions, adjust specifications, and support your project from idea to installation. Reach out to us through our Contact page to get started or book a consultation.",
  },
];

const Services = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.columbuscabinets.com/" },
    { name: "Services", url: "https://www.columbuscabinets.com/services" }
  ]);

  const serviceSchemas = services.map(service => 
    getServiceSchema(service.title, service.description)
  );

  const structuredData = [breadcrumbSchema, ...serviceSchemas];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Our Services | Custom Kitchen & Bathroom Cabinets | Columbus Cabinets"
        description="Premium cabinetry solutions for kitchens and bathrooms. Custom cabinet design, installation, and sales from trusted brands. Serving the greater Columbus area from Lewis Center, Ohio."
        keywords="kitchen cabinets, bathroom cabinets, custom cabinets, cabinet design, cabinet installation, Columbus Ohio, Lewis Center, J&K Cabinetry, TA Cabinetry, assembled cabinets, unassembled cabinets"
        structuredData={structuredData}
      />
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">WHAT WE CAN DO FOR YOU</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Columbus Cabinets, we offer comprehensive cabinetry services tailored to homeowners, contractors, and designers across Central Ohio. Whether you're remodeling a kitchen, building a new home, or upgrading a bathroom, we provide personalized support every step of the way—from initial design consultation to final installation.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up border-2 border-foreground/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-foreground">{service.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <service.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto mt-20 text-center">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Ready to Transform Your Space?
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                    At Columbus Cabinets, we're committed to making your remodel or build process easier, smarter, and more beautiful. Whether you're a first-time homeowner or a seasoned contractor, we're here to help make your vision a reality—one cabinet at a time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-background px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      <Link to="/contact">
                        Get Free Quote
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-2 border-primary px-8 py-6 text-lg font-semibold">
                      <a href="tel:6145551234">
                        <Phone className="mr-2 w-5 h-5" />
                        Call (380) 278-1778
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

