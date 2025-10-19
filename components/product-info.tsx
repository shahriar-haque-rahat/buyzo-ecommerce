"use client"

import { useState } from "react"
import { Star, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  description: string
  sizes: string[]
  colors: string[]
  inStock: boolean
  images: string[]
}

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const { addItem, openCart } = useCart()

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color")
      return
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
    })
    openCart()
  }

  return (
    <div className="space-y-6">
      {/* Product Title and Badges */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {product.originalPrice && <Badge className="bg-orange-500 text-white">-{discountPercentage}%</Badge>}
          <Badge className="bg-gray-900 text-white">Featured</Badge>
        </div>
        <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          ({product.reviewCount} rating{product.reviewCount !== 1 ? "s" : ""})
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
        )}
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">{product.description}</p>

      {/* Size Selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Size<span className="text-red-500">*</span>
        </label>
        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="- Please select -" />
          </SelectTrigger>
          <SelectContent>
            {product.sizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Color Selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Color<span className="text-red-500">*</span>
        </label>
        <Select value={selectedColor} onValueChange={setSelectedColor}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="- Please select -" />
          </SelectTrigger>
          <SelectContent>
            {product.colors.map((color) => (
              <SelectItem key={color} value={color}>
                {color}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Required Fields Notice */}
      <p className="text-sm text-red-500">Required Fields *</p>

      {/* Quantity and Add to Cart */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded">
          <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(-1)} className="px-3">
            <Minus className="h-4 w-4" />
          </Button>
          <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
          <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(1)} className="px-3">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <Button
          onClick={handleAddToCart}
          className="flex-1 bg-gray-900 hover:bg-gray-800 text-white h-12"
          disabled={!product.inStock}
        >
          {product.inStock ? "+ ADD TO CART" : "OUT OF STOCK"}
        </Button>
      </div>
    </div>
  )
}