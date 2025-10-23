"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link?.hash) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Your Name</h1>
            <p className="text-muted-foreground mb-8 text-xl md:text-2xl">
              UX/UI Designer
            </p>
            <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
              Creating intuitive and beautiful digital experiences that users
              love.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-3 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border-border text-foreground hover:bg-accent rounded-lg border px-8 py-3 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="flex min-h-screen items-center py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              About Me
            </h2>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <div className="bg-muted mx-auto mb-6 h-64 w-64 rounded-full"></div>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-semibold">
                  Passionate about creating exceptional user experiences
                </h3>
                <p className="text-muted-foreground mb-4">
                  I&apos;m a UX/UI designer with a keen eye for detail and a
                  passion for solving complex problems through design. With
                  experience in user research, wireframing, prototyping, and
                  visual design, I create digital products that are both
                  beautiful and functional.
                </p>
                <p className="text-muted-foreground mb-6">
                  My approach combines user-centered design principles with
                  modern aesthetics to deliver experiences that delight users
                  and drive business results.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="mb-2 font-semibold">Skills</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• User Research</li>
                      <li>• Wireframing</li>
                      <li>• Prototyping</li>
                      <li>• Visual Design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Tools</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Figma</li>
                      <li>• Adobe Creative Suite</li>
                      <li>• Sketch</li>
                      <li>• Framer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex min-h-screen items-center py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    Mobile Banking App
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Redesigned the user experience for a mobile banking
                    application, focusing on simplicity and accessibility.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      UX Research
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Mobile Design
                    </span>
                  </div>
                  <button className="hover:text-primary font-medium transition-colors">
                    View Case Study →
                  </button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    E-commerce Platform
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Complete UI overhaul for an e-commerce platform, improving
                    conversion rates by 35%.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Web Design
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Prototyping
                    </span>
                  </div>
                  <button className="hover:text-primary font-medium transition-colors">
                    View Case Study →
                  </button>
                </div>
              </div>

              {/* Project 3 */}
              <div className="border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    Healthcare Dashboard
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Designed an intuitive dashboard for healthcare professionals
                    to manage patient data efficiently.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Dashboard Design
                    </span>
                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      Data Visualization
                    </span>
                  </div>
                  <button className="hover:text-primary font-medium transition-colors">
                    View Case Study →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex min-h-screen items-center py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              Get In Touch
            </h2>
            <div className="mb-12 text-center">
              <p className="text-muted-foreground mb-8 text-lg">
                I&apos;m always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
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
                    placeholder="Tell me about your project..."
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
      </section>
    </div>
  );
}
