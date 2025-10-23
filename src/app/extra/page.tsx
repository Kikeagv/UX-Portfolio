import Link from "next/link";

export default function Extra() {
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
            Extra
          </h1>

          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-8 text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-lg text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            <div className="space-y-12">
              {/* Section 1 */}
              <section>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Lorem Ipsum Dolor
                </h2>
                <p className="mb-4 text-gray-600">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p className="text-gray-600">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Sit Amet Consectetur
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      Adipiscing Elit
                    </h3>
                    <p className="text-gray-600">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      Sed Do Eiusmod
                    </h3>
                    <p className="text-gray-600">
                      Tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Additional Resources
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-gray-900"></div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">
                        Lorem Resource Link
                      </h3>
                      <p className="text-gray-600">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-gray-900"></div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">
                        Ipsum Documentation
                      </h3>
                      <p className="text-gray-600">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-gray-900"></div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">
                        Dolor Community Forum
                      </h3>
                      <p className="text-gray-600">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Quick Stats
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold text-gray-900">
                      123
                    </div>
                    <div className="text-gray-600">Lorem Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold text-gray-900">
                      456
                    </div>
                    <div className="text-gray-600">Ipsum Features</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold text-gray-900">
                      789
                    </div>
                    <div className="text-gray-600">Dolor Users</div>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-16 text-center">
              <div className="rounded-lg bg-gray-900 p-8 text-white">
                <h2 className="mb-4 text-2xl font-bold">Stay Connected</h2>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join
                  our newsletter for the latest updates.
                </p>
                <div className="mx-auto max-w-md">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="flex-1 rounded-lg px-4 py-2 text-gray-900"
                    />
                    <button className="rounded-lg bg-white px-6 py-2 font-semibold text-gray-900 transition-colors hover:bg-gray-100">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
