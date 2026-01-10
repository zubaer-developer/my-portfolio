import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  // Mobile open/close state
  // isMobileMenuOpen = true, menu show, false menu hide
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links array
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // navbar: DaisyUI navbar class
    // bg-base-100: DaisyUI background color according to theme
    // shadow-md: Tailwind shadow effect
    <nav className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full px-4 flex">
        {/* Navbar Start - Logo/Brand */}
        <div className="flex-1">
          <a href="#home" className="text-2xl font-bold text-primary">
            ZUBAER
          </a>
        </div>

        {/* Navbar Center - Desktop Links */}
        {/* hidden lg:flex: mobile hide, large screen show */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                {/* transition-colors: smooth color change */}
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End - Mobile Menu Button */}
        {/* lg:hidden: large screen hide */}
        <div className="lg:hidden">
          <button
            // onClick: on button click menu toggle
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            // btn-ghost: transparent background
            className="btn btn-ghost btn-circle"
          >
            {/* isMobileMenuOpen true X icon, false Menu icon */}
            {isMobileMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      {/* isMobileMenuOpen true show */}
      {isMobileMenuOpen && (
        // absolute: position absolute
        // top-full: under navbar
        // left-0 right-0: full width
        // for animate simple fade effect
        <div className="lg:hidden absolute top-full left-0 right-0 bg-base-100 shadow-lg">
          <ul className="menu p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors py-3 text-lg"
                  // link click, menu will be close
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
