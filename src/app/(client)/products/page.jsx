import FadeUp from "@/components/animations/FadeUp";
import Waitlist from "@/components/layouts/section/waitlist";
import Section from "@/components/ui/section";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <div className="mt-block text-center">
        <h1>Our Products</h1>
      </div>
      <Section>
        <div className="grid gap-lg sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
            <FadeUp className="rounded-md overflow-hidden hover:shadow-lg transition-all" key={item}>
              <Link href={`/products/${item}`}>
                <div className="">
                  <Image
                    className="w-full aspect-video object-cover"
                    src="/image.png"
                    width={300}
                    height={300}
                    alt="Image"
                  />
                </div>
                <div className="p-xs">
                  <div className="text-lg font-medium">Product {item}</div>
                  <p className="text-xs line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatum qui deserunt excepturi nesciunt doloremque id commodi, nihil reprehenderit placeat, corrupti quod ad blanditiis tempore illum officia hic modi. Temporibus!</p>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Waitlist />
    </main>
  )
}
