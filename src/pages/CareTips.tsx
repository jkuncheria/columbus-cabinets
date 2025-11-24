import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sparkles, Droplet, Shield, Ban, CheckCircle2, AlertCircle, Clock, Wrench, Home } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

const CareTips = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.columbuscabinets.com/" },
    { name: "Care Tips", url: "https://www.columbuscabinets.com/care-tips" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Cabinet Care & Maintenance Tips | Columbus Cabinets | Kitchen & Bathroom Cabinet Care"
        description="Complete care and maintenance guide for your kitchen and bathroom cabinets. Learn proper cleaning methods, approved cleaners, and products to avoid. Keep your Columbus Cabinets looking beautiful for years."
        keywords="cabinet care tips, kitchen cabinet maintenance, bathroom cabinet cleaning, cabinet care guide, cabinet maintenance instructions, wood cabinet care, cabinet cleaning tips"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <Home className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Columbus Cabinets
              </h1>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Cabinet Care & Maintenance Guide
              </h2>
              <p className="text-lg text-muted-foreground">
                Thank you for choosing Columbus Cabinets. Your custom cabinets are built to last, but proper care and maintenance will keep them looking beautiful and functioning perfectly for years to come.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Daily Cleaning */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Daily Cleaning</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Wipe down cabinet surfaces daily with a soft, damp microfiber cloth to remove dust, fingerprints, and cooking residue.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Dry immediately with a clean, dry cloth to prevent water spots and maintain the finish.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Clean cabinet handles and hardware regularly with a soft cloth to prevent buildup of oils and grime.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Weekly Deep Cleaning */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Weekly Deep Cleaning</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Perform a thorough cleaning once a week to remove accumulated grease, food splatters, and grime.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Clean inside cabinets regularly, removing items and wiping down shelves and interior surfaces.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Check and clean cabinet corners and edges where dirt and grease tend to accumulate.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Cleaning Instructions */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Cleaning Instructions</h2>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">Safe Cleaners for Cabinets</h3>
                <p className="text-muted-foreground mb-6">
                  These products are gentle and safe for your cabinet finishes:
                </p>

                <div className="overflow-x-auto mb-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Type</TableHead>
                        <TableHead className="font-semibold">Approved Examples</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Mild Dish Soap</TableCell>
                        <TableCell>Dawn, Palmolive, Method (diluted in warm water)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Cabinet-Specific Cleaners</TableCell>
                        <TableCell>Weiman Cabinet Cleaner, Murphy Oil Soap, Method Wood Cleaner</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Vinegar/Water Solution</TableCell>
                        <TableCell>50/50 mix for removing grease and grime (test on hidden area first)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Soft Cleaning Tools</TableCell>
                        <TableCell>Microfiber cloths, soft sponges, lint-free rags</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-muted-foreground italic">
                    <strong className="text-foreground">Tip:</strong> Always test any cleaner on a small, hidden area first. Work in the direction of the wood grain when cleaning to avoid streaks.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Products & Tools to Avoid */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-950/30 rounded-lg flex items-center justify-center">
                    <Ban className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Products & Tools to Avoid</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  These products will damage, dull, or strip your cabinet finish:
                </p>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Do NOT Use</TableHead>
                        <TableHead className="font-semibold">Reason</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Abrasive Cleaners (Comet, Ajax, Bar Keepers Friend)</TableCell>
                        <TableCell>Scratches and dulls the finish</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Bleach or Ammonia-Based Cleaners</TableCell>
                        <TableCell>Chemically damages wood and finish</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Furniture Polish or Wax</TableCell>
                        <TableCell>Creates buildup and attracts dust</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Magic Eraser or Scouring Pads</TableCell>
                        <TableCell>Micro-abrasive, permanently damages finish</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Steel Wool or Metal Scrubbers</TableCell>
                        <TableCell>Scratches and gouges wood surfaces</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Harsh Degreasers</TableCell>
                        <TableCell>Strips protective finish and damages wood</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Extra Care Tips */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Additional Care Tips</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Use cabinet liners or shelf paper to protect interior surfaces from spills and scratches.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Avoid hanging wet dish towels or cloths on cabinet doors, as moisture can damage the finish.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Keep cabinets away from direct heat sources like ovens or heating vents to prevent warping.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Clean up spills immediately, especially acidic substances like vinegar or lemon juice.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Check and tighten hardware (handles, hinges) periodically to ensure proper function.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Use soft-close mechanisms properly—don't slam doors or drawers.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Hardware Maintenance */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Hardware Maintenance</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Clean hardware regularly with a soft cloth and mild soap solution to prevent tarnishing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Tighten loose screws or handles promptly to prevent further damage.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Lubricate drawer slides and hinges annually with a silicone-based lubricant if needed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Check soft-close mechanisms regularly and adjust if doors or drawers aren't closing properly.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Warranty Protection */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Warranty Protection</h2>
                    <p className="text-muted-foreground">
                      Proper cleaning and care are required to maintain warranty coverage. Damage caused by abrasives, harsh chemicals, improper cleaning methods, or neglect is not covered under warranty. Always follow these care instructions to protect your investment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Contact CTA */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Have questions about caring for your cabinets? Need replacement hardware or parts? Our team is here to help keep your cabinets looking and functioning beautifully.
                </p>
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                  <a href="tel:6145551234">
                    Contact Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Footer Message */}
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-2">Thank you for choosing Columbus Cabinets.</p>
              <p className="text-lg font-semibold text-foreground">Quality • Craftsmanship • Care</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareTips;
