import { ProductCard } from "@/components/product-card"
import { products } from "@/data/product.data"

interface RelatedProductsProps {
  currentProductId: number
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  const relatedIds = [9, 11];
  const relatedProducts = relatedIds
    .map(id => products.find(p => p.id === id))
    .filter((product): product is typeof products[0] => !!product && product.id !== currentProductId);

  return (
    <section className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">Related Products</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}