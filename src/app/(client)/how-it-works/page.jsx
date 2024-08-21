import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";
import Waitlist from "@/components/layouts/section/waitlist";
import Section from "@/components/ui/section";
import { ZoomOut } from "lucide-react";
import Image from "next/image";

export default function page() {
    return (
        <main>
            <div className="mt-block text-center">
                <FadeUp>
                    <h1>How it works</h1>
                </FadeUp>
            </div>
            <Section>
                {/* 1 */}
                <div className="mx-auto w-4/5">
                    <div className="w-fit flex flex-col items-center justify-center">
                        <div className="p-1 md:p-xs size-fit aspect-square flex-center bg-primary text-primary-foreground text-lg md:text-xl font-bold rounded-md">
                            <ZoomIn>
                                1
                            </ZoomIn>
                        </div>
                        <div className="w-xs h-xs md:h-sm bg-primary" />
                    </div>
                </div>

                <div className="bg-secondary grid md:grid-cols-2 rounded md:rounded-md overflow-hidden">
                    <div className="p-base order-2 md:order-1">
                        <FadeUp>
                            <h2 className="h3">Place your order on our web app </h2>
                        </FadeUp>
                        <FadeUp>
                            <p>Experience the convenience of ordering from anywhere with our user-friendly web app. Browse, select, and place your order in just a few clicks.</p>
                        </FadeUp>
                        <br />
                        <FadeUp>
                            <p>Our platform is designed to make the ordering process quick and hassle-free, ensuring you get exactly what you need without any delays.</p>
                        </FadeUp>
                    </div>
                    <div className="flex-center order-1 md:order-2">
                        <iframe
                            className="w-full aspect-video rounded-md"
                            src="https://www.youtube.com/embed/Xqnatv8-unU?autoplay=1&mute=&loop=1&disablekb=1&controls=0&playlist=Xqnatv8-unU&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* 2 */}
                <div className="mx-auto w-4/5">
                    <div className="w-fit flex flex-col items-center justify-center">
                        <div className="w-xs h-xl md:h-2xl bg-primary" />
                        <div className="p-1 md:p-xs size-fit aspect-square flex-center bg-primary text-primary-foreground text-lg md:text-xl font-bold rounded-md">
                            <ZoomIn>
                                2
                            </ZoomIn>
                        </div>
                        <div className="w-xs h-xs md:h-sm bg-primary" />
                    </div>
                </div>

                <div className="bg-secondary grid md:grid-cols-2 rounded md:rounded-md overflow-hidden">
                    <div className="p-base order-2">
                        <FadeUp>
                            <h2 className="h3">Pick up your order by our drones</h2>
                        </FadeUp>
                        <FadeUp>
                            <p>After placing your order, our advanced drones take over, swiftly picking up your items from the nearest fulfillment center.</p>
                        </FadeUp>
                        <br />
                        <FadeUp>
                            <p>Our drones are equipped with state-of-the-art technology to ensure safe and efficient pickup, getting your items airborne in no time.</p>
                        </FadeUp>
                    </div>
                    <div className="flex-center order-1">
                        <iframe
                            className="w-full aspect-video rounded-md"
                            src="https://www.youtube.com/embed/Xqnatv8-unU?autoplay=1&mute=&loop=1&disablekb=1&controls=0&playlist=Xqnatv8-unU&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* 3 */}
                <div className="mx-auto w-4/5">
                    <div className="w-fit flex flex-col items-center justify-center">
                        <div className="w-xs h-xl md:h-2xl bg-primary" />
                        <div className="p-1 md:p-xs size-fit aspect-square flex-center bg-primary text-primary-foreground text-lg md:text-xl font-bold rounded-md">
                            <ZoomIn>
                                3
                            </ZoomIn>
                        </div>
                        <div className="w-xs h-xs md:h-sm bg-primary" />
                    </div>
                </div>

                <div className="bg-secondary grid md:grid-cols-2 rounded md:rounded-md overflow-hidden">
                    <div className="p-base order-2 md:order-1">
                        <FadeUp>
                            <h2 className="h3">Deliver to your address in minutes</h2>
                        </FadeUp>
                        <FadeUp>
                            <p>Our drones don&apos;t just fly—they deliver your order in record time, straight to your address. Enjoy the thrill of seeing your delivery arrive in just minutes.</p>
                        </FadeUp>
                        <br />
                        <FadeUp>
                            <p>We prioritize speed and precision, ensuring that your items reach you safely and promptly, so you can enjoy your purchase without any wait.</p>
                        </FadeUp>
                    </div>
                    <div className="flex-center order-1 md:order-2">
                        <iframe
                            className="w-full aspect-video rounded-md"
                            src="https://www.youtube.com/embed/Xqnatv8-unU?autoplay=1&mute=&loop=1&disablekb=1&controls=0&playlist=Xqnatv8-unU&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Section >

            <Waitlist />
        </main >
    )
}
