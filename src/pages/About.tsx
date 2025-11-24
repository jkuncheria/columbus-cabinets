import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, DollarSign, Timer, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/structuredData";

const stats = [
  { icon: Award, label: "trusted brands", value: "3+" },
  { icon: Clock, label: "years of experience", value: "5+" },
  { icon: DollarSign, label: "satisfied customers", value: "500+" },
  { icon: Timer, label: "service areas", value: "10+" },
];

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.columbuscabinets.com/" },
    { name: "About Us", url: "https://www.columbuscabinets.com/about" }
  ]);

  const structuredData = [breadcrumbSchema, getOrganizationSchema()];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us | Columbus Cabinets | Custom Kitchen & Bathroom Cabinets | Lewis Center, OH"
        description="Learn about Columbus Cabinets - your local partner in creating beautiful, functional spaces. Based in Lewis Center, Ohio, serving the greater Columbus area with premium cabinetry solutions."
        keywords="Columbus Cabinets, kitchen cabinets Columbus, bathroom cabinets Ohio, custom cabinets Lewis Center, cabinet design, J&K Cabinetry, TA Cabinetry"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About Columbus Cabinets
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                ELEVATE YOUR CABINETRY, ELEVATE YOUR LIFE
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* About Us Section */}
              <div className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                  <div className="order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                      ABOUT US
                    </h2>
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                      <p>
                        At <span className="font-semibold text-foreground">Columbus Cabinets</span>, we believe that a well-designed space can transform your everyday life. Our custom bathroom and kitchen cabinets bring a blend of beauty, functionality, and durability, crafted to meet your unique vision.
                      </p>
                      <p>
                        With years of experience in design and installation, our team is dedicated to creating spaces that inspire and serve. From the initial consultation to the final touch, we guide you every step of the way to ensure your satisfaction.
                      </p>
                      <p>
                        Here's a little bit about us… At Columbus Cabinets, we're more than just a cabinet supplier — we're your local partner in creating beautiful, functional spaces. Based in Lewis Center, Ohio, we proudly serve homeowners, contractors, and designers throughout the greater Columbus area with premium cabinetry solutions tailored to your needs.
                      </p>
                      <p>
                        Our journey began with a simple idea: quality cabinets shouldn't come with confusing processes or sky-high prices. That's why we've built our reputation on providing thoughtfully designed cabinets, straightforward guidance, and personalized service from start to finish.
                      </p>
                      <p>
                        We work with trusted brands like J&K Cabinetry, 10% Cabinetry, and TA Cabinetry to bring you a wide range of style, color, and layout options. Whether you're building a new home, remodeling your kitchen, or upgrading your rental property, we're here to help you select the right cabinetry—assembled or unassembled, classic or contemporary.
                      </p>
                      <p>
                        What sets us apart is our personal approach. We take the time to understand your space, your style, and your budget. From design layout to final delivery, we work closely with your contractor (or directly with you) to ensure everything fits seamlessly—literally and visually.
                      </p>
                      <p>
                        When you visit our showroom at 601 Corduroy Rd, Lewis Center, OH 43035, you'll find more than samples. You'll find a team ready to listen, offer practical advice, and guide you toward a result you'll be proud of.
                      </p>
                      <p>
                        At Columbus Cabinets, we believe every great kitchen starts with a solid foundation—and that begins with the right cabinets and the right people behind them. We'd be honored to be part of your next project.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative">
                      <img 
                        src="/ruben.jpg" 
                        alt="Columbus Cabinets Showroom" 
                        className="w-full h-auto rounded-lg shadow-xl object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Button 
                    size="lg" 
                    onClick={scrollToContact}
                    className="bg-accent hover:bg-accent/90 text-background"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg text-center">
                      <CardContent className="p-6">
                        <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                          {stat.value}
                        </div>
                        <div className="h-1 w-12 bg-accent mx-auto mb-3" />
                        <div className="text-sm text-muted-foreground uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default About;

