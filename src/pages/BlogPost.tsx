import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

// Blog posts data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Creative Cabinet Solutions for Small Kitchens",
    excerpt: "Maximize your small kitchen space with innovative cabinet designs and smart storage solutions. Learn how to make every inch count.",
    category: "Design Tips",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/gallery/IMG_8260.jpg",
    slug: "creative-cabinet-solutions-small-kitchens",
    content: `
      <div class="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-12 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border-l-4 border-primary">
        Small kitchens don't have to mean limited storage or cramped spaces. With the right cabinet solutions, you can transform even the tiniest kitchen into a functional, beautiful space that works for your lifestyle.
      </div>

      <h2 class="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6 pb-3 border-b-2 border-primary/20">1. Maximize Vertical Space</h2>
      <p class="text-lg leading-relaxed mb-4">When floor space is limited, think <strong class="text-foreground">vertically</strong>. Tall cabinets that extend to the ceiling are one of the best ways to maximize storage in a small kitchen. These floor-to-ceiling cabinets provide ample space for items you don't use daily, while keeping your countertops clear and uncluttered.</p>
      
      <div class="bg-muted/50 p-6 rounded-lg my-6 border-l-4 border-accent">
        <p class="font-semibold text-foreground mb-2">💡 Pro Tip:</p>
        <p class="text-muted-foreground">Consider installing cabinets that go all the way up to your 9-foot ceiling. The top shelves can store seasonal items, serving platters, or small appliances you only use occasionally. Use a step stool for easy access, and you'll be amazed at how much extra storage you gain.</p>
      </div>

      <h2 class="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6 pb-3 border-b-2 border-primary/20">2. Pull-Out Shelves and Drawers</h2>
      <p class="text-lg leading-relaxed mb-4">Deep cabinets can become black holes where items get lost. Pull-out shelves and drawers solve this problem by bringing everything to you. Instead of reaching into the dark depths of a cabinet, you can simply pull out the shelf and see everything at once.</p>

      <div class="bg-primary/5 p-6 rounded-lg my-6">
        <p class="font-semibold text-foreground mb-4 text-lg">These are especially useful for:</p>
        <ul class="space-y-3 list-none">
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Pantry items and canned goods</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Spices and baking supplies</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Small appliances like blenders or mixers</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Pots and pans in lower cabinets</span>
          </li>
        </ul>
      </div>

      <h2 class="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6 pb-3 border-b-2 border-primary/20">3. Corner Cabinet Solutions</h2>
      <p class="text-lg leading-relaxed mb-4">Corner cabinets are notorious for wasted space, but they don't have to be. Lazy Susans are classic solutions, but modern options like blind corner pull-outs or magic corner systems are even more efficient. These systems use rotating or sliding mechanisms to make every inch of your corner cabinet accessible.</p>

      <div class="bg-accent/5 p-6 rounded-lg my-6 border-l-4 border-accent">
        <p class="font-semibold text-foreground mb-2">💰 Budget-Friendly Option:</p>
        <p class="text-muted-foreground">For a more budget-friendly option, consider installing a simple corner shelf system that rotates, allowing you to access items from both sides of the corner.</p>
      </div>

      <h2 class="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6 pb-3 border-b-2 border-primary/20">4. Open Shelving for Visual Space</h2>
      <p class="text-lg leading-relaxed mb-4">While closed cabinets maximize storage, strategic open shelving can make a small kitchen feel larger. Open shelves create visual breathing room and can make the space feel less cramped.</p>

      <div class="bg-primary/5 p-6 rounded-lg my-6">
        <p class="font-semibold text-foreground mb-4 text-lg">Use them for:</p>
        <ul class="space-y-3 list-none">
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Frequently used items like plates and bowls</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Decorative pieces that add personality</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Cookbooks or small plants</span>
          </li>
        </ul>
      </div>

      <p class="text-lg leading-relaxed mb-6"><strong class="text-foreground">Remember:</strong> Keep open shelves organized and minimal—clutter defeats the purpose. Consider mixing open shelves with closed cabinets for the best of both worlds.</p>

      <h2 class="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6 pb-3 border-b-2 border-primary/20">5. Under-Cabinet Storage</h2>
      <p class="text-lg leading-relaxed mb-4">Don't forget the space underneath your upper cabinets. This often-overlooked area is perfect for maximizing your kitchen's functionality.</p>

      <div class="bg-primary/5 p-6 rounded-lg my-6">
        <p class="font-semibold text-foreground mb-4 text-lg">Perfect for:</p>
        <ul class="space-y-3 list-none">
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Magnetic knife strips</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Under-cabinet lighting (which also makes the space feel larger)</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Hanging baskets for fruits and vegetables</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Paper towel holders</span>
          </li>
        </ul>
      </div>

      <h2 class="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6 pb-3 border-b-2 border-primary/20">6. Drawer Organizers and Dividers</h2>
      <p class="text-lg leading-relaxed mb-4">Well-organized drawers can hold significantly more than messy ones. Invest in drawer organizers to maximize every inch of space.</p>

      <div class="bg-primary/5 p-6 rounded-lg my-6">
        <p class="font-semibold text-foreground mb-4 text-lg">Ideal for organizing:</p>
        <ul class="space-y-3 list-none">
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Utensils and silverware</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Cutlery and kitchen tools</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Spices and small containers</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Baking sheets and cutting boards (vertical dividers)</span>
          </li>
        </ul>
      </div>

      <p class="text-lg leading-relaxed mb-6">Custom drawer dividers can be built to fit your specific needs, ensuring every inch of space is used efficiently.</p>

      <h2 class="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6 pb-3 border-b-2 border-primary/20">7. Appliance Garages</h2>
      <p class="text-lg leading-relaxed mb-4">Small appliances can quickly clutter your countertops. An appliance garage—a cabinet with a roll-up or tambour door—keeps appliances accessible but hidden.</p>

      <div class="bg-primary/5 p-6 rounded-lg my-6">
        <p class="font-semibold text-foreground mb-4 text-lg">Perfect for storing:</p>
        <ul class="space-y-3 list-none">
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Toasters and coffee makers</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Stand mixers</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-primary font-bold text-xl mt-1">•</span>
            <span class="text-muted-foreground text-lg">Blenders and food processors</span>
          </li>
        </ul>
      </div>

      <div class="bg-accent/5 p-6 rounded-lg my-6 border-l-4 border-accent">
        <p class="font-semibold text-foreground mb-2">⚡ Bonus Feature:</p>
        <p class="text-muted-foreground">Some appliance garages even include built-in outlets, so you can use appliances without moving them.</p>
      </div>

      <h2 class="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6 pb-3 border-b-2 border-primary/20">8. Narrow Pull-Out Pantries</h2>
      <p class="text-lg leading-relaxed mb-6">If you have a narrow space between appliances or at the end of a cabinet run, consider installing a narrow pull-out pantry. These slim cabinets (often just 6-8 inches wide) can hold a surprising amount of food storage, spices, or cleaning supplies.</p>

      <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl my-12 border-2 border-primary/20">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Essential Tips for Small Kitchen Success</h2>
        <p class="text-lg leading-relaxed mb-6">Beyond specific cabinet solutions, here are some general tips for making the most of your small kitchen:</p>
        <ul class="space-y-4 list-none">
          <li class="flex items-start gap-4">
            <span class="text-primary font-bold text-2xl mt-1">✓</span>
            <div>
              <strong class="text-foreground text-lg">Choose light colors:</strong>
              <p class="text-muted-foreground">Light cabinet colors reflect light and make spaces feel larger</p>
            </div>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-primary font-bold text-2xl mt-1">✓</span>
            <div>
              <strong class="text-foreground text-lg">Use glass-front cabinets:</strong>
              <p class="text-muted-foreground">Glass doors create visual depth and make the space feel less closed in</p>
            </div>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-primary font-bold text-2xl mt-1">✓</span>
            <div>
              <strong class="text-foreground text-lg">Keep it organized:</strong>
              <p class="text-muted-foreground">Regular decluttering ensures you're using your storage efficiently</p>
            </div>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-primary font-bold text-2xl mt-1">✓</span>
            <div>
              <strong class="text-foreground text-lg">Think multi-purpose:</strong>
              <p class="text-muted-foreground">Every cabinet should serve multiple functions when possible</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 class="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6 pb-3 border-b-2 border-primary/20">Working with Columbus Cabinets</h2>
      <p class="text-lg leading-relaxed mb-4">At Columbus Cabinets, we specialize in creating custom solutions for kitchens of all sizes. Our design experts can help you maximize every inch of your small kitchen space with thoughtful cabinet designs and smart storage solutions.</p>

      <p class="text-lg leading-relaxed mb-6">Whether you're working with a galley kitchen, a studio apartment, or just want to make better use of your existing space, we're here to help. Visit our showroom at <strong class="text-foreground">601 Corduroy Rd, Lewis Center, OH</strong> to see our small kitchen solutions in person, or <a href="/contact" class="text-primary hover:underline font-semibold">contact us</a> for a free consultation.</p>

      <div class="bg-primary/5 p-6 rounded-lg my-8 border-l-4 border-primary">
        <p class="text-lg font-semibold text-foreground italic">Remember: a small kitchen doesn't mean limited possibilities. With the right cabinet solutions, you can create a space that's both functional and beautiful.</p>
      </div>
    `,
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.columbuscabinets.com/" },
    { name: "Blog", url: "https://www.columbuscabinets.com/blog" },
    { name: post.title, url: `https://www.columbuscabinets.com/blog/${post.slug}` },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${post.title} | Columbus Cabinets Blog`}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, kitchen cabinets, small kitchen solutions, cabinet storage, ${post.title.toLowerCase()}`}
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button
                asChild
                variant="ghost"
                className="mb-6 hover:bg-primary/10"
              >
                <Link to="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </Button>

              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {post.readTime}
                </div>
              </div>

              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div
                    className="max-w-none [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-foreground
                      [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:pb-3 [&_h2]:border-b-2 [&_h2]:border-primary/20
                      [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-lg
                      [&_strong]:text-foreground [&_strong]:font-semibold
                      [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline [&_a]:font-semibold
                      [&_ul]:list-none [&_ul]:space-y-3
                      [&_li]:flex [&_li]:items-start [&_li]:gap-3"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </CardContent>
              </Card>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-8 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Ready to Transform Your Kitchen?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Let Columbus Cabinets help you create the perfect kitchen solution for your space.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link to="/contact">Get Free Consultation</Link>
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <Link to="/services">View Our Services</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;

