import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/ui/section";
import Image from "next/image";
const services = [
    {
        title: "Food Delivery",
        description: "We aim for the fastest food delivery by drones, in minutes, at lower cost."
    },
    {
        title: "Convenience Delivery",
        description: "From convenience store to your address, with much less time."
    },
    {
        title: "Grocery Delivery",
        description: "Get your groceries delivered as fast as 15-20 mins."
    },
    {
        title: "Small item Delivery",
        description: "Available for small packages for verified stores."
    }
];


export default function Services() {
    return (
        <Section
            sectionClassName="bg-gradient-to-b from-primary/20 to-transparent"
             id="services"
        >

            <FadeUp>
                <h2><span className="text-primary">Services</span> We Provide</h2>
                <p className="-mt-base mb-3xl">Contact us for business opportunities.</p>
            </FadeUp>

            <div className="grid gap-base sm:grid-cols-2 md:grid-cols-4">
                {services.map((item, i) => (
                    <FadeUp
                        transition={{
                            type: "spring",
                            delay: 0.3 * i
                        }}
                        key={item.title + "ServiceCard"}>
                        <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden">
                            <Image
                                className="absolute inset-0 size-full rounded object-center object-cover z-0"
                                src={`/images/common/${i + 1}.jpg`}
                                height={200}
                                width={200}
                                alt="Drone Image"
                            />
                            <div className="absolute inset-0 size-full bg-gradient-to-t from-foreground via-transparent to-transparent" />
                            <div className="p-base relative z-20 size-full flex flex-col">
                                <div className="flex-1" />
                                <div className=" font-semibold leading-5 text-background">{item.title}</div>
                                <p className="text-xs line-clamp-3 text-background/60">{item.description}</p>
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </Section>
    )
}
