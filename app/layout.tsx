import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hanan Abdullahi - Software Engineer Portfolio",
  description:
    "Interactive VS Code-inspired portfolio showcasing projects, skills, and experience of Hanan Abdullahi, Software Engineering Student at Haliç University",
  authors: [{ name: "Hanan Abdullahi" }],
  keywords: [
    "Hanan Abdullahi",
    "Software Engineer",
    "Portfolio",
    "React",
    "JavaScript",
    "Frontend Developer",
    "Full Stack",
  ],
  creator: "Hanan Abdullahi",
  openGraph: {
    title: "Hanan Abdullahi - Software Engineer Portfolio",
    description: "Interactive VS Code-inspired portfolio showcasing projects and skills",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Hanan Abdullahi" />
        <meta name="designer" content="Hanan Abdullahi" />
        <meta name="developer" content="Hanan Abdullahi" />
        <meta name="copyright" content="© 2024 Hanan Abdullahi. All rights reserved." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
