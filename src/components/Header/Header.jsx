import "./Header.css";

function Header() {
  return (
    <header className="header">
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
        <a href="#skills" className="header__nav-link">
          Skills
        </a>
      </nav>
    </header>
  );
}

export default Header;
