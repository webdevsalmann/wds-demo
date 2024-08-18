import { BriefcaseBusiness, Contact } from "lucide-react";
import Section from "@/components/ui/section";
import CareersForm from "./careers-form";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <Section className="relative grid gap-base md:grid-cols-2">
        {/* Details */}
        <div className="md:sticky md:top-block md:h-fit">
          <div className="p-base size-fit bg-primary/10 flex-center rounded-full">
            <BriefcaseBusiness className="text-primary size-xl" strokeWidth={2} />
          </div>
          <h1 className="h2 my-base">Join Our <span className="text-primary">Innovative Team</span></h1>
          <p>
            Are you passionate about cutting-edge technology and eager to make a difference?
            <br /><br />
            We&apos;re looking for talented and driven individuals to join our team. Explore the opportunities below and apply for a role that matches your skills and aspirations.
            <br /><br />
            <span className="italic">
              Together, we&apos;ll shape the future of autonomous drone delivery.
            </span>
            <br /><br />
            Not a business? Find other resources and ways to get in touch, <Link className="underline underline-offset-2 hover:text-primary" href="/contact">Contact Us</Link>.
            <br /><br />
            Interested in receiving deliveries? Check if we serve your area or join our <Link className="underline underline-offset-2 hover:text-primary" href="/#waitlist">Waitlist</Link>.
          </p>
        </div>

        {/* FORM */}
        <CareersForm />
      </Section>
    </main>
  );
}
