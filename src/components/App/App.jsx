import Header from "../Header/Header";
import Main from "../Main/Main";
import Projects from "../../Projects/Projects";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Main />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
