"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface Product {
  features: string[]
  longDescription: string
  reviewCount: number
}

interface ProductTabsProps {
  product: Product
}

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description")

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "reviews", label: `Reviews (${product.reviewCount})` },
  ]

  return (
    <div className="border-t pt-8 mb-16">
      {/* Tab Navigation */}
      <div className="flex border-b mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl">
        {activeTab === "description" && (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
          </div>
        )}

        {activeTab === "additional" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Material</h4>
                <p className="text-sm text-muted-foreground">Premium Wood</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Dimensions</h4>
                <p className="text-sm text-muted-foreground">15cm x 15cm x 8cm</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Weight</h4>
                <p className="text-sm text-muted-foreground">0.5kg</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Care Instructions</h4>
                <p className="text-sm text-muted-foreground">Hand wash only</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
            <div className="border-t pt-6">
              <h4 className="font-medium text-foreground mb-4">Write a Review</h4>
              <p className="text-sm text-muted-foreground">
                Share your experience with this product to help other customers make informed decisions.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}