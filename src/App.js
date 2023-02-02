import Navbar from "./component/navbar/Navbar";
import "./App.css";
import Intro from "./component/intro/Intro";
import Service from "./component/service/Service";
import Experience from "./component/experience/Experience";
import Work from "./component/work/Work";
import Portfolio from "./component/portfolio/Portfolio";
import Testimonials from "./component/testimonials/Testimonials";
import Contact from "./component/Contact/Contact";
import Footer from "./component/footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext),
    darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Service />
      {/* <Experience /> */}
      {/* <Work /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
