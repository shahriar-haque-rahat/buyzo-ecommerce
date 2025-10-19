import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { BookmarksProvider } from "@/contexts/bookmarks-context"
import { CartSidebar } from "@/components/cart-sidebar"

export const metadata: Metadata = {
  title: "Buyzo",
  description: "Created with Buyzo",
  generator: "Buyzo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <CartProvider>
          <BookmarksProvider>
            {children}
            <CartSidebar />
          </BookmarksProvider>
        </CartProvider>
      </body>
    </html>
  )
}
