import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { CursorEffect } from '@/components/cursor-effect'
import { GradientBackground } from '@/components/gradient-background'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Manish Meena',
  description: 'Senior full-stack developer crafting creative, high-performance digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
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
