import Link from 'next/link';

export default function Cats() {
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
              <Link
                href="/cats"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Cats
              </Link>
              <Link
                href="/extra"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Extra
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
            Cats
          </h1>

          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-8 text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-lg text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Cat 1 */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Lorem Cat
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Fluffy
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Friendly
                    </span>
                  </div>
                </div>
              </div>

              {/* Cat 2 */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Ipsum Kitty
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Playful
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        Curious
                    </span>
                  </div>
                </div>
              </div>

              {/* Cat 3 */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Dolor Meow
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Sleepy
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Cuddly
                    </span>
                  </div>
                </div>
              </div>

              {/* Cat 4 */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Sit Purr
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Adventurous
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Independent
                    </span>
                  </div>
                </div>
              </div>

              {/* Cat 5 */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Amet Whiskers
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Elegant
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Mysterious
                    </span>
                  </div>
                </div>
              </div>

              {/* Cat 6 */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Consect Fur
                  </h3>
                  <p className="mb-4 text-gray-600">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Mischievous
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      Social
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Lorem Ipsum Cat Facts
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Lorem Cat Behavior
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Ipsum Cat Care
                  </h3>
                  <p className="text-gray-600">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Dolor Cat Health
                  </h3>
                  <p className="text-gray-600">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Sit Cat Breeds
                  </h3>
                  <p className="text-gray-600">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
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
