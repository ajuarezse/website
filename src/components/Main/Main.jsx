import "./Main.css";
import { Typewriter } from "react-simple-typewriter";

function Main() {
  return (
    <main className="main">
      <h2 className="main__title">
        Hi, I'm <span className="main__title-name">Angel</span>
      </h2>
      <p className="main__typing">
        I'm a{" "}
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
    </main>
  );
}

export default Main;
