"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShopHero } from "@/components/shop-hero"
import { ProductsGrid } from "@/components/products-grid"
import { ShopSidebar } from "@/components/shop-sidebar"
import { useSearchParams } from "next/navigation"

export default function ShopPage() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search") || ""

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ShopHero />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 flex-shrink-0">
            <ShopSidebar />
          </aside>
          <div className="flex-1">
            <ProductsGrid searchQuery={searchQuery} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}