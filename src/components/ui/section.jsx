import { cn } from "@/lib/utils";

export default function Section({ children, sectionClassName, className, ...props }) {
    return (
        <section className={sectionClassName}>
            <div className={cn(
                "mx-auto container p-6 sm:py-12 md:p-16 lg:p-20",
                className,
                )} {...props}>
                {children}
            </div>
        </section>
    )
}
