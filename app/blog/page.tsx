import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"
import { Suspense } from "react"

export default function BlogPage() {
  return (
    <Suspense fallback={<></>}>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Our Blog</h1>
              <p className="text-lg text-muted-foreground mb-6">Discover the latest trends in home decor and lifestyle</p>
              <nav className="text-sm text-muted-foreground">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span>Blog</span>
              </nav>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          <BlogGrid />
        </main>

        <Footer />
      </div>
    </Suspense>
  )
}
