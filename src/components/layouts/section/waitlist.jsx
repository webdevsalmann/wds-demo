"use client"
import Section from "@/components/ui/section";
import WaitlistForm from "./waitlist-form";
import { Users } from "lucide-react";
import Link from "next/link";

export default function Waitlist() {
  return (
    <Section sectionClassName="-mt-block" className="relative grid gap-base md:grid-cols-2" id="waitlist">
      <div className="md:sticky md:top-block md:h-fit">
        <div className="p-base size-fit bg-primary/10 flex-center rounded-full">
          <Users className="text-primary size-xl" strokeWidth={2} />
        </div>
        <h2 className="my-base">
          Apply For Our{" "}<span className="text-primary">Free Demo</span>{" "}Session
        </h2>
        <p>
          Now we provide delivery service for Beta Users in Irvine, CA, and nearby areas!
          <br /><br />
          Are you looking for Job? We are hiring, Check our <Link className="underline underline-offset-2 hover:text-primary" href="/careers">Careers</Link> page.
          <br /><br />
          Not a business? Find other resources and ways to get in touch, <Link className="underline underline-offset-2 hover:text-primary" href="/contact">Contact Us</Link>.
        </p>
      </div>

      {/* FORM */}
      <WaitlistForm />
    </Section>
  );
}
