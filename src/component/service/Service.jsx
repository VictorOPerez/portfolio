import "./service.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";
import Frontend from "../../img/frontend.png";
import Backend from "../../img/backend.png";
import Disenyo from "../../img/disenyo.png";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Service = () => {
  const theme = useContext(themeContext),
    darkMode = theme.state.darkMode;
  return (
    <div
      className="service
    "
      id="Services"
    >
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <spane>
          I love to be always learning. challenges are part of my personal
          growth. I like sports, reading, science and good company
        </spane>
        {/* <a href={Resume} download> */}
        <button className="button s-button">Download CV</button>
        {/* </a> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <div>
          <Card
            emogi={Disenyo}
            heading={"Dising"}
            detail={"Adobe Photoshop, Adobe Illustrator, Adobe InDesign "}
          />
        </div>
        <div>
          <Card
            emogi={Frontend}
            heading={"Frontend"}
            detail={"HTML, CSS, JavaScript, framework React"}
          />
        </div>
        <div>
          <Card
            emogi={Backend}
            heading={"Backend"}
            detail={
              "Node.js framework Express, database MongoDB, Python framework Flask and Django database MySQL"
            }
          />
        </div>
        <div
          className="blur s-blur2"
          style={{
            background: "var(--purple)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Service;
