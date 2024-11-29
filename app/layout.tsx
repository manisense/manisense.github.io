import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { CursorEffect } from '@/components/cursor-effect'
import { GradientBackground } from '@/components/gradient-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manish Meena',
  description: 'Learner, Programmer, Developer ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GradientBackground />
          <CursorEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}