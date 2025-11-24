import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

const blogPosts = [
  {
    id: 1,
    title: "Creative Cabinet Solutions for Small Kitchens",
    excerpt: "Maximize your small kitchen space with innovative cabinet designs and smart storage solutions. Learn how to make every inch count.",
    category: "Design Tips",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/Services/KitchenRefacing.jpeg",
    slug: "creative-cabinet-solutions-small-kitchens",
  },
  {
    id: 2,
    title: "MDF vs. Plywood vs. Solid Wood: Choosing the Right Cabinet Material",
    excerpt: "Understanding the differences between cabinet materials can help you make the best choice for your budget and lifestyle. We break down the pros and cons.",
    category: "Materials Guide",
    date: "March 8, 2024",
    readTime: "7 min read",
    image: "/Services/CountertopResurfacing.jpg",
    slug: "mdf-plywood-solid-wood-cabinet-materials",
  },
  {
    id: 3,
    title: "Top 10 Kitchen Cabinet Trends for 2024",
    excerpt: "Discover the latest trends in kitchen cabinetry, from bold colors to minimalist designs. See what's hot in Central Ohio kitchens this year.",
    category: "Trends",
    date: "March 1, 2024",
    readTime: "6 min read",
    image: "/Services/StandardBathtubResurfacing.jpg",
    slug: "top-10-kitchen-cabinet-trends-2024",
  },
  {
    id: 4,
    title: "How to Choose the Perfect Cabinet Hardware",
    excerpt: "Hardware can make or break your cabinet design. Learn how to select the right knobs, pulls, and hinges that complement your style.",
    category: "Design Tips",
    date: "February 22, 2024",
    readTime: "4 min read",
    image: "/Services/StandardShowerResurfacing.jpg",
    slug: "choose-perfect-cabinet-hardware",
  },
  {
    id: 5,
    title: "Budget-Friendly Kitchen Remodeling Ideas",
    excerpt: "Transform your kitchen without breaking the bank. Discover cost-effective strategies for updating your cabinets and maximizing your remodeling budget.",
    category: "Budget Tips",
    date: "February 15, 2024",
    readTime: "8 min read",
    image: "/Services/LargeShowerResurfacing.jpg",
    slug: "budget-friendly-kitchen-remodeling-ideas",
  },
  {
    id: 6,
    title: "The Complete Guide to Cabinet Installation",
    excerpt: "Everything you need to know about cabinet installation, from preparation to final touches. A comprehensive guide for homeowners and contractors.",
    category: "Installation",
    date: "February 8, 2024",
    readTime: "10 min read",
    image: "/Services/GardenTubResurfacing.jpeg",
    slug: "complete-guide-cabinet-installation",
  },
];

const Blog = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.columbuscabinets.com/" },
    { name: "Blog", url: "https://www.columbuscabinets.com/blog" }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Blog | Kitchen & Bathroom Cabinet Tips & Trends | Columbus Cabinets"
        description="Expert tips, trends, and guides for kitchen and bathroom cabinets. Learn about design, materials, installation, and more from Columbus Cabinets."
        keywords="kitchen cabinet blog, bathroom cabinet tips, cabinet design ideas, cabinet trends, cabinet installation guide, Columbus cabinets blog"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-primary">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Expert tips, trends, and insights to help you make the best decisions for your kitchen and bathroom cabinets
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-foreground/10 hover:border-primary/30 flex flex-col animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>

                    <Button
                      asChild
                      variant="ghost"
                      className="w-fit group/btn hover:bg-primary/10"
                    >
                      <Link to={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-2xl mx-auto mt-16">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8 md:p-12 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Subscribe to our newsletter for the latest cabinet trends, tips, and exclusive offers
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg border-2 border-foreground/20 focus:border-primary focus:outline-none bg-background"
                    />
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Subscribe
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

export default Blog;

