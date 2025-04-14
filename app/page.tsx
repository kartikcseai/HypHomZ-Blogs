import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BlogCard from "@/components/blog-card"
import FeaturedPost from "@/components/featured-post"

export default function Home() {
  // This would typically come from a CMS or API
  const featuredPost = {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js and React.",
    date: "April 10, 2025",
    author: "Jane Smith",
    category: "Development",
    readTime: "5 min read",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "getting-started-with-nextjs",
  }

  const posts = [
    {
      id: "2",
      title: "Mastering Tailwind CSS",
      excerpt: "Discover how to create beautiful, responsive designs with Tailwind CSS.",
      date: "April 8, 2025",
      author: "John Doe",
      category: "Design",
      readTime: "4 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "mastering-tailwind-css",
    },
    {
      id: "3",
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies in web development for 2025 and beyond.",
      date: "April 5, 2025",
      author: "Sarah Johnson",
      category: "Technology",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "future-of-web-development",
    },
    {
      id: "4",
      title: "Building Accessible Websites",
      excerpt: "Learn how to make your websites accessible to everyone with these practical tips.",
      date: "April 2, 2025",
      author: "Michael Brown",
      category: "Accessibility",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "building-accessible-websites",
    },
    {
      id: "5",
      title: "Optimizing Website Performance",
      excerpt: "Techniques to improve your website's speed and overall performance.",
      date: "March 30, 2025",
      author: "Emily Chen",
      category: "Performance",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "optimizing-website-performance",
    },
    {
      id: "6",
      title: "Introduction to TypeScript",
      excerpt: "Why TypeScript is becoming essential for modern JavaScript development.",
      date: "March 28, 2025",
      author: "David Wilson",
      category: "Development",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "introduction-to-typescript",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Post</h2>
        </div>
        <FeaturedPost post={featuredPost} />
      </section>

      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Link href="/blog" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            View all
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
