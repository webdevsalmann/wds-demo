import { Contact } from "lucide-react";
import Section from "@/components/ui/section";
import ContactForm from "./contact-form";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <Section className="relative grid gap-base md:grid-cols-2">
        {/* Details */}
        <div className="md:sticky md:top-block md:h-fit">
          <div className="p-base size-fit bg-primary/10 flex-center rounded-full">
            <Contact className="text-primary size-xl" strokeWidth={2} />
          </div>
          <h1 className="h2 my-base"><span className="text-primary">Get in Touch</span> with Us</h1>
          <p>
            We&apos;re here to help with any questions, inquiries, or feedback you might have.
            <br /><br />
            Whether you&apos;re looking to discuss business opportunities, request more information, or simply want to get in touch, our team is ready to assist you.
            <br /><br />
            Please fill out the form below, and we&apos;ll get back to you as soon as possible.
            <br /><br />
            Are you looking for Job? We are hiring, Check our <Link className="underline underline-offset-2 hover:text-primary" href="/careers">Careers</Link> page.
            <br /><br />
            Interested in receiving deliveries? Check if we serve your area or join our <Link className="underline underline-offset-2 hover:text-primary" href="/#waitlist">Waitlist</Link>.
          </p>
        </div>

        {/* FORM */}
        <ContactForm />
      </Section>
    </main>
  );
}
