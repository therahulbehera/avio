"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for new creators",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Up to 100 automated DMs/month",
        "Basic automation flows",
        "Email support",
        "Basic analytics",
        "Instagram lead form integration",
      ],
    },
    {
      name: "Professional",
      description: "For growing businesses",
      monthlyPrice: 79,
      annualPrice: 790,
      popular: true,
      features: [
        "Up to 1,000 automated DMs/month",
        "Advanced automation flows",
        "Priority support",
        "Advanced analytics & reporting",
        "Lead scoring & qualification",
        "Custom integrations",
        "API access",
      ],
    },
    {
      name: "Enterprise",
      description: "For large operations",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Unlimited automated DMs",
        "Custom automation flows",
        "Dedicated account manager",
        "Enterprise analytics",
        "White-label options",
        "Custom integrations",
        "Priority support 24/7",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">Start free, upgrade when you're ready. No surprises.</p>

          {/* Billing Toggle */}
          <div className="inline-flex gap-4 p-2 bg-card rounded-lg border border-border">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-md font-medium transition ${
                billingPeriod === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-2 rounded-md font-medium transition relative ${
                billingPeriod === "annual"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-primary bg-secondary px-2 py-1 rounded whitespace-nowrap">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border transition-all ${
                plan.popular
                  ? "border-primary bg-card shadow-xl scale-105 md:scale-100 md:shadow-2xl"
                  : "border-border bg-card hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                {/* Pricing */}
                <div className="mb-8">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="text-4xl font-bold text-foreground">
                        ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        per {billingPeriod === "monthly" ? "month" : "year"}
                      </p>
                    </>
                  ) : (
                    <div className="text-3xl font-bold text-foreground">Custom</div>
                  )}
                </div>

                <Button
                  className={`w-full mb-8 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          All plans include 14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  )
}
