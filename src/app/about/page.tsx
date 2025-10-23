import Link from 'next/link';

export default function About() {
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
          <h1 className="mb-12 text-center text-4xl font-bold text-gray-900 md:text-5xl">
            About Me
          </h1>

          <div className="mx-auto max-w-4xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <div className="mx-auto mb-6 h-64 w-64 rounded-full bg-gray-300"></div>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Passionate about creating exceptional user experiences
                </h2>
                <p className="mb-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-6 text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">
                      Skills
                    </h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Lorem Research</li>
                      <li>• Ipsum Design</li>
                      <li>• dolor Prototyping</li>
                      <li>• sit amet Design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">
                      Tools
                    </h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Lorem ipsum</li>
                      <li>• dolor sit</li>
                      <li>• amet consectetur</li>
                      <li>• adipiscing elit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                My Journey
              </h2>
              <div className="space-y-8">
                <div className="border-l-2 border-gray-200 pl-8">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">2020 - Present</p>
                  <p className="text-gray-600">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-8">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Consectetur adipiscing
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">2018 - 2020</p>
                  <p className="text-gray-600">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-8">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Sed do eiusmod
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">2016 - 2018</p>
                  <p className="text-gray-600">
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
