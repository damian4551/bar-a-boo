import React from "react";
import Header from "./header";

const Banner = () => {
  return (
    <div className="banner" id="banner">
      <Header
        position="absolute"
        displayHeader={true}
        displayRestaurants={"none"}
        newColors={true}
      />
      <div className="banner-img">
        <div className="inner-banner">
          <h1 className="main-text">bar a boo</h1>
          <p className="sub-text">Pyszna kuchnia oraz niepowtarzalny klimat</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
