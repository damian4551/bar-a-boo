import React from "react";
import { Link } from "react-router-dom";
import { Link as SectionLink } from "react-scroll";

const Header = ({ position, displayRestaurants, displayNavigation }) => {
  return (
    <div className="header" style={{ position: position }}>
      <div className="inner-header">
        <Link to="/" className="logo">
          <h6 className="logo-1">bar a boo</h6>
          <h6 className="logo-2">bar a boo</h6>
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
              <li className="navigation-item">o nas</li>
            </SectionLink>
            <SectionLink
              activeClass="active"
              to="menu"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="navigation-item">menu</li>
            </SectionLink>
            <SectionLink
              activeClass="active"
              to="restaurants"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="navigation-item">restauracje</li>
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
    </div>
  );
};

export default Header;
