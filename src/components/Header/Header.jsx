import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Angel Juarez</h1>
      <nav className="header__nav" role="navigation">
        <a href="#home" className="header__nav-link">
          Home
        </a>
        <a href="#portfolio" className="header__nav-link">
          Portfolio
        </a>
        <a href="#skills" className="header__nav-link">
          Skills
        </a>
      </nav>
    </header>
  );
}

export default Header;
