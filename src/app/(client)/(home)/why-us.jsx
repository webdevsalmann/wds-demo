import Section from '@/components/ui/section'
import React from 'react'
import { CreditCard, MapPin, Utensils } from "lucide-react";


const workings = [
  {
    icon: <Utensils className="size-8" strokeWidth={2} />,
    title: "Speed and Efficiency",
    description: "Get your food faster than traditional delivery services.",
  },
  {
    icon: <CreditCard className="size-8" strokeWidth={2} />,
    title: "Freshness Guaranteed",
    description: "Our drones ensure minimal handling for maximum freshness.",
  },
  {
    icon: <MapPin className="size-8" strokeWidth={2} />,
    title: "Eco-Friendly",
    description: "Zero emissions, reducing your carbon footprint."
  },
]

export default function WhyUs() {
  return (
    <Section sectionClassName="bg-secondary">
      <h2><span className="text-primary">| </span> Why Choose Us <span className="text-primary"> |</span></h2>

      <div className="mt-block grid gap-base md:grid-cols-3">
        {/* Card */}
        {workings.map((item, i) => (
          <div className="relative px-base py-block w-full border hover:border-primary rounded-md overflow-hidden group transition-all" key={i + "WorksCard"}>
            <div className="text-center flex-center flex-col">
              <h3 className="text-primary transition-all">{item.icon}</h3>
              <h4 className="py-base">{item.title}</h4>
              <p className="leading-6">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
