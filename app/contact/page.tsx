export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <p className="text-lg text-gray-600 mb-8">
          Have a question or suggestion? We'd love to hear from you. Fill out the form below and we'll get back to you
          as soon as possible.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Email</h3>
              <p className="text-gray-600">contact@modernblog.com</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Address</h3>
              <p className="text-gray-600">
                123 Blog Street
                <br />
                San Francisco, CA 94103
                <br />
                United States
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Social Media</h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Instagram
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
