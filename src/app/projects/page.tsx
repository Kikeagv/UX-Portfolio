export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-900">Your Name</div>
            <div className="hidden space-x-8 md:flex">
              <a
                href="/about"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                About
              </a>
              <a
                href="/projects"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Contact
              </a>
              <a
                href="/cats"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Cats
              </a>
              <a
                href="/extra"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Extra
              </a>
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
            Projects
          </h1>

          <div className="mx-auto max-w-4xl">
            <p className="mb-12 text-center text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Project 1 */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Project Alpha
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      React
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      TypeScript
                    </span>
                  </div>
                  <button className="font-medium text-gray-900 transition-colors hover:text-gray-700">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Project Beta
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Node.js
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      MongoDB
                    </span>
                  </div>
                  <button className="font-medium text-gray-900 transition-colors hover:text-gray-700">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Project 3 */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Project Gamma
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Python
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      TensorFlow
                    </span>
                  </div>
                  <button className="font-medium text-gray-900 transition-colors hover:text-gray-700">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Project 4 */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Project Delta
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Vue.js
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      GraphQL
                    </span>
                  </div>
                  <button className="font-medium text-gray-900 transition-colors hover:text-gray-700">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
