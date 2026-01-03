import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Target, Zap } from "lucide-react"

export const metadata = {
  title: "About Avio - Our Story & Mission",
  description:
    "Discover how Avio is empowering content creators to build sustainable businesses through Instagram automation.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Empowering Creators to Build Real Businesses
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Avio was born from a simple observation: content creators are leaving money on the table because they lack
            the tools to nurture leads effectively. We're here to change that.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-card py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2024, Avio started when our founder noticed how many creators were losing potential customers
                because they couldn't manually respond to every DM. Most existing solutions were either too expensive,
                too complicated, or both.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We decided to build something different—a tool designed specifically for creators, by people who
                understand the creator economy. Clean interface, simple automation, affordable pricing, and results that
                actually matter.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 h-80 flex items-center justify-center">
              <p className="text-center text-muted-foreground text-sm">Company Story Illustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Creator-First */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Creator-First</h3>
              <p className="text-muted-foreground">
                Everything we build starts with the creator's perspective. Your success is our success.
              </p>
            </div>

            {/* Simplicity */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Simplicity</h3>
              <p className="text-muted-foreground">
                No bloated features. No complicated setup. Just the tools you need to convert leads.
              </p>
            </div>

            {/* Results */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Results</h3>
              <p className="text-muted-foreground">
                We obsess over metrics that matter—leads converted, revenue generated, creators supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Level Up Your Business?</h2>
          <p className="text-muted-foreground mb-8 text-balance">
            Join thousands of creators who are already converting more leads with Avio.
          </p>
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
