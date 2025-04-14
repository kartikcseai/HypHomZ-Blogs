import Image from "next/image"
import Link from "next/link"

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

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="mr-2">{post.date}</span>
            <span className="mr-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">By {post.author}</span>
            <span className="text-sm font-medium px-2 py-1 bg-gray-100 rounded-full">{post.category}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
