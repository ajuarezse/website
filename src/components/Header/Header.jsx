import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <header className={`header ${scrollDirection === "down" ? "hide" : ""}`}>
      <a href="#home" className="header__logo">
        Angel <span className="header__logo-last">Juarez</span>
      </a>
      <nav className="header__nav" role="navigation">
        <a href="#home" className="header__nav-link">
          Home
        </a>
        <a href="#projects" className="header__nav-link">
          Projects
        </a>
        <a href="#contact" className="header__nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
