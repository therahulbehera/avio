export function Stats() {
  const stats = [
    {
      value: "2,000+",
      label: "Active Content Creators",
    },
    {
      value: "50M+",
      label: "DMs Automated",
    },
    {
      value: "3x",
      label: "Average Conversion Increase",
    },
    {
      value: "99.9%",
      label: "Uptime Guaranteed",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
