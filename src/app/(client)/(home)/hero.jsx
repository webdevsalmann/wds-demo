"use client"
import WavyText from "@/components/animations/WavyText";
import ZoomIn from "@/components/animations/ZoomIn";
import Section from "@/components/ui/section";

export default function Hero() {
  return (
    <Section>
      <div className="relative mx-auto w-full md:w-2/3 md:text-center z-0">
        <ZoomIn>
          <h1>Fresh <span className="text-primary">Food Delivered by Drone</span> in Minutes!</ h1>
        </ZoomIn>

        <p className="my-base text-foreground text-lg">
          <WavyText text="Experience the future of food delivery with our state-of-the-art drone service."/>
        </p>

        <div className="absolute left-0 right-0 -top-20 flex-center -z-10">
          <div className="w-full aspect-square bg-primary/15 blur-3xl rounded-full" />
        </div>
      </div>


      <div className="mt-block relative aspect-video bg-[url('/images/common/hero.png')] bg-cover bg-center rounded-xl overflow-hidden z-10">
        <video className="size-full" autoPlay loop controls >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </Section>
  )
}
