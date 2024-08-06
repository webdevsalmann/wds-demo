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
    icon: <Video className="size-6 group-hover:text-primary shrink-0" />,
    title: "Easy Reordering",
  },
  {
    icon: "",
    icon: <PackageCheck className="size-6 group-hover:text-primary shrink-0" />,
    title: "Flexible Delivery Options"
  },
]

export default function Features() {
  return (
    <Section className="-mt-block">
      <div className="relative grid gap-block md:grid-cols-2">

        <div className="md:sticky top-0 h-fit">
          <div className="absolute left-0 right-0 w-1/2 aspect-square bg-primary/55 blur-[100rem] -z-10">
          </div>
          <Image
            className="w-full "
            src="/images/common/drone.png"
            width={200}
            height={200}
            alt="Drone Image"
          />
        </div>

        <div className="relative overflow-hidden">
          <div className="">
            <h2 className="md:text-left">Why Our Drone Delivery Service Stands Out</h2>
          </div>

          <div className="grid grid-cols-2 gap-base ">
            {featurePoints.map((item, i) => (
              <div className="p-base flex-center gap-base flex-col text-center rounded-md border group" key={i + "FeatureCard"}>
                <div className="">
                  {item.icon}
                </div>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
