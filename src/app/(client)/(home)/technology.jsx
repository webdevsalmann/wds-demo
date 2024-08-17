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
        <Section>
            <FadeUp>
                <h2>Technology of our<span className="text-primary"> Advanced Autonomous Drones</span></h2>
            </FadeUp>

            <div className="mt-block grid gap-base sm:grid-cols-2 md:grid-cols-4    ">
                {technologyFeatures.map(item => (
                    <div className="p-base" key={item.title + "TechFeature"}>
                        <div className="font-bold">{item.title}</div>
                        <p className="">{item.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}
