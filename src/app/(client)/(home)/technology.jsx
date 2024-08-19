import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/ui/section";

const technologyFeatures = [
    {
        title: "Autopilot System",
        description: "For optimal path planning and navigation."
    },
    {
        title: "360° LiDAR",
        description: "For airspace detection and object avoidance."
    },
    {
        title: "Peripheral Sensors",
        description: "Complimentary sensors for additional safety."
    },
    {
        title: "ML Models",
        description: "For precise localization and distant object avoidance."
    },
    {
        title: "4K Camera",
        description: "For real-time data analysis and video streaming."
    },
    {
        title: "RemoteID Broadcaster",
        description: "Compliant with FAA regulations."
    },
    {
        title: "Protective Shell",
        description: "Designed for various weather conditions."
    },
    {
        title: "Extensive Testing",
        description: "Ensuring optimization and safety."
    }
];

export default function Technology() {
    return (
        <Section id="technology">
            <FadeUp>
                <h2>Technology of our Advanced<span className="text-primary"> Autonomous Drones</span></h2>
            </FadeUp>

            <div className="mt-block grid gap-base sm:grid-cols-2 md:grid-cols-4    ">
                {technologyFeatures.map((item, i) => (
                    <FadeUp
                        transition={{
                            type: "spring",
                            delay: 0.3 * i
                        }} key={item.title + "TechFeature"}>
                        <div className="p-base">
                            <div className="font-bold">{item.title}</div>
                            <p className="">{item.description}</p>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </Section>
    )
}
