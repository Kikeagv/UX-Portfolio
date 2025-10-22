export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Your Name</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <button className="md:hidden text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              UX/UI Designer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mb-12">
              Creating intuitive and beautiful digital experiences that users love.
            </p>
            <div className="flex gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 bg-gray-300 rounded-full mx-auto mb-6"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Passionate about creating exceptional user experiences
                </h3>
                <p className="text-gray-600 mb-4">
                  I'm a UX/UI designer with a keen eye for detail and a passion for solving complex problems through design. With experience in user research, wireframing, prototyping, and visual design, I create digital products that are both beautiful and functional.
                </p>
                <p className="text-gray-600 mb-6">
                  My approach combines user-centered design principles with modern aesthetics to deliver experiences that delight users and drive business results.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• User Research</li>
                      <li>• Wireframing</li>
                      <li>• Prototyping</li>
                      <li>• Visual Design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
                    <ul className="text-gray-600 space-y-1">
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
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mobile Banking App
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Redesigned the user experience for a mobile banking application, focusing on simplicity and accessibility.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      UX Research
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      Mobile Design
                    </span>
                  </div>
                  <button className="text-gray-900 font-medium hover:text-gray-700 transition-colors">
                    View Case Study →
                  </button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    E-commerce Platform
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete UI overhaul for an e-commerce platform, improving conversion rates by 35%.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      Web Design
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      Prototyping
                    </span>
                  </div>
                  <button className="text-gray-900 font-medium hover:text-gray-700 transition-colors">
                    View Case Study →
                  </button>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Healthcare Dashboard
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Designed an intuitive dashboard for healthcare professionals to manage patient data efficiently.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      Dashboard Design
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      Data Visualization
                    </span>
                  </div>
                  <button className="text-gray-900 font-medium hover:text-gray-700 transition-colors">
                    View Case Study →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Get In Touch
            </h2>
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="flex justify-center gap-6 mb-8">
                <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  your.email@example.com
                </a>
                <span className="text-gray-400">•</span>
                <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-gray-900 transition-colors">
                  LinkedIn
                </a>
                <span className="text-gray-400">•</span>
                <a href="https://dribbble.com/yourprofile" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Dribbble
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
