import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/structuredData";

const Index = () => {
  const structuredData = [
    getLocalBusinessSchema(),
    getWebSiteSchema(),
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Columbus Cabinets | Custom Kitchen & Bathroom Cabinets | Lewis Center, OH"
        description="Elevate your cabinetry, elevate your life. Custom bathroom and kitchen cabinets that blend beauty, functionality, and durability. Serving the greater Columbus area from Lewis Center, Ohio."
        keywords="kitchen cabinets Columbus, bathroom cabinets Ohio, custom cabinets Lewis Center, cabinet design, cabinet installation, J&K Cabinetry, TA Cabinetry, Columbus cabinetry"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <ContactForm />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
