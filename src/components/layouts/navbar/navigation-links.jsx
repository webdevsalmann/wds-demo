import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

export const navigationLinks = [
    {
        title: "How It Works",
        path: "/how-it-works",
        varient: "ghost"
    },
    {
        title: "Careers",
        path: "/careers",
        varient: "ghost"
    },
    {
        title: "Contact Us",
        path: "/contact",
        varient: "ghost"
    },
    {
        title: "Request Demo",
        path: "/#waitlist",
        varient: ""
    }
]

export default function NavigationLinks({ setIsNavbarOpen }) {
    const path = usePathname();

    return navigationLinks.map((item) => (
        <li key={item.title}>
            <Link
                className={cn(
                    "capitalize",
                    (path === item.path && "bg-accent"),
                    buttonVariants({ variant: item.varient, size: 'sm' }),
                )}
                href={item.path}
                onClick={() => setIsNavbarOpen(false)}
            >
                {item.title}
            </Link>
        </li>
    ))
}
