import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { products } from "@/data/product.data"
import Link from "next/link";

export function SaleSection() {
  const saleProductIds = [1, 9, 2, 8, 10, 7];
  const saleProducts = saleProductIds
    .map(id => products.find(p => p.id === id))
    .filter((product): product is typeof products[0] => !!product)
    .map(product => ({ ...product, isFeatured: true }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Sale Off</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
            Scelerisque duis ultrices sollicitudin
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Featured Sale Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="flex items-center">
              <div className="flex-1 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">WOODEN CONTAINER BOWL</h3>
                <Link href={"/shop"}>
                  <Button
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent cursor-pointer"
                  >
                    SHOP NOW
                  </Button>
                </Link>
              </div>
              <div className="flex-1 flex justify-end">
                <Image
                  src="/wooden-container-bowl-modern.png"
                  alt="Wooden Container Bowl"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="flex items-center">
              <div className="flex-1 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">SET OF 2 BASKETS</h3>
                <Link href={"/shop"}>
                  <Button
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent cursor-pointer"
                  >
                    SHOP NOW
                  </Button>
                </Link>
              </div>
              <div className="flex-1 flex justify-end">
                <Image
                  src="/woven-baskets-set-modern-home.png"
                  alt="Set of 2 Baskets"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}