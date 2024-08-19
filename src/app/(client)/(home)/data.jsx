"use client"
import Counter from "@/components/animations/counter";
import FadeUp from "@/components/animations/FadeUp";
import TypeAnimation from "@/components/animations/type-animation";
import useWaitlist from "@/components/providers/waitlist-provider";
import Section from "@/components/ui/section";
import { BadgeInfo } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const droneMetrics = [
    {
        metric: "Fastest Delivery Completed",
        value: "<5",
        unit: "mins"
    },
    {
        metric: "Max Speed",
        value: "80+",
        unit: "km/h"
    },
    {
        metric: "Max Distance Traveled",
        value: "60+",
        unit: "km"
    },
    {
        metric: "Max Payload",
        value: "1.5+",
        unit: "kg"
    }
];

const tractionData = [
    {
        title: "Deliveries Completed",
        value: 100
    },
    {
        title: "Beta Users",
        value: 100
    },
    {
        title: "Restaurants Worked With",
        value: 20
    }
];


const waitlistdata = [
    {
        title: "Restaurants",
        value: 223
    },
    {
        title: "Users",
        value: 1617
    },
]


export default function Data() {
    const { totalUser } = useWaitlist();

    return (
        <Section>
            <div className="md:mx-auto w-full md:w-2/3 md:text-center ">
                <FadeUp>
                    <h2>Our <span className="text-primary"> Drone Model</span></h2>
                    <p className="-mt-base">Various versions are designed for different package payloads and delivery ranges.</p>
                </FadeUp>
            </div>

            <div className="mt-block grid gap-base grid-cols-2 md:grid-cols-4">
                {droneMetrics.map(item => (
                    <div className="p-base bg-primary text-primary-foreground rounded-md" key={item.metric + "Data Metric"}>
                        <div className="">
                            <span className="font-bold text-3xl md:text-5xl"> {item.value} </span>
                            <span className="font-medium  md:text-xl"> {item.unit} </span>
                        </div>
                        <div className="mt-base font-medium text-sm md:text-base">{item.metric}</div>
                    </div>
                ))}
            </div>

            <div className="mt-block">
                {/* <Image
                    className="w-full"
                    src="/usa-labels-full.svg"
                    width={200}
                    height={200}
                    alt="Map Image"
                /> */}
                <iframe className="w-full aspect-video" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212471.724084286!2d-117.93820209022724!3d33.68641235000109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd0e689140e3%3A0xa77ab575604a9a39!2sIrvine%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1723954699321!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="my-base mx-auto px-xs py-1 bg-primary text-primary-foreground rounded-md flex-center">
                <marquee behavior="" direction="">
                    Current Delivery Areas~ Several cities in Orange County, CA (e.g., Irvine, Aliso Viejo, Newport Beach, Santa Ana, Great Park)
                </marquee>
            </div>

            <div className="mx-auto my-base px-xs py-1 w-fit text-center bg-yellow-200 text-yellow-800 flex items-center rounded-md">
                <BadgeInfo className="inline-block size-lg mr-2 shrink-0" />
                Now we provide delivery service for Beta Users in Irvine, CA, and nearby areas!
            </div>

            <div className="p-base md:py-block bg-foreground text-background rounded-xl">
                <div className="md:mx-auto w-full md:w-fit grid gap-base md:grid-cols-3 divide-y md:divide-x md:divide-y-0">
                    {tractionData.map(item => (
                        <div className="p-base" key={item.title + "TractionMetric"}>
                            <div className="font-bold text-3xl md:text-5xl">
                                <Counter value={Number(item.value)} /><span>+</span>
                            </div>
                            <div className="mt-base font-medium text-sm md:text-base">{item.title}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-block mb-base text-yellow-200 font-bold text-2xl text-center">Waitlisted</div>

                <div className="md:mx-auto w-full md:w-fit  grid gap-base md:grid-cols-2 ">
                    <div className="p-base md:aspect-video bg-yellow-200 text-foreground rounded-md text-center" >
                        <div className="font-bold text-3xl md:text-5xl">
                            <Counter value={223} />
                        </div>
                        <div className="font-medium uppercase">Restaurants</div>
                    </div>

                    <div className="p-base md:aspect-video bg-yellow-200 text-foreground rounded-md text-center">
                        <div className="font-bold text-3xl md:text-5xl">
                            <Counter value={totalUser} />
                        </div>
                        <div className="font-medium uppercase">Users</div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
