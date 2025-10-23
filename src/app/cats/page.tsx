export default function Cats() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">
            Cats
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

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Cat 1 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Lorem Cat</h3>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Fluffy
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Friendly
                    </span>
                  </div>
                </div>
              </div>

              {/* Cat 2 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Ipsum Kitty</h3>
                  <p className="text-muted-foreground mb-4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Playful
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Curious
                    </span>
                  </div>
                </div>
              </div>

              {/* Cat 3 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Dolor Meow</h3>
                  <p className="text-muted-foreground mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Sleepy
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Cuddly
                    </span>
                  </div>
                </div>
              </div>

              {/* Cat 4 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Sit Purr</h3>
                  <p className="text-muted-foreground mb-4">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Adventurous
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Independent
                    </span>
                  </div>
                </div>
              </div>

              {/* Cat 5 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Amet Whiskers</h3>
                  <p className="text-muted-foreground mb-4">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Elegant
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Mysterious
                    </span>
                  </div>
                </div>
              </div>

              {/* Cat 6 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Consect Fur</h3>
                  <p className="text-muted-foreground mb-4">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Mischievous
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Social
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="mb-8 text-3xl font-bold">Lorem Ipsum Cat Facts</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-card rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Lorem Cat Behavior
                  </h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">Ipsum Cat Care</h3>
                  <p className="text-muted-foreground">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Dolor Cat Health
                  </h3>
                  <p className="text-muted-foreground">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">Sit Cat Breeds</h3>
                  <p className="text-muted-foreground">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias.
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
