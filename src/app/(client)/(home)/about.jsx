import FadeLeft from "@/components/animations/FadeLeft";
import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { CheckCheck } from "lucide-react";
import Image from "next/image";

const points = [
    "On-Time Delivery",
    "Real Time Tracking",
    "HD Video Recording",
]

export default function About() {
    return (
        <Section className="grid gap-block md:grid-cols-2">
            <div className="grid gap-base grid-cols-2">
                {[1, 2, 3, 4].map((item,i) => (
                    <FadeUp
                        transition={{
                            type: "spring",
                            delay: 0.3 * i
                        }}
                        key={item + "About Images"}>
                        <Image
                            className="w-full rounded object-center object-cover aspect-square"
                            src={`/images/drones/${item}.jpg`}
                            height={200}
                            width={200}
                            alt="Drone Image"
                        />
                    </FadeUp>
                ))}
            </div>

            <div className="relative">
                <div className="md:sticky top-block">
                    <FadeUp>
                        <h2>Our Journey to <span className="text-primary">Revolutionize Food Delivery</span></h2>
                    </FadeUp>
                    <FadeUp>
                        <p>Our drone food delivery service is revolutionizing the way you enjoy your favorite meals. By combining cutting-edge technology with a commitment to speed, safety, and sustainability, we ensure that your food arrives fresh and fast, every time.</p>
                    </FadeUp>
                    <FadeUp>
                        <p className="mt-base italic">Our mission is to make dining more convenient, eco-friendly, and exciting, one delivery at a time.</p>
                    </FadeUp>

                    <div className="mt-base space-y-2">
                        {points.map((item, i) => (
                            <FadeLeft
                                className="w-fit"
                                transition={{
                                    type: "spring",
                                    delay: 0.3 * i
                                }}
                                key={item + "AboutPoints"}>
                                <div className="flex gap-base">
                                    <CheckCheck className="text-primary shrink-0" />
                                    <div className="">{item}</div>
                                </div>
                            </FadeLeft>
                        ))}
                    </div>
                    <ZoomIn>
                        <Button className="mt-lg">Request A Demo</Button>
                    </ZoomIn>
                </div>
            </div>
        </Section>
    )
}
