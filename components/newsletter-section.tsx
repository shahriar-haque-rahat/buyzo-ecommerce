import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Discount Info</h2>
            <p className="text-muted-foreground">
              Subscribe to the mailing list to receive updates on new arrivals, special offers and other discount
              information.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Your Email Address" className="flex-1 bg-white border-gray-300" />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">SUBSCRIBE</Button>
          </div>

          {/* Brand Logos */}
<div className="mt-12 pt-8 border-t border-gray-200">
  <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-60">
    <div className="text-xl sm:text-2xl font-bold text-gray-400">BRAND</div>
    <div className="text-xl sm:text-2xl font-bold text-gray-400">QUALITY</div>
    <div className="text-xl sm:text-2xl font-bold text-gray-400">MODERN</div>
    <div className="text-xl sm:text-2xl font-bold text-gray-400">PREMIUM</div>
    <div className="text-xl sm:text-2xl font-bold text-gray-400">RELIABLE</div>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}
