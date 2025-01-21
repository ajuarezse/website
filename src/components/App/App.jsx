import Header from "../Header/Header";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import SocialList from "../SocialList/SociaList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Main />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <SocialList />
    </div>
  );
}

export default App;
