export default function About() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">
            About Me
          </h1>

          <div className="mx-auto max-w-4xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <div className="bg-muted mx-auto mb-6 h-64 w-64 rounded-full"></div>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  Passionate about creating exceptional user experiences
                </h2>
                <p className="text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-muted-foreground mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="mb-2 font-semibold">Skills</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Lorem Research</li>
                      <li>• Ipsum Design</li>
                      <li>• dolor Prototyping</li>
                      <li>• sit amet Design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Tools</h4>
                    <ul className="text-muted-foreground space-y-1">
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
              <h2 className="mb-8 text-center text-3xl font-bold">
                My Journey
              </h2>
              <div className="space-y-8">
                <div className="border-border border-l-2 pl-8">
                  <h3 className="mb-2 text-xl font-semibold">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-muted-foreground mb-2 text-sm">
                    2020 - Present
                  </p>
                  <p className="text-muted-foreground">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                </div>
                <div className="border-border border-l-2 pl-8">
                  <h3 className="mb-2 text-xl font-semibold">
                    Consectetur adipiscing
                  </h3>
                  <p className="text-muted-foreground mb-2 text-sm">
                    2018 - 2020
                  </p>
                  <p className="text-muted-foreground">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate.
                  </p>
                </div>
                <div className="border-border border-l-2 pl-8">
                  <h3 className="mb-2 text-xl font-semibold">Sed do eiusmod</h3>
                  <p className="text-muted-foreground mb-2 text-sm">
                    2016 - 2018
                  </p>
                  <p className="text-muted-foreground">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus.
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
