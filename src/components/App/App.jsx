import Header from "../Header/Header";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import Blog from "../Blog/Blog";
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
        <Blog />
        <Contact />
        <Footer />
      </div>
      <SocialList />
    </div>
  );
}

export default App;
