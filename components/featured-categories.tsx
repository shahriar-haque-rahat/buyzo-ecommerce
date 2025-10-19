import Image from "next/image"
import Link from "next/link"

export function FeaturedCategories() {
  const categories = [
    {
      title: "Lighting & Chair",
      subtitle: "Decor Lights",
      image: "/modern-lighting-chair-decor.png",
      href: "/shop?search=lighting",
    },
    {
      title: "Decoration & Accessories",
      subtitle: "Home Decor",
      image: "/home-decoration-accessories-modern.png",
      href: "/shop?search=decoration",
    },
    {
      title: "Clothing & Oil",
      subtitle: "Fashion Items",
      image: "/clothing-fashion-oil-products.png",
      href: "/shop?search=clothing",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}