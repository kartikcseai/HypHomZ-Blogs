import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Post {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
  image: string
  slug: string
}

interface FeaturedPostProps {
  post: Post
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="mr-2">{post.date}</span>
            <span className="mr-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
          <p className="text-gray-600 mb-6">{post.excerpt}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">By {post.author}</span>
            <span className="text-sm font-medium px-2 py-1 bg-gray-100 rounded-full">{post.category}</span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors"
          >
            Read article
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
