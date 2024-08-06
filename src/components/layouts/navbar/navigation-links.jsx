import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

export const navigationLinks = [
    {
        title: "Home",
        path: "/",
        varient: "ghost"
    },
    {
        title: "About",
        path: "/about",
        varient: "ghost"
    },
    {
        title: "Services",
        path: "/services",
        varient: "ghost"
    },
    {
        title: "Products",
        path: "/products",
        varient: "ghost"
    },
    {
        title: "Contact Us",
        path: "/contact",
        varient: "ghost"
    }
]

export default function NavigationLinks() {
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
            >
                {item.title}
            </Link>
        </li>
    ))
}
