import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { TrendingProducts } from "@/components/trending-products"
import { FeaturedCategories } from "@/components/featured-categories"
import { SaleSection } from "@/components/sale-section"
import { BlogSection } from "@/components/blog-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <TrendingProducts />
        <SaleSection />
        <BlogSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
