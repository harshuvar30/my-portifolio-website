import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navEffect, setNavEffect] = useState(false);
  useEffect(() => {
    setNavEffect(true);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled ? "bg-white/70 shadow-sm border-gray-200/50" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-20 px-4 max-w-6xl mx-auto">
        <div
          className={`text-2xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent transform transition-all duration-300 ease-out ${navEffect ? "opacity-100 translate-y-1" : "opacity-0 -translate-y-20"} `}
        >
          Harshvardhan
        </div>
        <div className="hidden md:flex space-x-10 text-md font-small">
          {navItems.map((item, index) => (
            <div
              className={`relative text-black hover:cursor-pointer hover:text-purple-500 transform transition-all duration-300 ease-out after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-500 hover:after:w-[140%] after:transition-all after:duration-300 ${navEffect ? "opacity-100 translate-y-0 " : "opacity-0 -translate-y-20"} `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </div>
          ))}
        </div>
        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-md focus:outline-none"
        >
          {!isOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6"
            >
              <path
                d="M6 18 18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col bg-white/90 backdrop-blur-md px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-lg text-black hover:text-purple-500"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
