import FadeUp from "@/components/animations/FadeUp";
import Waitlist from "@/components/layouts/section/waitlist";
import Section from "@/components/ui/section";

export default function page() {
  return (
    <main>
        <div className="mt-block text-center">
          <h1>Our Products</h1>
        </div>
      <Section>
        <div className="grid gap-base sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
            <FadeUp className="rounded-md overflow-hidden aspect-video" key={item}>
              <iframe className="size-full" width="560" height="315" src="https://www.youtube.com/embed/GHne7V7cD0k?si=eF6-kSBqQYov0K1_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen />
            </FadeUp>
          ))}
        </div>
      </Section>

      <Waitlist />
    </main>
  )
}
