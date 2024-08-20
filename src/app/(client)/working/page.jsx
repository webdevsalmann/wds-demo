import Waitlist from "@/components/layouts/section/waitlist";
import Section from "@/components/ui/section";
import Image from "next/image";

export default function page() {
    return (
        <main>
            <div className="mt-block text-center">
                <h1>Working</h1>
            </div>
            <Section>
                {/* 1 */}
                <div className="mx-auto w-4/5">
                    <div className="w-fit flex flex-col items-center justify-center">
                        <div className="p-1 md:p-xs size-fit aspect-square flex-center bg-primary text-primary-foreground text-lg md:text-xl font-bold rounded-md">1</div>
                        <div className="w-xs h-xs md:h-sm bg-primary" />
                    </div>
                </div>

                <div className="bg-secondary rounded md:rounded-md overflow-hidden">
                    <div className="aspect-video h-full order-1 md:order-2">
                        {/* <iframe width="420" height="315" src="https://youtu.be/Xqnatv8-unU?si=ubOL6U0zQ8HbWcjZ?autoplay=1&mute=1" /> */}
                        <iframe
                            className="size-full pointer-events-none"
                            src="https://www.youtube.com/embed/Xqnatv8-unU?autoplay=1&mute=&loop=1&disablekb=1&controls=0&playlist=Xqnatv8-unU&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>


                        {/* <iframe className="size-full" src="https://fast.wistia.net/embed/iframe/7b94ltu9fi?autoplay=1" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Intro" /> */}
                    </div>
                </div>

                {/* 2 */}
                <div className="mx-auto w-4/5">
                    <div className="w-fit flex flex-col items-center justify-center">
                        <div className="w-xs h-xl md:h-2xl bg-primary" />
                        <div className="p-1 md:p-xs size-fit aspect-square flex-center bg-primary text-primary-foreground text-lg md:text-xl font-bold rounded-md">2</div>
                        <div className="w-xs h-xs md:h-sm bg-primary" />
                    </div>
                </div>

                <div className="bg-secondary rounded md:rounded-md overflow-hidden">
                    <div className="aspect-video h-full order-2 md:order-1">
                        <iframe
                            className="size-full pointer-events-none"
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
                        <div className="p-1 md:p-xs size-fit aspect-square flex-center bg-primary text-primary-foreground text-lg md:text-xl font-bold rounded-md">3</div>
                        <div className="w-xs h-xs md:h-sm bg-primary" />
                    </div>
                </div>

                <div className="bg-secondary rounded md:rounded-md overflow-hidden">
                    <div className="aspect-video h-full order-1 md:order-2">
                        <iframe
                            className="size-full pointer-events-none"
                            src="https://www.youtube.com/embed/Xqnatv8-unU?autoplay=1&mute=&loop=1&disablekb=1&controls=0&playlist=Xqnatv8-unU&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Section>

            <Waitlist />
        </main>
    )
}
