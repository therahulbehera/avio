export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Connect Instagram",
      description: "Link your Instagram business account to Avio in one click. Secure and simple.",
    },
    {
      number: "2",
      title: "Set Up Automation",
      description: "Create custom message flows that respond to DM inquiries automatically with your brand voice.",
    },
    {
      number: "3",
      title: "Qualify & Nurture",
      description: "Let Avio identify hot leads and send follow-ups at the perfect timing to maximize conversions.",
    },
    {
      number: "4",
      title: "Watch Sales Grow",
      description: "Track everything in real-time and optimize based on what works. See your ROI immediately.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get Started in 4 Simple Steps</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From setup to sales, Avio makes it effortless
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent/50"></div>
              )}

              <div className="relative flex flex-col gap-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
