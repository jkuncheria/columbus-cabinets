import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Heart, Users, Building2, Handshake } from "lucide-react";
import aboutUsImage from "@/assets/about-us.jpg";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/structuredData";


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
        <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              
              {/* Hero Introduction - Large Feature */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-accent shadow-2xl">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="relative p-12 md:p-16 text-center text-white">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                    Transforming Spaces, Elevating Lives
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    At <span className="font-bold">Columbus Cabinets</span>, we craft custom kitchen and bathroom cabinets that blend beauty, functionality, and durability—designed to transform your everyday living experience.
                  </p>
                </div>
              </div>

              {/* Two Column Layout for Story */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-background to-muted/30">
                  <CardContent className="p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Users className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">Your Local Partner</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Based in Lewis Center, Ohio, we serve homeowners, contractors, and designers throughout the greater Columbus area. We're more than a supplier—we're your partner in creating beautiful, functional spaces.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-background to-primary/5">
                  <CardContent className="p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Handshake className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">Quality Without Complexity</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Our journey began with a simple belief: quality cabinets shouldn't require confusing processes or sky-high prices. We provide thoughtfully designed solutions with straightforward guidance and personalized service.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Trusted Brands - Highlighted */}
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 overflow-hidden">
                <CardContent className="p-12">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">Premium Brands, Endless Options</h3>
                      <p className="text-lg text-muted-foreground">
                        Partnering with industry leaders to bring you the best
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 rounded-xl bg-background/60 backdrop-blur-sm border border-primary/10">
                      <p className="text-xl font-bold text-foreground mb-1">J&K Cabinetry</p>
                      <p className="text-sm text-muted-foreground">Premium Quality</p>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-background/60 backdrop-blur-sm border border-primary/10">
                      <p className="text-xl font-bold text-foreground mb-1">10% Cabinetry</p>
                      <p className="text-sm text-muted-foreground">Modern Designs</p>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-background/60 backdrop-blur-sm border border-primary/10">
                      <p className="text-xl font-bold text-foreground mb-1">TA Cabinetry</p>
                      <p className="text-sm text-muted-foreground">Custom Solutions</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mt-8 leading-relaxed text-center">
                    Whether you're building new, remodeling, or upgrading—we offer assembled or unassembled options in classic or contemporary styles to match your vision.
                  </p>
                </CardContent>
              </Card>

              {/* Personal Approach - Split Layout */}
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
                    <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-12 border border-accent/20">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 shadow-lg">
                        <Handshake className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">Personalized Service</h3>
                      <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-primary rounded-full mb-6"></div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <Card className="border-0 shadow-xl bg-background">
                    <CardContent className="p-10">
                      <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                        What sets us apart is our commitment to understanding your unique needs. We take time to learn about your space, style preferences, and budget.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        From initial design to final installation, we work closely with your contractor—or directly with you—ensuring every detail fits seamlessly, both functionally and aesthetically.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Showroom CTA - Featured */}
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-background via-primary/5 to-accent/10 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <CardContent className="p-12 relative">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                        <Building2 className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold mb-3">Visit Our Showroom</h3>
                      <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                        Stop by <span className="font-semibold text-foreground">601 Corduroy Rd, Lewis Center, OH 43035</span> and discover more than samples. Meet our team, explore options, and get expert guidance for your project.
                      </p>
                      <Button 
                        size="lg" 
                        onClick={scrollToContact}
                        className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Schedule Your Visit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* About Us Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                <img
                  src={aboutUsImage}
                  alt="About Columbus Cabinets"
                  className="relative w-full h-auto rounded-3xl shadow-2xl object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Closing Statement - Centered Feature */}
              <div className="text-center py-16 px-8 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20">
                <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed max-w-3xl mx-auto">
                  Every great kitchen starts with a solid foundation. That begins with the right cabinets and the right people behind them.
                </p>
                <p className="text-xl text-muted-foreground mt-6 font-medium">
                  We'd be honored to be part of your next project.
                </p>
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

