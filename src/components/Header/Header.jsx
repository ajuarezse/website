import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`header ${scrollDirection === "down" ? "hide" : ""}`}>
      <a href="#home" className="header__logo">
        Angel <span className="header__logo-last">Juarez</span>
      </a>
      <button
        className="header__hamburger"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <nav
        className={`header__nav ${isMenuOpen ? "open" : ""}`}
        role="navigation"
      >
        <a
          href="#home"
          className="header__nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#projects"
          className="header__nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
        <Link
          to="/blog"
          className="header__nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </Link>
        <a
          href="#contact"
          className="header__nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
