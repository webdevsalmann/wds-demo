import Waitlist from "@/components/layouts/section/waitlist"
import Section from "@/components/ui/section"
import Image from "next/image"

export default function page({ params }) {
    return (
        <main>
            <Section className="grid gap-block md:grid-cols-2">
                <div className="">
                    <Image
                        className="w-full aspect-square object-cover"
                        src="/image.png"
                        width={300}
                        height={300}
                        alt="Image"
                    />
                </div>

                <div className="">
                    <div className="text-2xl md:text-3xl font-bold">Product {params.id}</div>
                    <br />
                    <p>Detail of product {params.id}</p>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quasi quaerat quibusdam ex similique, doloremque aspernatur! Nihil, nostrum illum. Amet odit vero velit illum beatae rem aliquam blanditiis. Quasi, magnam.</p>
                </div>
            </Section>

            <Waitlist />
        </main>
    )
}
