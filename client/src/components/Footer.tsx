import { Github, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    "Frontend Development",
    "UI/UX Design",
    "Video Editing",
    "Graphics Design",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Abhishek<span className="text-primary">.</span>
            </div>
            <p className="text-slate-400">
              A passionate BCA student exploring web development, design, and technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/AbhiEdit16" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/abhishek-gaikwad-712105332" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@ag_editing" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-slate-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Abhishek Gaikwad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
