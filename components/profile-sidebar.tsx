"use client"

import { useState, useEffect } from "react"
import { User, Package, Heart, Settings, MapPin, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function ProfileSidebar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("profile")

  useEffect(() => {
    if (pathname.includes("/orders")) setActiveSection("orders")
    else if (pathname.includes("/bookmarks")) setActiveSection("bookmarks")
    else if (pathname.includes("/addresses")) setActiveSection("addresses")
    else if (pathname.includes("/settings")) setActiveSection("settings")
    else setActiveSection("profile")
  }, [pathname])

  const menuItems = [
    { id: "profile", label: "Profile Information", icon: User, href: "/profile" },
    { id: "orders", label: "Order History", icon: Package, href: "/profile/orders" },
    { id: "bookmarks", label: "Bookmarks", icon: Heart, href: "/bookmarks" },
    { id: "addresses", label: "Address Book", icon: MapPin, href: "/profile/addresses" },
    { id: "settings", label: "Account Settings", icon: Settings, href: "/profile/settings" },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">John Doe</h3>
            <p className="text-sm text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className={`w-full justify-start ${
                  activeSection === item.id ? "bg-orange-500 hover:bg-orange-600 text-white" : "hover:bg-gray-100"
                }`}
                asChild
              >
                <Link href={item.href}>
                  <Icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Link>
              </Button>
            )
          })}

          <div className="pt-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50">
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </Button>
          </div>
        </nav>
      </CardContent>
    </Card>
  )
}
