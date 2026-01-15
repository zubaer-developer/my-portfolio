import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  // Mobile open/close state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Current location
  const location = useLocation();

  // Navigate
  const navigate = useNavigate();

  // Home page check
  const isHomePage = location.pathname === "/";

  // Navigation links array
  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Education", href: "education" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  // Handle navigation click
  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-content/10 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
        {/* Navbar Start - Logo/Brand */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-primary hover:scale-105 transition-transform duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ZUBAER<span className="text-secondary">.</span>
          </Link>
        </div>

        {/* Navbar Center - Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                {/* transition-colors: smooth color change */}
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="relative group px-4 py-2 font-semibold text-sm uppercase tracking-wide hover:bg-transparent"
                >
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End - Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <div className="hover:scale-110 transition-transform">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-ghost btn-circle swap swap-rotate"
            >
              {isMobileMenuOpen ? (
                <HiX className="text-2xl text-primary" />
              ) : (
                <HiMenuAlt3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-base-100/95 backdrop-blur-lg border-b border-base-content/10 animate-in slide-in-from-top duration-300">
          <ul className="menu menu-vertical p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  className="btn btn-ghost justify-start text-lg font-bold hover:text-primary hover:bg-primary/10"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
