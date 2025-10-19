import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/data/blog.data"

export function BlogSection() {

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Blog Posts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mirum est notare quam littera gothica, quam nunc putamus parum claram
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold text-foreground hover:text-orange-500 transition-colors mb-3">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <Button variant="link" className="p-0 h-auto text-orange-500 hover:text-orange-600">
                    READ MORE
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
