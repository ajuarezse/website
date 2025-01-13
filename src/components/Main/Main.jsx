import "./Main.css";
import { Typewriter } from "react-simple-typewriter";

function Main() {
  return (
    <main className="main" id="home">
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
      <section className="main__content">
        <p className="main__about">
          I’m a developer with a passion for crafting accessible, pixel-perfect
          user interfaces that seamlessly merge thoughtful design with robust
          engineering. My work focuses on the intersection of design and
          development, creating experiences that are visually stunning,
          high-performing, and user-friendly. As a Junior Full-Stack Engineer, I
          specialize in building and maintaining UI components that power
          front-end platforms while ensuring they meet web accessibility
          standards and best practices to deliver inclusive user experiences. In
          my career, I’ve had the privilege of developing software across
          diverse environments, gaining valuable insights into building scalable
          and efficient solutions.
        </p>
      </section>
    </main>
  );
}

export default Main;
