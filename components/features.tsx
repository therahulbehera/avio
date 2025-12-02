import { MessageCircle, Zap, Lock, BarChart3 } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "Smart DM Automation",
      description:
        "Automatically respond to Instagram DM inquiries with customizable flows that feel personal, not robotic.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description:
        "Connect your Instagram account and set up automation in minutes. No coding required, just simple steps.",
    },
    {
      icon: Lock,
      title: "Lead Qualification",
      description:
        "Automatically identify and segment leads, then nurture them with targeted follow-ups that drive conversions.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Track every interaction, conversion, and sale directly from your dashboard. Data-driven insights at a glance.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Everything You Need to Convert Leads</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for content creators who want to grow their business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
