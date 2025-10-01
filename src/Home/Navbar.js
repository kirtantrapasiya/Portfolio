import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ Logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > 40 && !isScrolled) {
        setAnimateIn(true);
        setTimeout(() => setAnimateIn(false), 700);
        setIsScrolled(true);
      }

      if (currentY <= 50) {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (currentY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "About", href: "#aboutOReducation", id: "aboutOReducation" },
    { name: "Projects", href: "#projects", id: "projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out
        ${
          isScrolled
            ? `bg-white shadow-lg scale-100 opacity-100 ${
                animateIn ? "-translate-y-12" : "translate-y-0"
              }`
            : "bg-transparent translate-y-2 scale-95 opacity-100"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-1.5">
          <a href="#home" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto object-contain" />
            <span
              className={`text-lg font-semibold transition-colors duration-700 ease-in-out ${
                isScrolled ? "text-[#2E402C]" : "text-white"
              }`}
            >
              Kirtan
            </span>
          </a>

          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition text-sm ${
                  activeLink === link.id
                    ? "text-yellow-600"
                    : isScrolled
                    ? "text-[#2E402C]"
                    : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className={`ml-6 px-6 py-2 rounded-full text-xs font-medium shadow transition ${
                isScrolled
                  ? "bg-[#2E402C] text-white"
                  : "bg-white text-[#2E402C]"
              }`}
            >
              Contact Me
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? "text-[#2E402C]" : "text-white"}`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden shadow-lg rounded mx-4 mb-4 ${
            !isScrolled ? "bg-white" : "bg-[#2E402C]"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition text-sm ${
                  activeLink === link.id
                    ? "text-yellow-600"
                    : isScrolled
                    ? "text-white"
                    : "text-[#2E402C]"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`px-6 py-2 rounded-full font-medium text-sm text-xs shadow ${
                isScrolled
                  ? "bg-white text-[#2E402C]"
                  : "text-white bg-[#2E402C]"
              }`}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
