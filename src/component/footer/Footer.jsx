import "./footer.css";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

import Wave from "../../img/wave.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" />
      <div className="f-content">
        <span>ortegaviktor571@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size="3rem" />
          <Facebook color="white" size="3rem" />
          <Github color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
