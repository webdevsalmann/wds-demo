"use client"
import FadeUp from "@/components/animations/FadeUp";
import TypeAnimation from "@/components/animations/type-animation";
import WavyText from "@/components/animations/WavyText";
import ZoomIn from "@/components/animations/ZoomIn";
import Section from "@/components/ui/section";

export default function Hero() {
  return (
    <Section>
      <div className="relative mx-auto w-full md:w-2/3 md:text-center z-0">
        <FadeUp>
          <h1>Fresh <span className="text-primary">Food Delivered by Drone</span> in Minutes!</ h1>
        </FadeUp>

        <p className="my-base text-foreground text-lg">
          <TypeAnimation
            text="Experience the future of food delivery with our state-of-the-art drone service."
          />

          {/* <WavyText text="Experience the future of food delivery with our state-of-the-art drone service." /> */}
        </p>

        <div className="absolute left-0 right-0 -top-20 flex-center -z-10">
          <div className="w-full aspect-square bg-primary/15 blur-3xl rounded-full" />
        </div>
      </div>


      <div className="relative mt-block aspect-video bg-[url('/images/common/hero.png')] bg-cover bg-center rounded-md md:rounded-xl overflow-hidden z-10">
        {/* <div className="absolute inset-0 bg-neutral-900/40 flex-center text-center z-10">
          <h2 className="mx-auto md:w-1/2 text-background">Fresh Food Delivered by Drone in Minutes!</h2>
        </div> */}
        <video className="relative size-full z-0" autoPlay loop muted src="/videos/hero.mp4"/>
      </div>
    </Section>
  )
}
