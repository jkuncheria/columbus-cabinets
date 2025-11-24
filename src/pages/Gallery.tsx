import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

type Category = "All" | "Kitchen" | "Bathroom";

const galleryItems = [
  {
    id: 1,
    title: "Modern White Kitchen Cabinets",
    category: "Kitchen" as Category,
    image: "/Services/KitchenRefacing.jpeg",
    description: "Beautiful white kitchen cabinets with soft-close hinges and full overlay design.",
  },
  {
    id: 2,
    title: "Elegant Bathroom Vanity",
    category: "Bathroom" as Category,
    image: "/Services/CountertopResurfacing.jpg",
    description: "Custom bathroom vanity with modern hardware and ample storage.",
  },
  {
    id: 3,
    title: "Classic Wood Kitchen Cabinets",
    category: "Kitchen" as Category,
    image: "/Services/StandardBathtubResurfacing.jpg",
    description: "Timeless wood kitchen cabinets that add warmth and character.",
  },
  {
    id: 4,
    title: "Contemporary Bathroom Storage",
    category: "Bathroom" as Category,
    image: "/Services/StandardShowerResurfacing.jpg",
    description: "Sleek bathroom cabinets with innovative storage solutions.",
  },
  {
    id: 5,
    title: "Shaker Style Kitchen",
    category: "Kitchen" as Category,
    image: "/Services/LargeShowerResurfacing.jpg",
    description: "Classic shaker-style cabinets in a modern kitchen setting.",
  },
  {
    id: 6,
    title: "Luxury Master Bathroom",
    category: "Bathroom" as Category,
    image: "/Services/GardenTubResurfacing.jpeg",
    description: "High-end bathroom cabinetry with premium finishes.",
  },
  {
    id: 7,
    title: "Transitional Kitchen Design",
    category: "Kitchen" as Category,
    image: "/Services/JacuzziJetTubResurfacing.jpeg",
    description: "Blending traditional and modern elements for a timeless look.",
  },
  {
    id: 8,
    title: "Compact Bathroom Solution",
    category: "Bathroom" as Category,
    image: "/Services/ClafFootTubReglazing.jpg",
    description: "Space-efficient bathroom cabinets maximizing every inch.",
  },
  {
    id: 9,
    title: "Farmhouse Kitchen Cabinets",
    category: "Kitchen" as Category,
    image: "/Services/Tub-EnclosureResurfacing.jpg",
    description: "Rustic farmhouse style with modern functionality.",
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.columbuscabinets.com/" },
    { name: "Gallery", url: "https://www.columbuscabinets.com/gallery" }
  ]);

  const categories: Category[] = ["All", "Kitchen", "Bathroom"];
  
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
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

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
                  size="lg"
                >
                  {category}
                </Button>
              ))}
            </div>

            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {filteredItems.map((item, index) => (
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
                          <Badge className="mb-2 bg-primary text-primary-foreground">{item.category}</Badge>
                          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                          <p className="text-white/90 text-sm mt-1">Click to view</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
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
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{selectedItem.category}</Badge>
                  </div>
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
                      {filteredItems.findIndex(item => item.id === selectedItem.id) + 1} of {filteredItems.length}
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

