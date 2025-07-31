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

  const isBlogPage = location.pathname === "/blog";

  return (
    <header className={`header ${scrollDirection === "down" ? "hide" : ""}`}>
      <Link to="/" className="header__logo" onClick={closeMenu}>
        Angel <span className="header__logo-last">Juarez</span>
      </Link>

      {isBlogPage ? (
        <Link
          to="/"
          className="header__back"
          onClick={closeMenu}
          aria-label="Back to home"
        >
          ←
        </Link>
      ) : (
        <button
          className="header__hamburger"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      )}

      {!isBlogPage && (
        <nav
          className={`header__nav ${isMenuOpen ? "open" : ""}`}
          role="navigation"
        >
          <Link
            to="/"
            className="header__nav-link"
            onClick={(e) => {
              closeMenu();
              if (location.pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Home
          </Link>
          <Link
            to="/"
            className="header__nav-link"
            onClick={(e) => {
              closeMenu();
              if (location.pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Projects
          </Link>
          <Link to="/blog" className="header__nav-link" onClick={closeMenu}>
            Blog
          </Link>
          <Link
            to="/"
            className="header__nav-link"
            onClick={(e) => {
              closeMenu();
              if (location.pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
