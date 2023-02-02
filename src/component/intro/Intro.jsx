import "./intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Victor from "../../img/victor.png";

import boy from "../../img/boy.png";
import FloatingDIv from "../floatingDiv/FloatingDIv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
// import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext),
    darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hello! I am</span>
          <span>Victor Ortga</span>
          <span>
            I am a front-end Back-end developer with the React framework, and I
            also work on the backend with Node.js and Python
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a
            href="https://github.com/VictorOPerez/API-CLIENT-ADMIN.git"
            target="_blank"
          >
            <img src={Github} alt="" />
          </a>
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <div className="fotos">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Victor} className="victor" alt="" />
        </div>
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <div className="floating-div1">
          <FloatingDIv image={thumbup} text1="Web" text2="Developer" />
        </div>
        <div className="floating-div2">
          <FloatingDIv image={Crown} text1="Desing" />
        </div>

        {/* blur Divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
