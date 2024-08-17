import FadeUp from "@/components/animations/FadeUp";
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
    <Section sectionClassName="bg-secondary" id="working">
      <FadeUp>
        <h2>How It <span className="text-primary"> Works</span></h2>
      </FadeUp>

      <div className="mt-block grid gap-base md:grid-cols-3">
        {/* Card */}
        {workings.map((item, i) => (
          <FadeUp
            transition={{
              type: "spring",
              delay: 0.3 * i
            }}
            key={i + "WorksCard"}>
            <div className="relative px-base py-block w-full bg-background border border-black/20 hover:bg-primary hover:border-primary rounded-md overflow-hidden group transition-all" >
              <div className="text-center flex-center flex-col group-hover:text-primary-foreground transition-all">
                <h3 className="text-primary group-hover:text-primary-foreground transition-all">{item.icon}</h3>
                <h4 className="py-base">{item.title}</h4>
                <p className="leading-6 group-hover:text-primary-foreground transition-all">{item.description}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  )
}
