import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Your Name
            </Link>
            <div className="hidden space-x-8 md:flex">
              <Link
                href="/about"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
            <button className="text-gray-600 hover:text-gray-900 md:hidden">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 md:text-5xl">
            Contact
          </h1>

          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-8 text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="mb-8 flex justify-center gap-6">
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 transition-colors hover:text-gray-900"
                >
                  your.email@example.com
                </a>
                <span className="text-gray-400">•</span>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="text-gray-600 transition-colors hover:text-gray-900"
                >
                  LinkedIn
                </a>
                <span className="text-gray-400">•</span>
                <a
                  href="https://dribbble.com/yourprofile"
                  className="text-gray-600 transition-colors hover:text-gray-900"
                >
                  Dribbble
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-gray-900"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-gray-900"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-gray-900"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-gray-900"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="rounded-lg bg-gray-900 px-8 py-3 text-white transition-colors hover:bg-gray-800"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
