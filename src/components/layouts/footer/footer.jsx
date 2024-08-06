import Link from "next/link";
import { Ilogo } from "@/components/ui/svgs";
import Section from "@/components/ui/section";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Section sectionClassName="bg-primary text-primary-foreground">
        <div className="grid gap-base md:grid-cols-2">
          <div className="">
            <Ilogo className="size-10" />
            <div className="mt-base text-primary-foreground/70">&copy; {currentYear} Company</div>
          </div>

          <div className="flex flex-col">
            <Link className="hover:underline w-fit" href="/" >Privacy Policy</Link>
            <Link className="hover:underline w-fit" href="/" >Terms of condition</Link>
            <Link className="hover:underline w-fit" href="/" >Cookie Condition</Link>
          </div>
        </div>
      </Section>
    </footer>
  )
}
