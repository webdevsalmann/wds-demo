import Counter from "@/components/animations/counter";
import FadeUp from "@/components/animations/FadeUp";
import TypeAnimation from "@/components/animations/type-animation";
import Section from "@/components/ui/section";
import Image from "next/image";

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
                <Image
                    className="w-full"
                    src="/usa-labels-full.svg"
                    width={200}
                    height={200}
                    alt="Map Image"
                />
            </div>

            <div className="my-block md:mx-auto px-xs py-1 md:w-fit bg-primary text-primary-foreground rounded-md md:rounded-full">
                <TypeAnimation
                    text="Current Delivery Areas~ Several cities in Orange County, CA (e.g., Irvine, Aliso Viejo, Newport Beach, Santa Ana, Great Park)"
                />
            </div>

            <div className="p-base md:py-block bg-foreground text-background rounded-xl">
                <div className="md:mx-auto w-full md:w-fit grid gap-base md:grid-cols-3 divide-y md:divide-x md:divide-y-0">
                    {tractionData.map(item => (
                        <div className="p-base" key={item.title + "TractionMetric"}>
                            <div className="font-bold text-3xl md:text-5xl"> <Counter value={item.value} />+ </div>
                            <div className="mt-base font-medium text-sm md:text-base">{item.title}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-block md:mx-auto w-full md:w-fit  grid gap-base md:grid-cols-2 ">
                    {waitlistdata.map(item => (
                        <div className="p-base md:aspect-video bg-yellow-200 text-foreground rounded-md text-center" key={item.title + "Waitlist"}>
                            <div className="font-bold text-3xl md:text-5xl"><Counter value={item.value} /></div>
                            <div className="font-medium uppercase">{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
