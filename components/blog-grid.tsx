"use client"

import { useMemo, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/data/blog.data"

const ITEMS_PER_PAGE = 3

export function BlogGrid() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const page = parseInt(searchParams?.get("page") || "1", 10)

  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE)
  const paginatedPosts = useMemo(() => {
    return blogPosts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
  }, [page])

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams?.toString() || "")
    params.set("page", newPage.toString())
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  // Ensure page is within valid range
  useEffect(() => {
    if (page < 1 || page > totalPages) {
      handlePageChange(1)
    }
  }, [page, totalPages])

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>

              <Link href={`/blog/${post.id}`} className=" ">
                <h3 className="text-xl font-semibold text-foreground hover:text-orange-500 transition-colors mb-3">{post.title}</h3>
              </Link>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                </div>

                <Button variant="ghost" size="sm" className=" bg-orange-500 hover:bg-orange-600 text-white hover:text-white" asChild>
                  <Link href={`/blog/${post.id}`}>
                    Read More <ArrowRight className="h-10 w-10" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

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
