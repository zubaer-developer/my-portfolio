import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaCode,
  FaPaperPlane,
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
    <footer className="relative bg-neutral text-neutral-content pt-16 overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <FaCode className="text-primary-content text-xl" />
              </div>
              <h3 className="text-3xl font-black tracking-tighter text-primary">
                ZUBAER<span className="text-secondary">.</span>
              </h3>
            </div>
            <p className="text-neutral-content/60 max-w-md leading-relaxed mb-8 text-lg">
              Full Stack Developer passionate about creating modern web
              applications with clean code and great user experience. Let's
              build something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, href: info.github, label: "GitHub" },
                {
                  icon: <FaLinkedin />,
                  href: info.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: <FaEnvelope />,
                  href: `mailto:${info.email}`,
                  label: "Email",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  title={social.label}
                >
                  <div className="text-xl group-hover:text-primary transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-neutral-content/60 hover:text-primary transition-all duration-300"
                  >
                    <span className="h-px w-0 bg-primary group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">
              Connect
            </h4>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-black text-primary uppercase tracking-tighter">
                  Email Me
                </span>
                <p className="text-neutral-content/80 break-all">
                  {info.email}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-black text-primary uppercase tracking-tighter">
                  Location
                </span>
                <p className="text-neutral-content/80">Dhaka, Bangladesh</p>
              </div>
              <a
                href={`mailto:${info.email}`}
                className="btn btn-primary btn-sm rounded-xl mt-4 gap-2 normal-case hover:scale-105"
              >
                <FaPaperPlane className="text-xs" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-white/5 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-neutral-content/40 text-sm font-medium order-2 md:order-1">
              © {currentYear}{" "}
              <span className="text-neutral-content/70">{info.name}</span>. All
              rights reserved.
            </p>

            {/* Made with Love */}
            <div className="flex items-center gap-6 order-1 md:order-2">
              <p className="text-neutral-content/40 text-sm flex items-center gap-2">
                Made with <FaHeart className="text-red-500 animate-pulse" /> in
                Bangladesh
              </p>

              <div className="h-8 w-px bg-white/10 hidden md:block"></div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group relative flex items-center justify-center w-10 h-10 bg-primary text-primary-content rounded-xl shadow-lg shadow-primary/20 hover:scale-110 active:scale-95 transition-all duration-300"
                title="Back to Top"
              >
                <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
