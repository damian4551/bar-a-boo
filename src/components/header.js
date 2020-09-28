import React from "react";
import { Link } from "react-router-dom";
import { Link as SectionLink } from "react-scroll";
import { motion } from "framer-motion";

const Header = ({
  position,
  displayRestaurants,
  displayNavigation,
  displayHeader,
  newColors,
}) => {
  return (
    <motion.div
      className="header"
      initial={{ y: "-100%" }}
      animate={displayHeader === true ? { y: "0%" } : { y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }}
      style={{
        position: position,
        backgroundColor: newColors === true && "transparent",
      }}
    >
      <div className="inner-header">
        <Link to="/" className="logo">
          <h6
            className="logo-1"
            style={{ color: newColors === true && "#fff" }}
          >
            bar a boo
          </h6>
          <h6
            className="logo-2"
            style={{ color: newColors === true && "#fff" }}
          >
            bar a boo
          </h6>
        </Link>
        <nav style={{ display: displayNavigation }}>
          <ul className="navigation-list">
            <SectionLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li
                className="navigation-item"
                style={{ color: newColors === true && "#fff" }}
              >
                o nas
              </li>
            </SectionLink>
            <SectionLink
              activeClass="active"
              to="menu"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li
                className="navigation-item"
                style={{ color: newColors === true && "#fff" }}
              >
                menu
              </li>
            </SectionLink>
            <SectionLink
              activeClass="active"
              to="restaurants"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li
                className="navigation-item"
                style={{ color: newColors === true && "#fff" }}
              >
                restauracje
              </li>
            </SectionLink>
          </ul>
        </nav>
        <nav style={{ display: displayRestaurants }}>
          <ul className="restaurant-list">
            <Link to="/poznan-taczaka">
              <li className="navigation-item">taczaka</li>
            </Link>
            <Link to="/poznan-malta">
              <li className="navigation-item">malta</li>
            </Link>
            <Link to="/poznan-stary-rynek">
              <li className="navigation-item">stary rynek</li>
            </Link>
            <Link to="/lublin-narutowicza">
              <li className="navigation-item">narutowicza</li>
            </Link>
            <Link to="/katowice-mariacka">
              <li className="navigation-item">mariacka</li>
            </Link>
          </ul>
        </nav>
        <div className="hamburger">
          <div className="hamburger-inner">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
