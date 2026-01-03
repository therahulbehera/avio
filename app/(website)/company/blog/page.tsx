import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Avio Blog - Tips, Strategies & Updates",
  description: "Read articles about Instagram automation, lead generation, and creator business tips.",
}

const blogPosts = [
  {
    id: 1,
    title: "5 Ways to Convert More Instagram Followers into Paying Customers",
    excerpt:
      "Most creators focus on growing followers, but converting them is where the real money is. Learn the exact strategies we're seeing work in 2025.",
    author: "Sarah Chen",
    date: "January 2, 2025",
    category: "Growth",
    slug: "convert-followers-customers",
  },
  {
    id: 2,
    title: "The Complete Guide to Instagram DM Automation for Creators",
    excerpt:
      "Everything you need to know about automating your DMs without losing the personal touch that makes your audience love you.",
    author: "Alex Rodriguez",
    date: "December 28, 2024",
    category: "Tutorial",
    slug: "dm-automation-guide",
  },
  {
    id: 3,
    title: "How We Saved Creators $50,000 in Missed Revenue Last Month",
    excerpt:
      "See the real-world results our users are getting with Avio automation. Spoiler: it's way more than they expected.",
    author: "Jordan Park",
    date: "December 20, 2024",
    category: "Case Studies",
    slug: "revenue-results",
  },
  {
    id: 4,
    title: "The Psychology of Effective DM Copy That Actually Converts",
    excerpt: "Not all messages are created equal. Learn the psychology behind DM copy that gets people to say yes.",
    author: "Sarah Chen",
    date: "December 15, 2024",
    category: "Strategy",
    slug: "dm-psychology",
  },
  {
    id: 5,
    title: "Building a Creator Business That Doesn't Require You 24/7",
    excerpt:
      "Automation isn't about laziness—it's about building a sustainable business. Here's how creators are scaling without burnout.",
    author: "Alex Rodriguez",
    date: "December 10, 2024",
    category: "Business",
    slug: "sustainable-growth",
  },
  {
    id: 6,
    title: "Instagram DM Limits, Engagement Rates, and Other FAQ",
    excerpt: "Your burning questions about Instagram automation answered. Plus some things you might not know.",
    author: "Jordan Park",
    date: "December 5, 2024",
    category: "FAQ",
    slug: "instagram-faq",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Avio Blog</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Tips, strategies, and stories from creators building sustainable businesses with Instagram automation.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.slice(0, 2).map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">By {post.author}</p>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Recent Posts */}
          <h3 className="text-2xl font-bold text-foreground mb-6">Recent Articles</h3>
          <div className="space-y-4">
            {blogPosts.slice(2).map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-lg border border-border p-6 hover:border-primary transition flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground hover:text-primary transition">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">By {post.author}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-card border-t border-border py-12 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Get the Latest Updates</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for weekly tips on growing your creator business.
          </p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
