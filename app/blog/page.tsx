import BlogCard from "@/components/blog-card"

export default function BlogPage() {
  // This would typically come from a CMS or API
  const posts = [
    {
      id: "1",
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js and React.",
      date: "April 10, 2025",
      author: "Jane Smith",
      category: "Development",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "getting-started-with-nextjs",
    },
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
    {
      id: "7",
      title: "CSS Grid vs Flexbox",
      excerpt: "Understanding when to use CSS Grid and when to use Flexbox for layouts.",
      date: "March 25, 2025",
      author: "Lisa Wang",
      category: "CSS",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "css-grid-vs-flexbox",
    },
    {
      id: "8",
      title: "State Management in React",
      excerpt: "Comparing different state management solutions for React applications.",
      date: "March 22, 2025",
      author: "Robert Johnson",
      category: "React",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "state-management-in-react",
    },
    {
      id: "9",
      title: "Responsive Design Best Practices",
      excerpt: "Essential techniques for creating truly responsive web experiences.",
      date: "March 20, 2025",
      author: "Amanda Lee",
      category: "Design",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "responsive-design-best-practices",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600">Discover the latest articles and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
