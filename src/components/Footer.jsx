import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const info = {
    name: "MD. ZUBAER HOSSAIN",
    email: "zubaer.developer@gmail.com",
    github: "https://github.com/zubaer-developer",
    linkedin: "https://www.linkedin.com/in/md-zubaer-hossain-137134356/",
  };

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Current Year for Copyright
  const currentYear = new Date().getFullYear();

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-neutral text-neutral-content">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-60 justify-items-center">
          {/* Column 1: Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">ZUBAER</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating modern web
              applications with clean code and great user experience.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
                title="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
                title="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={`mailto:${info.email}`}
                className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
                title="Email"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400">📧 {info.email}</p>
              <p className="text-gray-400">📍 Bangladesh</p>
              <a
                href={`mailto:${info.email}`}
                className="btn btn-primary btn-sm mt-3"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {info.name}. All rights reserved.
            </p>

            {/* Made with Love */}
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <FaHeart className="text-red-500" /> using React &
              TailwindCSS
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="btn btn-circle btn-sm btn-primary"
              title="Back to Top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
