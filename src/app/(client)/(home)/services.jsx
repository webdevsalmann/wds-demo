import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/ui/section";
import Image from "next/image";
const services = [
    {
        title: "Lightning-Speed Service",
        description: "Experience the quickest food delivery ever with our cutting-edge drones. Enjoy your meal in minutes, no matter the traffic conditions."
    },
    {
        title: "Real-Time Tracking",
        description: "Track your order in real-time with our advanced GPS technology. Know exactly when your food will arrive, down to the second."
    },
    {
        title: "State-of-the-Art Technology",
        description: "Our drones are equipped with the latest technology to ensure safe and reliable delivery every time."
    },
    {
        title: "Precision Navigation",
        description: "Using advanced navigation systems, our drones deliver your food with pinpoint accuracy, even in challenging weather conditions."
    }
];


export default function Services() {
    return (
        <Section>

            <FadeUp>
                <h2><span className="text-primary">Services</span> We Provide</h2>
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
                                src={`/images/drones/${i + 1}.jpg`}
                                height={200}
                                width={200}
                                alt="Drone Image"
                            />
                            <div className="absolute inset-0 size-full bg-gradient-to-t from-foreground via-transparent to-transparent" />
                            <div className="p-base relative z-20 size-full flex flex-col">
                                <div className="flex-1" />
                                <div className=" font-semibold leading-5 text-background">{item.title}</div>
                                <p className="text-xs line-clamp-2 text-background/60">{item.description}</p>
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </Section>
    )
}
