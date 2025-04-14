import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About ModernBlog</h1>

        <div className="relative w-full h-[300px] mb-8">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Our team" fill className="object-cover rounded-lg" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to ModernBlog, a platform dedicated to sharing knowledge and insights about web development, design,
            technology, and more. Our mission is to provide high-quality content that helps developers and designers
            stay up-to-date with the latest trends and best practices.
          </p>

          <h2>Our Story</h2>
          <p>
            ModernBlog was founded in 2023 by a group of passionate web developers and designers who wanted to create a
            space where they could share their knowledge and experiences with the community. What started as a small
            personal blog has grown into a comprehensive resource for developers of all skill levels.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to make web development knowledge accessible to everyone. We believe that learning should be
            continuous and that sharing knowledge is one of the best ways to grow as a professional. Through our
            articles, tutorials, and resources, we aim to empower developers to build better websites and applications.
          </p>

          <h2>Our Team</h2>
          <p>
            Our team consists of experienced developers, designers, and content creators who are passionate about web
            technologies. Each member brings their unique perspective and expertise to the table, allowing us to cover a
            wide range of topics with depth and accuracy.
          </p>

          <h2>Contact Us</h2>
          <p>
            We love hearing from our readers! If you have any questions, suggestions, or would like to contribute to
            ModernBlog, please don't hesitate to reach out to us through our contact page.
          </p>
        </div>
      </div>
    </div>
  )
}
