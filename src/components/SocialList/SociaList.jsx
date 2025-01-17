import "./SocialList.css";
import { GithubIcon, LinkedinIcon } from "../../assets/icons/icons";

function SocialList() {
  return (
    <nav className="social-list" aria-label="Social media links">
      <a
        href="https://github.com/ajuarezse"
        target="_blank"
        rel="noopener noreferrer"
        className="social-list__link"
      >
        <GithubIcon className="social-list__icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/angel-juarez-tech/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-list__link"
      >
        <LinkedinIcon className="social-list__icon" />
      </a>
      <div className="social-list__line"></div>
    </nav>
  );
}

export default SocialList;
