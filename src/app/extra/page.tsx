export default function Extra() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">
            Extra
          </h1>

          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="text-muted-foreground mb-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-muted-foreground text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            <div className="space-y-12">
              {/* Section 1 */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">Lorem Ipsum Dolor</h2>
                <p className="text-muted-foreground mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p className="text-muted-foreground">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">
                  Sit Amet Consectetur
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-card rounded-lg p-6">
                    <h3 className="mb-3 text-xl font-semibold">
                      Adipiscing Elit
                    </h3>
                    <p className="text-muted-foreground">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident.
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-6">
                    <h3 className="mb-3 text-xl font-semibold">
                      Sed Do Eiusmod
                    </h3>
                    <p className="text-muted-foreground">
                      Tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">
                  Additional Resources
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary mt-1 h-2 w-2 rounded-full"></div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">
                        Lorem Resource Link
                      </h3>
                      <p className="text-muted-foreground">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary mt-1 h-2 w-2 rounded-full"></div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">
                        Ipsum Documentation
                      </h3>
                      <p className="text-muted-foreground">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary mt-1 h-2 w-2 rounded-full"></div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">
                        Dolor Community Forum
                      </h3>
                      <p className="text-muted-foreground">
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
                <h2 className="mb-6 text-3xl font-bold">Quick Stats</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold">123</div>
                    <div className="text-muted-foreground">Lorem Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold">456</div>
                    <div className="text-muted-foreground">Ipsum Features</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold">789</div>
                    <div className="text-muted-foreground">Dolor Users</div>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-primary text-primary-foreground rounded-lg p-8">
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
                      className="border-input bg-background text-foreground flex-1 rounded-lg border px-4 py-2"
                    />
                    <button className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-6 py-2 font-semibold transition-colors">
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
