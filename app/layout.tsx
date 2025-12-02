import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Avio - Instagram DM Automation for Creators",
  description:
    "Convert Instagram leads into happy customers with automated DM flows. Easy, fast, and affordable automation platform for content creators.",
  keywords: "Instagram DM automation, lead conversion, content creators, sales automation, Instagram marketing",
  openGraph: {
    title: "Avio - Instagram DM Automation for Creators",
    description: "Convert Instagram leads into happy customers with automated DM flows.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
