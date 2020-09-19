import React from "react";

const MovingBar = () => {
  return (
    <div className="bar" id="menu">
      <div className="inner-bar">
        <div className="text-block outside">
          <h2 className="text outside">
            pizza makaron sałatki pizza makaron sałatki<span>&nbsp;</span>
          </h2>
          <h2 className="text outside">
            pizza makaron sałatki pizza makaron sałatki<span>&nbsp;</span>
          </h2>
        </div>
        <div className="text-block inside">
          <h2 className="text inside">
            piwo koktajle drinki piwo koktajle drinki<span>&nbsp;</span>
          </h2>
          <h2 className="text inside">
            piwo koktajle drinki piwo koktajle drinki<span>&nbsp;</span>
          </h2>
        </div>
        <div className="text-block outside">
          <h2 className="text outside">
            bar a boo bar a boo bar a boo<span>&nbsp;</span>
          </h2>
          <h2 className="text outside">
            bar a boo bar a boo bar a boo<span>&nbsp;</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MovingBar;
