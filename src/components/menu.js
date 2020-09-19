import React from "react";
import Video from "../assets/video.mp4";

const Menu = () => {
  return (
    <div className="menu">
      <div className="inner-menu">
        <a href="http://www.baraboo.pl/menu,76.html">
          <div className="btn-block">sprawdź nasze menu </div>
        </a>
      </div>
      <div className="video">
        <video src={Video} autoPlay loop muted></video>
        <div className="text-block">
          <h2 className="text">Zapraszamy na</h2>
          <h2 className="sub-text">pyszną pizzę</h2>
        </div>
      </div>
      <div className="food-list">
        <h2 className="food-item">makarony</h2>
        <h2 className="food-item">śniadania</h2>
        <h2 className="food-item">zupy</h2>
        <h2 className="food-item">sałatki</h2>
        <h2 className="food-item">desery</h2>
        <h2 className="food-item">i alkohole</h2>
      </div>
    </div>
  );
};

export default Menu;
