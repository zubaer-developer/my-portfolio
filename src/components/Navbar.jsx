import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

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
    // navbar: DaisyUI navbar class
    // bg-base-100: DaisyUI background color according to theme
    // shadow-md: Tailwind shadow effect
    <nav className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full px-4 flex">
        {/* Navbar Start - Logo/Brand */}
        <div className="flex-1">
          <Link
            href="#home"
            className="text-2xl font-bold text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ZUBAER
          </Link>
        </div>

        {/* Navbar Center - Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                {/* transition-colors: smooth color change */}
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End - Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn btn-ghost btn-circle"
          >
            {isMobileMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-base-100 shadow-lg">
          <ul className="menu p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  className="hover:text-primary transition-colors py-3 text-lg"
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
