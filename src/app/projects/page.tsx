export default function Projects() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">
            Projects
          </h1>

          <div className="mx-auto max-w-4xl">
            <p className="text-muted-foreground mb-12 text-center text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Project 1 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Project Alpha</h3>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      React
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      TypeScript
                    </span>
                  </div>
                  <button className="hover:text-primary font-medium transition-colors">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Project Beta</h3>
                  <p className="text-muted-foreground mb-4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Node.js
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      MongoDB
                    </span>
                  </div>
                  <button className="hover:text-primary font-medium transition-colors">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Project 3 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Project Gamma</h3>
                  <p className="text-muted-foreground mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Python
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      TensorFlow
                    </span>
                  </div>
                  <button className="hover:text-primary font-medium transition-colors">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Project 4 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Project Delta</h3>
                  <p className="text-muted-foreground mb-4">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Vue.js
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      GraphQL
                    </span>
                  </div>
                  <button className="hover:text-primary font-medium transition-colors">
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
