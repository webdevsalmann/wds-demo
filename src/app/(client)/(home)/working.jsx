import Section from "@/components/ui/section";
import { CreditCard, MapPin, Utensils } from "lucide-react";

const workings = [
  {
    icon: <Utensils className="size-8" strokeWidth={2} />,
    title: "Choose Your Meal",
    description: "Browse our diverse menu of delicious dishes.",
  },
  {
    icon: <CreditCard className="size-8" strokeWidth={2} />,
    title: "Place Your Order",
    description: "Select your location and place your order in a few clicks.",
  },
  {
    icon: <MapPin className="size-8" strokeWidth={2} />,
    title: "Track Your Delivery",
    description: "Watch in real-time as our drones deliver your food."
  },
]

export default function Working() {
  return (
    <Section sectionClassName="bg-primary/5">
      <h2><span className="text-primary">| </span> How It Works <span className="text-primary"> |</span></h2>

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
