import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Lighting
              <br />
              <span className="text-orange-500">Creative Furniture</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis.
            </p>
            <Link href={"/shop"}>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                SHOP NOW
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4 mb-10">
                <Image
                  src="/modern-pendant-light-geometric-black.png"
                  alt="Modern Pendant Light"
                  width={300}
                  height={350}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <div className="space-y-4 mt-10">
                <Image
                  src="/geometric-pendant-light-modern-design.png"
                  alt="Geometric Light"
                  width={300}
                  height={350}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
