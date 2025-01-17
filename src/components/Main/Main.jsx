import React, { useState, useEffect } from "react";
import "./Main.css";
import { Typewriter } from "react-simple-typewriter";
import {
  GcpIcon,
  CssIcon,
  HtmlIcon,
  JavascriptIcon,
  NodejsIcon,
  ReactIcon,
} from "../../assets/icons/icons";

function Main() {
  {
    /*
  const skills = [
    { id: 1, icon: <ReactIcon />, label: "React" },
    { id: 2, icon: <JavascriptIcon />, label: "Javascript" },
    { id: 3, icon: <HtmlIcon />, label: "HTML5" },
    { id: 4, icon: <CssIcon />, label: "CSS3" },
    { id: 5, icon: <NodejsIcon />, label: "Node.js" },
    { id: 6, icon: <GcpIcon />, label: "GCP" },
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills.length]);
*/
  }
  return (
    <main className="main" id="home">
      <div className="main__intro">
        <h2 className="main__title">
          Hi, I'm <span className="main__title-name">Angel</span>
        </h2>
        <p className="main__typing">
          I'm a
          <span className="main__typing-gradient">
            <Typewriter
              words={[
                " Front-End Developer",
                " Back-End Developer",
                " Full-Stack Web Engineer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
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
            in my work? Let's talk.
          </p>
        </section>
      </div>
      {/*
      <div className="main__skills">
        <div className="main__skills-icon">{skills[currentSkill].icon}</div>
        <p className="main__skills-label">{skills[currentSkill].label}</p>
      </div>
      */}
    </main>
  );
}

export default Main;
