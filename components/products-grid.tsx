"use client"

import { useState, useMemo, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Grid, List, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"
import { products as allProducts } from "@/data/product.data"

const ITEMS_PER_PAGE = 9

interface ProductsGridProps {
  searchQuery?: string
}

export function ProductsGrid({ searchQuery = "" }: ProductsGridProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const category = searchParams.get("category") || ""
  const minPrice = parseFloat(searchParams.get("minPrice") || "0")
  const maxPrice = parseFloat(searchParams.get("maxPrice") || "500")
  const sizes = searchParams?.get("sizes")?.split(",") || []
  const colors = searchParams?.get("colors")?.split(",") || []
  const brands = searchParams?.get("brands")?.split(",") || []
  const page = parseInt(searchParams.get("page") || "1", 10)

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "default")

  useEffect(() => {
    setSortBy(searchParams.get("sortBy") || "default")
  }, [searchParams])

  const updateURL = (updates: { [key: string]: string | null }) => {
    const params = new URLSearchParams(searchParams.toString())
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) {
        params.delete(key)
      } else {
        params.set(key, value)
      }
    })
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (category && product.category.toLowerCase() !== category.toLowerCase()) return false
      if (
        searchQuery.trim() &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false
      if (product.price < minPrice || product.price > maxPrice) return false
      if (sizes.length > 0 && !product.sizes.some((s) => sizes.includes(s))) return false
      if (colors.length > 0 && !product.colors.some((c) => colors.includes(c))) return false
      if (brands.length > 0 && !brands.includes(product.brand)) return false
      return true
    })
  }, [searchQuery, category, minPrice, maxPrice, sizes, colors, brands])

  const sortedProducts = useMemo(() => {
    const productsCopy = [...filteredProducts]
    switch (sortBy) {
      case "price-low":
        return productsCopy.sort((a, b) => a.price - b.price)
      case "price-high":
        return productsCopy.sort((a, b) => b.price - a.price)
      case "name":
        return productsCopy.sort((a, b) => a.name.localeCompare(b.name))
      case "newest":
        return productsCopy.sort((a, b) => b.id - a.id)
      default:
        return productsCopy
    }
  }, [filteredProducts, sortBy])

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = sortedProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handleSortChange = (value: string) => {
    setSortBy(value)
    updateURL({ sortBy: value, page: "1" })
  }

  const handlePageChange = (newPage: number) => {
    updateURL({ page: newPage.toString() })
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b">
        <p className="text-sm text-muted-foreground">
          Showing {paginatedProducts.length} of {filteredProducts.length} results
        </p>

        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <Select value={sortBy} onValueChange={handleSortChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Default Sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default Sorting</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name: A to Z</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>

          {/* View Toggle */}
          <div className="flex items-center border rounded">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {paginatedProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-foreground mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              variant={p === page ? "outline" : "ghost"}
              size="sm"
              onClick={() => handlePageChange(p)}
            >
              {p}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}