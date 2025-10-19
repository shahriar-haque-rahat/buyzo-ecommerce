"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog.data"
import { useEffect, useState } from "react"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  // Simple Markdown to HTML conversion
  const [htmlContent, setHtmlContent] = useState<string>("")
  useEffect(() => {
    const convertMarkdownToHtml = (markdown: string) => {
      let html = markdown
        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-foreground mt-6 mb-3">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">$1</h2>')
        .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-extrabold text-foreground mt-10 mb-5">$1</h1>')
        .replace(/^\- (.*$)/gim, '<li class="ml-6 list-disc text-gray-700">$1</li>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
        .replace(/\n/g, "<br />")
        .replace(/<li>/g, '<ul><li>')
        .replace(/<\/li>/g, '</li></ul>')
        .replace(/<\/ul><ul>/g, '')
        .replace(/^<br \/>/g, '')

      html = `<div class="prose prose-gray max-w-none leading-relaxed">${html}</div>`
      setHtmlContent(html)
    }
    convertMarkdownToHtml(post.content)
  }, [post.content])

  return (
    <div className="min-h-screen bg-background text-gray-800">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
            {post.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex justify-center gap-6 text-sm text-gray-200">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" /> {post.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {post.date}
            </div>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <article className="lg:col-span-8">
          <div
            className="blog-content prose-lg prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Callout Box */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-xl my-10">
            <h3 className="font-semibold text-orange-600 mb-2">💡 Pro Tip</h3>
            <p className="text-sm text-gray-700">
              Always balance hanging elements with grounded furniture for harmony. Too many suspended items can make a room feel chaotic.
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">You may also like</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {blogPosts.filter((b) => b.id !== post.id).slice(0, 2).map((related) => (
                <div key={related.id} className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition">
                  <Image
                    src={related.image}
                    alt={related.title}
                    width={400}
                    height={250}
                    className="rounded-md object-cover mb-3"
                  />
                  <h4 className="font-semibold text-lg mb-2">{related.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{related.excerpt.substring(0, 100)}...</p>
                  <a href={`/blog/${related.id}`} className="text-orange-600 text-sm font-medium hover:underline">
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Key Takeaways */}
          <div className="bg-gray-50 p-6 rounded-lg shadow sticky top-20">
            <h3 className="text-lg font-semibold mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {post.content.match(/^\*\*.*?\*\*/gm)?.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  {item.replace(/\*\*/g, "")}
                </li>
              )) || <li>No highlights available</li>}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {[...new Set(blogPosts.map((p) => p.category))].map((cat) => (
                <Badge key={cat} variant="outline" className="cursor-pointer hover:bg-orange-100">
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  )
}