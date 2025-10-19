interface ProductDetailsHeroProps {
  productName: string
}

export function ProductDetailsHero({ productName }: ProductDetailsHeroProps) {
  return (
    <section className="bg-gray-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Details</h1>
          <nav className="text-sm text-muted-foreground">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Product Details</span>
          </nav>
        </div>
      </div>

      {/* Decorative woven basket image */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
        <img
          src="/woven-baskets-set-modern-home.png"
          alt="Decoration"
          className="h-full w-full object-cover object-left"
        />
      </div>
    </section>
  )
}
