import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  const closeMenu = () => setIsMenuOpen(false);

  // Check if we're on the blog page
  const isBlogPage = location.pathname === "/blog";

  return (
    <header className={`header ${scrollDirection === "down" ? "hide" : ""}`}>
      {/* Always show the logo - links back home */}
      <Link to="/" className="header__logo" onClick={closeMenu}>
        Angel <span className="header__logo-last">Juarez</span>
      </Link>

      {/* Only show hamburger menu when NOT on blog page */}
      {!isBlogPage && (
        <button
          className="header__hamburger"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      )}

      {/* Only show nav links when NOT on blog page */}
      {!isBlogPage && (
        <nav
          className={`header__nav ${isMenuOpen ? "open" : ""}`}
          role="navigation"
        >
          <Link to="/" className="header__nav-link" onClick={closeMenu}>
            Home
          </Link>
          <a href="#projects" className="header__nav-link" onClick={closeMenu}>
            Projects
          </a>
          <Link to="/blog" className="header__nav-link" onClick={closeMenu}>
            Blog
          </Link>
          <a href="#contact" className="header__nav-link" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
