"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

export function CartSummary() {
  const { getTotalPrice } = useCart()

  const subtotal = getTotalPrice()
  const shippingCost = 10.0
  const taxRate = 0.08
  const tax = subtotal * taxRate
  const total = subtotal + shippingCost + tax

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle>Cart Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-2 pt-4">
          <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
          <Button variant="outline" asChild className="w-full bg-transparent">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
