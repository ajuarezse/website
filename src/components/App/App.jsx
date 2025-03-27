import { Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/blog" element={<p>blog</p>} />
        </Routes>
        <Footer />
      </div>
      <SocialList />
    </div>
  );
}

export default App;
