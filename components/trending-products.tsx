import { ProductCard } from "@/components/product-card"
import { products } from "@/data/product.data"

export function TrendingProducts() {
  const trendingProducts = products.filter(p => p.id >= 1 && p.id <= 6);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Trending Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}