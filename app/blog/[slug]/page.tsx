import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BlogPostParams {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostParams) {
  // In a real app, you would fetch the post data based on the slug
  // This is just mock data for demonstration
  const post = {
    title: "Getting Started with Next.js",
    date: "April 10, 2025",
    author: "Jane Smith",
    category: "Development",
    readTime: "5 min read",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Next.js is a powerful React framework that makes building web applications simple and efficient. It provides a great developer experience with features like server-side rendering, static site generation, and more.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js solves many common problems in React development and provides an excellent developer experience. Some of the key benefits include:</p>
      <ul>
        <li>Server-side rendering for improved performance and SEO</li>
        <li>Automatic code splitting for faster page loads</li>
        <li>Simple client-side routing</li>
        <li>API routes for backend functionality</li>
        <li>Built-in CSS and Sass support</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js app, you can use the create-next-app command:</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      
      <p>This will set up a new Next.js project with all the necessary configuration. You can then start the development server:</p>
      <pre><code>cd my-next-app
npm run dev</code></pre>
      
      <h2>Key Concepts</h2>
      <p>Next.js introduces several key concepts that make it different from a standard React application:</p>
      
      <h3>Pages</h3>
      <p>In Next.js, a page is a React Component exported from a file in the pages directory. Each page is associated with a route based on its file name.</p>
      
      <h3>Data Fetching</h3>
      <p>Next.js provides several ways to fetch data for your pages:</p>
      <ul>
        <li>getStaticProps: Fetch data at build time</li>
        <li>getStaticPaths: Specify dynamic routes to pre-render based on data</li>
        <li>getServerSideProps: Fetch data on each request</li>
      </ul>
      
      <h3>API Routes</h3>
      <p>Next.js allows you to create API endpoints as Node.js serverless functions. These can be used to handle form submissions, database access, or any other server-side functionality.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js provides a powerful and flexible framework for building modern web applications. Whether you're building a simple blog or a complex e-commerce site, Next.js has the tools and features you need to succeed.</p>
    `,
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all articles
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center text-gray-600 mb-6">
          <span className="mr-4">{post.date}</span>
          <span className="mr-4">By {post.author}</span>
          <span className="mr-4">{post.category}</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="relative w-full h-[400px] mb-8">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
      </div>

      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
