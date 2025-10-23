export default function Contact() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">
            Contact
          </h1>

          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="text-muted-foreground mb-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="mb-8 flex justify-center gap-6">
                <a
                  href="mailto:your.email@example.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  your.email@example.com
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href="https://dribbble.com/yourprofile"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dribbble
                </a>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="border-input bg-background focus:ring-ring w-full rounded-lg border px-4 py-2 transition-all outline-none focus:border-transparent focus:ring-2"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border-input bg-background focus:ring-ring w-full rounded-lg border px-4 py-2 transition-all outline-none focus:border-transparent focus:ring-2"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="border-input bg-background focus:ring-ring w-full rounded-lg border px-4 py-2 transition-all outline-none focus:border-transparent focus:ring-2"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="border-input bg-background focus:ring-ring w-full resize-none rounded-lg border px-4 py-2 transition-all outline-none focus:border-transparent focus:ring-2"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-3 transition-colors"
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
