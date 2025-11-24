import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

// Cabinet images from the public/cabinets folder
const cabinetImages = [
  "b5_Pure-1221x2048.jpeg",
  "b6_Pebble-1221x2048.jpeg",
  "b7_Naval-1221x2048.jpeg",
  "b8_Butterscotch-1221x2048.jpeg",
  "e1_Dove.jpeg",
  "e2_Charcoal.jpeg",
  "e3_Sage-1221x2048.jpeg",
  "h3_Chestnut.jpeg",
  "h8_Hazel.jpeg",
  "h9_Pearl_Glazed.jpeg",
  "s1-Java-Coffee.jpg",
  "s2-Almond.jpg",
  "s5-Castle-Grey-1.jpg",
  "s5-Castle-Grey.jpg",
  "s8-White-1.png",
  "s8-White.png",
];

// Helper function to format filename (remove extension and format nicely)
const formatCabinetName = (filename: string): string => {
  // Remove file extension
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  // Replace underscores and hyphens with spaces
  let formatted = nameWithoutExt.replace(/[_-]/g, " ");
  // Remove dimensions (like "1221x2048")
  formatted = formatted.replace(/\d+x\d+/g, "").trim();
  // Clean up multiple spaces
  formatted = formatted.replace(/\s+/g, " ");
  // Capitalize first letter of each word
  return formatted
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const Cabinets = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.columbuscabinets.com/" },
    { name: "Cabinets", url: "https://www.columbuscabinets.com/cabinets" },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Cabinet Styles & Finishes | Columbus Cabinets | Browse Our Collection"
        description="Browse our extensive collection of cabinet styles, finishes, and colors. From classic to contemporary, find the perfect cabinets for your kitchen or bathroom."
        keywords="cabinet styles, cabinet finishes, cabinet colors, kitchen cabinet options, bathroom cabinet options, cabinet collection, Columbus cabinets"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-primary">Cabinet Collection</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our wide range of cabinet styles, finishes, and colors to find the perfect match for your home
              </p>
            </div>
          </div>
        </section>

        {/* Cabinets Grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cabinetImages.map((image, index) => {
                const cabinetName = formatCabinetName(image);
                return (
                  <Card
                    key={image}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-foreground/10 hover:border-primary/30 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative min-h-[300px] bg-muted flex items-center justify-center p-4">
                      <img
                        src={`/cabinets/${image}`}
                        alt={cabinetName}
                        className="w-full h-auto max-h-[500px] object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-foreground text-sm md:text-base">
                        {cabinetName}
                      </h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cabinets;

