import { buttonVariants } from "@/components/ui/button";
import Section from "@/components/ui/section";
import Link from "next/link";

export default function Hero() {
  return (
    <Section>
      <div className="relative mx-auto w-full md:w-2/3 md:text-center z-0">
        <h1>Fresh <span className="text-primary">Food Delivered by Drone</span> in Minutes!</ h1>
        <p className="my-base">Experience the future of food delivery with our state-of-the-art drone service.</p>

        <div className="absolute left-0 right-0 -top-20 flex-center -z-10">
          <div className="w-full aspect-square bg-primary/15 blur-xl rounded-full"></div>
        </div>
      </div>


      <div className="relative aspect-video bg-[url('/images/common/hero.png')] bg-cover bg-center rounded-xl overflow-hidden z-10">
        <video className="size-full" autoPlay loop controls >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </Section>
  )
}
