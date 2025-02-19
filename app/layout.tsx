import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "IH.center - Centre d'appels à Mohammedia",
  description: "IH.center est votre partenaire de confiance en solutions de centre d'appels basé à Mohammedia, Maroc.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'