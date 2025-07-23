import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Square News - Notícias de Tecnologia",
  description: "Notícias compactas de tecnologia publicadas voluntariamente.",
  generator: "v0.dev",
  openGraph: {
    title: "Square News - Notícias de Tecnologia",
    description: "Notícias compactas de tecnologia publicadas voluntariamente.",
    images: [
      "https://cdn.discordapp.com/banners/1387780583257673798/f21738627ec8d58595e89a08a45cd299?size=512",
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
