import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from "@/components/ui/section";

export default function Eligibility() {
  return (
    <Section id="check-eligibility" sectionClassName="bg-pattern">
      <h2>
        <span className="text-primary">| </span>
        <span className="text-primary-foreground"> Check Area Eligibility </span>
        <span className="text-primary"> |</span>
      </h2>

      <div className="mx-auto w-full md:w-1/2 lg:w-1/3 flex-center flex-col gap-base">
        <Input placeholder="Enter area name" />
        <Button className="w-full">Check Eligibility</Button>
      </div>
    </Section>
  )
}
