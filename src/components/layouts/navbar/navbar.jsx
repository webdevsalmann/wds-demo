"use client"
import Link from 'next/link';
import { Ilogo } from '@/components/ui/svgs';
import { AlignRight, X } from 'lucide-react';
import { useState } from 'react';
import NavigationLinks from './navigation-links';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { buttonVariants } from '@/components/ui/button';

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className={cn("p-0 container w-full bg-background md:border-0", (isNavbarOpen && "border-b"))}>
      <nav className="px-[5%] py-2 w-full h-full flex-between">

        <Link className="w-fit flex-center gap-xs text-primary" href="/">
          <Ilogo className="size-12 sm:size-16" />
          <div className='text-xl sm:text-2xl font-bold'>MealCopilot</div>
          <span className='sr-only'>MealCopilot</span>
        </Link>


        {/* <div className="size-8 md:hidden justify-self-end flex-center"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div> */}

        {/* <div className={`col-span-2 md:col-span-5 justify-self-center  ${isNavbarOpen ? 'block' : 'hidden md:block'}`}>
          <ul className={`relative flex-center flex-col gap-xs md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'}`}>
            <NavigationLinks />
            <li className="md:hidden">
              <ModeToggle />
              <Link
                className={cn(
                  "capitalize",
                  buttonVariants({ size: 'sm' }),
                )}
                href="/request-quote"
              >
                Request Quote
              </Link>
            </li>
          </ul>
        </div> */}

        {/* <ModeToggle className="hidden md:block justify-self-end" /> */}
        <Link
          className={cn(
            "capitalize",
            "hidden md:flex justify-self-end",
            buttonVariants({ size: 'sm' }),
          )}
          href="/#request-demo"
        >
          Free Demo
        </Link>
      </nav>
    </div>
  )
}
