import Toggle from "../toggle/Toggle";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Victor</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            {/* <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link> */}
            <Link
              spy={true}
              to="Porfolio"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Porfolio</li>
            </Link>
            <Link
              spy={true}
              to="Testimonials"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact us</button>
      </div>
    </div>
  );
};

export default Navbar;
