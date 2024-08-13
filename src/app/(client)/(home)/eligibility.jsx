import FadeUp from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Section from "@/components/ui/section";
import Image from "next/image";

export default function Eligibility() {
  return (
    <Section id="request-demo" sectionClassName="bg-secondary">
      <FadeUp>
        <h2> Apply For Our <span className="text-primary"> Free Demo</span> Session</h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-block">

        <div className="hidden md:block mx-auto md:w-3/5">
          <Image
            className="w-full h-fit rounded object-center object-contain aspect-square animate-bounce-slow"
            src="/images/common/drone.png"
            height={200}
            width={200}
            alt="Drone Image"
          />
        </div>

        <div>
          <div className="space-y-base">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input placeholder="johndoe007@mail.com" />
            </div>
            <Button>Apply</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
