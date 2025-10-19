"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, Eye, Download, RefreshCw } from "lucide-react"
import Image from "next/image"

export function OrderHistory() {
  const [orders] = useState([
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 156.99,
      items: [
        {
          name: "Wooden container Bowl",
          price: 96.0,
          quantity: 1,
          image: "/wooden-container-bowl-modern.png",
        },
        {
          name: "Set of 2 baskets",
          price: 60.99,
          quantity: 1,
          image: "/woven-baskets-set-modern-home.png",
        },
      ],
      shippingAddress: "123 Main Street, New York, NY 10001",
      trackingNumber: "TRK123456789",
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "Shipped",
      total: 89.5,
      items: [
        {
          name: "Evitra Rocking Chair",
          price: 89.5,
          quantity: 1,
          image: "/modern-rocking-chair-design.png",
        },
      ],
      shippingAddress: "123 Main Street, New York, NY 10001",
      trackingNumber: "TRK987654321",
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      status: "Processing",
      total: 234.75,
      items: [
        {
          name: "Hauteville Plywood Chair",
          price: 320.0,
          quantity: 1,
          image: "/plywood-chair-hauteville-modern.png",
        },
      ],
      shippingAddress: "123 Main Street, New York, NY 10001",
      trackingNumber: null,
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-500"
      case "Shipped":
        return "bg-blue-500"
      case "Processing":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Order History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{order.id}</h3>
                    <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <Badge className={`${getStatusColor(order.status)} text-white`}>{order.status}</Badge>
                    <span className="text-lg font-semibold">${order.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded">
                      <div className="w-16 h-16 bg-white rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground mb-4">
                  <p>
                    <strong>Shipping Address:</strong> {order.shippingAddress}
                  </p>
                  {order.trackingNumber && (
                    <p>
                      <strong>Tracking Number:</strong> {order.trackingNumber}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  {order.status === "Delivered" && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Invoice
                    </Button>
                  )}
                  {order.trackingNumber && (
                    <Button variant="outline" size="sm">
                      <Package className="h-4 w-4 mr-2" />
                      Track Order
                    </Button>
                  )}
                  {order.status === "Delivered" && (
                    <Button variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Reorder
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
