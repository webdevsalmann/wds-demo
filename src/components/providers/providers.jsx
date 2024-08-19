"use client"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { FmaosConfigProvider } from "./FmaosConfigProvider"
import { WaitlistProvider } from "./waitlist-provider"

export default function Providers({ children }) {
    return (
        <>
            {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange> */}
            <FmaosConfigProvider>
                <WaitlistProvider>
                    {children}
                </WaitlistProvider>
            </FmaosConfigProvider>
            <Toaster />
            {/* </ThemeProvider> */}
        </>
    )
}