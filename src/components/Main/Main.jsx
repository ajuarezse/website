import React, { useState, useEffect } from "react";
import "./Main.css";
import { Typewriter } from "react-simple-typewriter";

function Main() {
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
            in my work? Let's talk.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Main;
