import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

// Helper function to format image filename into a title
const formatImageTitle = (filename: string): string => {
  // Remove file extension
  let title = filename.replace(/\.[^/.]+$/, "");
  // Remove dimensions (like "300x200", "194x300")
  title = title.replace(/-\d+x\d+/g, "");
  // Replace hyphens and underscores with spaces
  title = title.replace(/[_-]/g, " ");
  // Remove common prefixes
  title = title.replace(/^(IMG|JK Gallery|Untitled HDR)\s*/i, "");
  // Clean up multiple spaces
  title = title.replace(/\s+/g, " ").trim();
  // Capitalize first letter of each word
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const galleryImages = [
  "IMG_8260.jpg",
  "JK-Gallery-S1-1-300x217.jpg",
  "JK-Gallery-S8-1-1-300x200.jpg",
  "Untitled_HDR15-194x300.jpg",
  "Untitled_HDR18-300x200.jpg",
  "Untitled_HDR19-300x200.jpg",
  "Untitled_HDR22-300x216.jpg",
  "Untitled_HDR35-300x200.jpg",
  "Untitled_HDR38-200x300.jpg",
];

const galleryItems = galleryImages.map((image, index) => {
  const title = formatImageTitle(image);
  return {
    id: index + 1,
    title: title || `Cabinet Installation ${index + 1}`,
    image: `/gallery/${image}`,
    description: `Beautiful custom cabinet installation showcasing ${title.toLowerCase() || "our quality craftsmanship"}.`,
  };
});

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.columbuscabinets.com/" },
    { name: "Gallery", url: "https://www.columbuscabinets.com/gallery" }
  ]);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedItem(galleryItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedItem(galleryItems[prevIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Gallery | Kitchen & Bathroom Cabinet Showcase | Columbus Cabinets"
        description="Browse our gallery of beautiful kitchen and bathroom cabinet installations. See examples of our custom cabinetry work throughout Central Ohio."
        keywords="kitchen cabinet gallery, bathroom cabinet gallery, cabinet installation photos, Columbus cabinets gallery, custom cabinets showcase"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-primary">Gallery</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our beautiful kitchen and bathroom cabinet installations throughout Central Ohio
              </p>
            </div>

            {/* Inspiration Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-primary/5">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
                    Inspiration Around Every Corner
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Step into our kitchen cabinet gallery and envision the possibilities for your dream kitchen. From contemporary to classic, our custom-designed cabinets bring both beauty and functionality to the heart of your home. Whether you're seeking sleek finishes or intricate detailing, our expertly crafted kitchen cabinets are tailored to fit your unique style and needs.
                    </p>
                    <p>
                      Our gallery features a wide range of cabinet designs, layouts, materials, and color palettes to help spark creativity for your next kitchen project. Whether you're updating a compact kitchen in a city condo or designing a spacious open-concept layout for a new home, you'll find real-life examples of how form and function come together beautifully. Explore shaker-style doors, modern flat panels, glass fronts, deep drawers, built-in organizers, and more.
                    </p>
                    <p>
                      At Columbus Cabinets, we believe that every kitchen should reflect the people who use it. That's why we offer customizable solutions that combine aesthetic appeal with everyday practicality. Our cabinet lines include options for soft-close hinges, space-saving storage features, and finishes that stand the test of time — all while staying within your budget.
                    </p>
                    <p className="text-center pt-4">
                      <span className="font-semibold text-foreground">Visit our showroom in Lewis Center, Ohio</span> to see these designs in person, explore samples, and talk to our experienced team about how to bring your vision to life. Your dream kitchen starts here — with quality craftsmanship, personalized service, and inspiration around every corner.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {galleryItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                          <p className="text-white/90 text-sm mt-1">Click to view</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-5xl p-0 gap-0">
            {selectedItem && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
                
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 bg-background">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">{selectedItem.title}</h3>
                  <p className="text-muted-foreground mb-6">{selectedItem.description}</p>

                  <div className="flex gap-3 justify-between items-center pt-4 border-t">
                    <Button
                      onClick={handlePrev}
                      variant="outline"
                      size="lg"
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Previous
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      {galleryItems.findIndex(item => item.id === selectedItem.id) + 1} of {galleryItems.length}
                    </span>
                    <Button
                      onClick={handleNext}
                      variant="outline"
                      size="lg"
                      className="flex items-center gap-2"
                    >
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;

