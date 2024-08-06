"use client"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

export default function Providers({ children }) {
    return (
        <>
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange> */}
                {children}
                <Toaster />
        {/* </ThemeProvider> */}
                </>
    )
}