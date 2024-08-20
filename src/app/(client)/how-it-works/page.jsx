import Waitlist from "@/components/layouts/section/waitlist";
import Section from "@/components/ui/section";
import Image from "next/image";

export default function page() {
    return (
        <main>
            <div className="mt-block text-center">
                <h1>How it works</h1>
            </div>
            <Section>
                {/* 1 */}
                <div className="mx-auto w-4/5">
                    <div className="w-fit flex flex-col items-center justify-center">
                        <div className="p-1 md:p-xs size-fit aspect-square flex-center bg-primary text-primary-foreground text-lg md:text-xl font-bold rounded-md">1</div>
                        <div className="w-xs h-xs md:h-sm bg-primary" />
                    </div>
                </div>

                <div className="bg-secondary grid md:grid-cols-2 rounded md:rounded-md overflow-hidden">
                    <div className="p-base order-2 md:order-1">
                        <h2 className="h3">Place your order on our web app </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur est ipsam repudiandae earum magni corrupti ex, molestias facere minima facilis, similique quas placeat autem atque esse. Ex aspernatur accusamus optio.</p>
                    </div>
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

                {/* 2 */}
                <div className="mx-auto w-4/5">
                    <div className="w-fit flex flex-col items-center justify-center">
                        <div className="w-xs h-xl md:h-2xl bg-primary" />
                        <div className="p-1 md:p-xs size-fit aspect-square flex-center bg-primary text-primary-foreground text-lg md:text-xl font-bold rounded-md">2</div>
                        <div className="w-xs h-xs md:h-sm bg-primary" />
                    </div>
                </div>

                <div className="bg-secondary grid md:grid-cols-2 rounded md:rounded-md overflow-hidden">
                    <div className="p-base order-1 md:order-2">
                        <h2 className="h3">Pick up your order by our drones</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur est ipsam repudiandae earum magni corrupti ex, molestias facere minima facilis, similique quas placeat autem atque esse. Ex aspernatur accusamus optio.</p>
                    </div>
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

                <div className="bg-secondary grid md:grid-cols-2 rounded md:rounded-md overflow-hidden">
                    <div className="p-base order-2 md:order-1">
                        <h2 className="h3">Deliver to your address in minutes</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur est ipsam repudiandae earum magni corrupti ex, molestias facere minima facilis, similique quas placeat autem atque esse. Ex aspernatur accusamus optio.</p>
                    </div>
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
