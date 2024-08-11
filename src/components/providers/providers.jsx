"use client"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { FmaosConfigProvider } from "./FmaosConfigProvider"

export default function Providers({ children }) {
    return (
        <>
            {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange> */}
            <FmaosConfigProvider>
                {children}
            </FmaosConfigProvider>
            <Toaster />
            {/* </ThemeProvider> */}
        </>
    )
}