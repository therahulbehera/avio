import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Users } from "lucide-react"

export const metadata = {
  title: "Careers at Avio - Join Our Team",
  description: "Join the Avio team and help us empower creators to build better businesses.",
}

const openPositions = [
  {
    id: 1,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description:
      "Lead product strategy for our Instagram automation platform. Work closely with creators to build features they love.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build scalable backend infrastructure for millions of automated messages. Work with Node.js, PostgreSQL, and cloud services.",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build features across our web app. Work with React, TypeScript, and Next.js to create beautiful, performant interfaces.",
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Customer",
    location: "Remote",
    type: "Full-time",
    description:
      "Be the voice of our creators. Help them succeed with Avio through onboarding, support, and strategic guidance.",
  },
  {
    id: 5,
    title: "Content Writer",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description:
      "Create content that educates and inspires creators. Write blog posts, guides, and educational materials.",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Help Us Empower Creators</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Join a team of builders, makers, and creator advocates working to change how creators monetize their
            audience.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Work at Avio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Amazing Team</h3>
              <p className="text-muted-foreground">
                Work alongside passionate builders who are genuinely excited about empowering creators.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <Briefcase className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Work</h3>
              <p className="text-muted-foreground">
                We're 100% remote. Work from anywhere, with flexible hours that respect your life.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Real Impact</h3>
              <p className="text-muted-foreground">
                Every day you'll work on features that directly impact creators' ability to grow their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-card py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-background rounded-lg border border-border p-6 hover:border-primary transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{position.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin size={14} /> {position.location}
                      </span>
                      <span className="text-xs text-muted-foreground">{position.type}</span>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Positions Fit? */}
      <section className="py-12 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Don't See a Role That Fits?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented people. Send us your resume and tell us what you'd like to build with us.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Send Your Resume</Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Questions?</h2>
          <p className="text-muted-foreground mb-8 text-balance">
            Reach out to our team at careers@avio.com. We'd love to hear from you.
          </p>
          <Link href="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-transparent">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
