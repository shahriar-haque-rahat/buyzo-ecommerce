"use client"

import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import Image from "next/image"

export function CartItems() {
  const { state, updateQuantity, removeItem } = useCart()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Cart Items</h2>

      <div className="space-y-4">
        {state.items.map((item) => (
          <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 p-6 bg-white border rounded-lg">
            <div className="w-24 h-24 bg-gray-50 rounded overflow-hidden flex-shrink-0">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-lg mb-2">{item.name}</h3>
              <div className="text-sm text-muted-foreground mb-3">
                {item.size && <span>Size: {item.size}</span>}
                {item.size && item.color && <span> • </span>}
                {item.color && <span>Color: {item.color}</span>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-10 w-10 p-0"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 min-w-[60px] text-center font-medium">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-10 w-10 p-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Remove
                  </Button>
                </div>

                <div className="text-right">
                  <div className="text-lg font-semibold text-foreground">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  {item.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      ${(item.originalPrice * item.quantity).toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
