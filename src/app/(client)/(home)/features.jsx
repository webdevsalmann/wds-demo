import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/ui/section";
import { CigaretteOff, Map, MapPin, PackageCheck, SlidersVertical, Thermometer, Video, Zap } from "lucide-react";
import Image from "next/image";

const featurePoints = [
  {
    icon: <Zap className="size-6 group-hover:text-primary shrink-0" />,
    title: "Lightning-Speed Service",
  },
  {
    icon: <MapPin className="size-6 group-hover:text-primary shrink-0" />,
    title: "Real-Time Tracking",
  },
  {
    icon: <Map className="size-6 group-hover:text-primary shrink-0" />,
    title: "Precision Navigation",
  },
  {
    icon: <Video className="size-6 group-hover:text-primary shrink-0" />,
    title: "Easy Reordering",
  },
  {
    icon: <CigaretteOff className="size-6 group-hover:text-primary shrink-0" />,
    title: "Zero Emissions",
  },
  {
    icon: <SlidersVertical className="size-6 group-hover:text-primary shrink-0" />,
    title: "Minimal Handling",
  },
  {
    icon: <Thermometer className="size-6 group-hover:text-primary shrink-0" />,
    title: "Temperature-Controlled Compartments",
  },
  {
    icon: <PackageCheck className="size-6 group-hover:text-primary shrink-0" />,
    title: "Flexible Delivery Options"
  },
]

export default function Features() {
  return (
    <Section sectionClassName="md:-mt-block bg-[url('/images/bg/circle-left.svg')] md:bg-[url('/images/bg/circle-left-md.svg')] bg-no-repeat bg-center bg-cover" id="features">
      <div className="grid md:gap-block md:grid-cols-2">
        <div>
          <FadeUp>
            <h2><span className="text-primary">Unmatched </span>Delivery Experience</h2>
          </FadeUp>
        </div>
        <div>
          <FadeUp>
            <p>Experience the future of food delivery with our ultra-fast drones, designed to bring your meals to you in record time. Say goodbye to long waits and hello to a seamless, swift service that gets your food to your door in minutes.</p>
          </FadeUp>
          <FadeUp>
            <p className="mt-base">Our advanced technology ensures that your food arrives fresh and perfectly preserved, with minimal handling and maximum precision. From real-time tracking to temperature-controlled compartments, every detail is optimized for your satisfaction.</p>
          </FadeUp>
        </div>
      </div>

      <div className="mt-block grid sm:grid-cols-2 md:grid-cols-4 gap-base">
        {featurePoints.map((item, i) => (
          <FadeUp
            transition={{
              type: "spring",
              delay: 0.3 * i
            }}
            key={item.title + "FeatureCard"}>
            <div className="p-base bg-background flex-center gap-base flex-col text-center group rounded-md border-primary border">
              <div className="">
                {item.icon}
              </div>
              {item.title}
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  )
}
