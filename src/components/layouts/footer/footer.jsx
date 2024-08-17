import Link from "next/link";
import { Ilogo } from "@/components/ui/svgs";
import Section from "@/components/ui/section";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Section sectionClassName="bg-secondary">
        <div className="grid gap-3xl sm:grid-cols-2 md:grid-cols-3">
          <div className="">
            <Link className="w-fit flex-center gap-xs text-primary" href="/">
              <Ilogo className="size-12" />
              <div className='text-xl sm:text-2xl font-bold'>MealCopilot</div>
              <span className='sr-only'>MealCopilot</span>
            </Link>
            <p className="mt-xs sm:w-3/4">
              Experience the future of food delivery with our state-of-the-art drone service.
            </p>
          </div>

          {/* Links */}
          <div className="">
            <div className="mb-xs font-bold">Links</div>
            <ul>
              <li>
                <Link className="hover:underline w-fit text-link" href="/#features" >Features</Link>
              </li>
              <li>
                <Link className="hover:underline w-fit text-link" href="/#about" >About</Link>
              </li>
              <li>
                <Link className="hover:underline w-fit text-link" href="/#working" >Working</Link>
              </li>
              <li>
                <Link className="hover:underline w-fit text-link" href="/#services" >Services</Link>
              </li>
              <li>
                <Link className="hover:underline w-fit text-link" href="/#request-demo" >Request Demo</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="">
            <div className="mb-base font-bold">Legal</div>
            <ul>
              <li>
                <Link className="hover:underline w-fit text-link" href="/" >Privacy Policy</Link>
              </li>
              <li>
                <Link className="hover:underline w-fit text-link" href="/" >Terms of condition</Link>
              </li>
              <li>
                <Link className="hover:underline w-fit text-link" href="/" >Cookie Condition</Link>
              </li>
            </ul>
            <div className="mt-base">&copy; {currentYear} Company</div>
          </div>
        </div>
      </Section>
    </footer>
  )
}
