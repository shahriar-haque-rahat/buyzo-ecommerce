"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ShoppingCart, Menu, User, Heart, Bookmark, Home, ShoppingBag, BookOpen, Contact } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/contexts/cart-context"
import { useBookmarks } from "@/contexts/bookmarks-context"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function Header() {
  const { getTotalItems, toggleCart } = useCart()
  const { state: bookmarksState } = useBookmarks()
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  // Define route paths for active state
  const routes = {
    "/": "Home",
    "/shop": "Shop",
    "/blog": "Blog",
    "/contact": "Contact",
  }

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto pl-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">Buyzo</span>
            <span className="text-orange-500 text-2xl">°</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {Object.entries(routes).map(([path, label]) => (
              <Link
                key={path}
                href={path}
                className={`text-foreground hover:text-orange-500 transition-colors ${pathname === path ? "text-orange-500 font-semibold underline underline-offset-4" : ""
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center space-x-2">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-64 bg-gray-50 border-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="hidden md:flex" asChild>
                <Link href="/profile">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex relative" asChild>
                <Link href="/bookmarks">
                  <Heart className="h-5 w-5" />
                  {bookmarksState.items.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {bookmarksState.items.length}
                    </Badge>
                  )}
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="relative" onClick={toggleCart}>
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-accent rounded-full"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 p-6">
                <div className="flex flex-col h-full">
                  {/* Main Menu */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-muted-foreground tracking-wide">
                      Main Menu
                    </h3>
                    <nav className="flex flex-col space-y-3">
                      {Object.entries(routes).map(([path, label]) => (
                        <Link
                          key={path}
                          href={path}
                          className={`flex items-center gap-2 text-lg font-medium hover:text-orange-500 transition-colors ${pathname === path ? "text-orange-500 font-semibold" : ""
                            }`}
                        >
                          {path === "/" && <Home className="h-5 w-5" />}
                          {path === "/shop" && <ShoppingBag className="h-5 w-5" />}
                          {path === "/blog" && <BookOpen className="h-5 w-5" />}
                          {path === "/contact" && <Contact className="h-5 w-5" />}
                          {label}
                        </Link>
                      ))}
                    </nav>
                  </div>

                  {/* Search */}
                  <div className="pt-6 border-t mt-6">
                    <form onSubmit={handleSearch} className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search products..."
                        className="pl-10 rounded-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </form>
                  </div>

                  {/* Account Links */}
                  <div className="pt-6 border-t mt-6 space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground tracking-wide">
                      Account
                    </h3>
                    <Link
                      href="/profile"
                      className={`flex items-center gap-2 text-lg font-medium hover:text-orange-500 transition-colors ${pathname === "/profile" ? "text-orange-500 font-semibold" : ""
                        }`}
                    >
                      <User className="h-5 w-5" /> Profile
                    </Link>
                    <Link
                      href="/bookmarks"
                      className={`flex items-center gap-2 text-lg font-medium hover:text-orange-500 transition-colors ${pathname === "/bookmarks" ? "text-orange-500 font-semibold" : ""
                        }`}
                    >
                      <Bookmark className="h-5 w-5" /> Bookmarks ({bookmarksState.items.length})
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}