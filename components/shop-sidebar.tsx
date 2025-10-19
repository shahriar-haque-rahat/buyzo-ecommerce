"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/data/product.data"

export function ShopSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [priceRange, setPriceRange] = useState([
    parseFloat(searchParams.get("minPrice") || "0"),
    parseFloat(searchParams.get("maxPrice") || "500"),
  ])
  const [selectedSizes, setSelectedSizes] = useState<string[]>(
    searchParams.get("sizes") ? searchParams.get("sizes")!.split(",") : []
  )
  const [selectedColors, setSelectedColors] = useState<string[]>(
    searchParams.get("colors") ? searchParams.get("colors")!.split(",") : []
  )
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    searchParams.get("brands") ? searchParams.get("brands")!.split(",") : []
  )

  useEffect(() => {
    setPriceRange([
      parseFloat(searchParams.get("minPrice") || "0"),
      parseFloat(searchParams.get("maxPrice") || "500"),
    ])
    setSelectedSizes(searchParams.get("sizes") ? searchParams.get("sizes")!.split(",") : [])
    setSelectedColors(searchParams.get("colors") ? searchParams.get("colors")!.split(",") : [])
    setSelectedBrands(searchParams.get("brands") ? searchParams.get("brands")!.split(",") : [])
  }, [searchParams])

  const categories = [
    { display: "Lighting & Chair", value: "lighting" },
    { display: "Decoration & Accessories", value: "decoration" },
    { display: "Clothing & Oil", value: "clothing" },
    { display: "Fashion For Men's", value: "mensfashion" },
    { display: "Fashion For Women's", value: "womensfashion" },
  ]

  const sizes = ["Small", "Medium", "Large", "One Size"]

  const colors = [
    { name: "Orange", value: "#f97316" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Green", value: "#10b981" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Pink", value: "#ec4899" },
    { name: "Yellow", value: "#eab308" },
    { name: "Gray", value: "#6b7280" },
    { name: "Black", value: "#000000" },
    { name: "Natural", value: "#D2B48C" },
    { name: "Dark Brown", value: "#8B4513" },
    { name: "Light Oak", value: "#DEB887" },
    { name: "Default", value: "#808080" },
  ]

  const brands = ["Comfique", "Decorae", "Prestora", "Bloomora"]

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 2)

  const updateURL = (
    price: number[] = priceRange,
    sizes: string[] = selectedSizes,
    colors: string[] = selectedColors,
    brands: string[] = selectedBrands
  ) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("minPrice", price[0].toString())
    params.set("maxPrice", price[1].toString())
    if (sizes.length) params.set("sizes", sizes.join(","))
    else params.delete("sizes")
    if (colors.length) params.set("colors", colors.join(","))
    else params.delete("colors")
    if (brands.length) params.set("brands", brands.join(","))
    else params.delete("brands")
    params.set("page", "1")
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => {
      const newSizes = prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
      updateURL(priceRange, newSizes, selectedColors, selectedBrands)
      return newSizes
    })
  }

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => {
      const newColors = prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
      updateURL(priceRange, selectedSizes, newColors, selectedBrands)
      return newColors
    })
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => {
      const newBrands = prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
      updateURL(priceRange, selectedSizes, selectedColors, newBrands)
      return newBrands
    })
  }

  const handleCategoryClick = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("category", value)
    params.set("page", "1")
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const resetFilters = () => {
    setPriceRange([0, 500])
    setSelectedSizes([])
    setSelectedColors([])
    setSelectedBrands([])
    const params = new URLSearchParams(searchParams.toString())
    params.delete("minPrice")
    params.delete("maxPrice")
    params.delete("sizes")
    params.delete("colors")
    params.delete("brands")
    params.delete("category")
    params.set("page", "1")
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="space-y-8">
      {/* Product Categories */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Product Categories</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <button
              key={cat.display}
              onClick={() => handleCategoryClick(cat.value)}
              className="flex items-center justify-between w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>{cat.display}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Filter By Price */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Filter By Price</h3>
        <div className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="w-full" />
          <div className="flex items-center justify-between">
            <Button
              size="sm"
              className="bg-gray-900 hover:bg-gray-800 text-white"
              onClick={() => updateURL(priceRange, selectedSizes, selectedColors, selectedBrands)}
            >
              Filter
            </Button>
            <span className="text-sm text-muted-foreground">
              Price: ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
        </div>
      </div>

      {/* Any Size */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`cursor-pointer px-2 w-fit h-10 border rounded text-sm font-medium transition-colors ${selectedSizes.includes(size)
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-900 border-gray-300 hover:border-gray-900"
                }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Choose Color */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Choose Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleColor(color.name)}
              className={`cursor-pointer w-8 h-8 rounded-full border-2 transition-all ${selectedColors.includes(color.name)
                ? "border-gray-900 scale-110"
                : "border-gray-300 hover:border-gray-500"
                }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Brand</h3>
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <label htmlFor={brand} className="text-sm text-muted-foreground cursor-pointer">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Filter */}
      <Button
        onClick={resetFilters}
        variant="outline"
        className="w-full bg-gray-900 text-white border-gray-900 hover:bg-gray-800"
      >
        RESET FILTER
      </Button>

      {/* Featured Products */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Featured Products</h3>
        <div className="space-y-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
