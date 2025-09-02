import "./Main.css";
import { Typewriter } from "react-simple-typewriter";
import jsIcon from "../../assets/icons/javascript-16-svgrepo-com.svg";
import reactIcon from "../../assets/icons/react.svg";
import gitIcon from "../../assets/icons/github-svgrepo-com.svg";
import htmlIcon from "../../assets/icons/html-fill-svgrepo-com.svg";

function Main() {
  return (
    <main className="main" id="home">
      <div className="main__intro">
        <h2 className="main__title">
          Hi, I'm <span className="main__title-name">Angel</span>
        </h2>
        <p className="main__typing">
          I'm a&nbsp;
          <span className="main__typing-gradient">
            <Typewriter
              words={[
                " Front-End Developer",
                " Back-End Developer",
                " Full-Stack Web Engineer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={20}
              delaySpeed={2000}
            />
          </span>
        </p>
        <section className="main__content">
          <p className="main__about">
            I’m a developer with a passion for crafting pixel-perfect user
            interfaces that seamlessly merge thoughtful design with robust
            engineering. As a Junior Full-Stack Engineer, I thrive on solving
            complex problems and continuously expanding my skill set. Interested
            in my work?{" "}
            <a href="#contact" className="main__contact">
              Reach out!
            </a>
          </p>
        </section>
        <div className="main__skills-grid main__skills-icons-only">
          <img src={jsIcon} alt="JavaScript" title="JavaScript" />
          <img src={reactIcon} alt="React.js" title="React.js" />
          <img src={gitIcon} alt="Git" title="Git" />
          <img src={htmlIcon} alt="HTML5" title="HTML5" />
        </div>
      </div>
    </main>
  );
}

export default Main;
