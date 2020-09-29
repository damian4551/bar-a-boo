import React from "react";

import MovingBar from "./movingBar";

const About = () => {
  return (
    <div className="about">
      <div className="about-inner">
        <div className="row left" id="about">
          <div className="block-text">
            <h3 className="title">O nas</h3>
            <p className="text left">
              Restauracja<span> Bar a Boo </span>to odpowiedź na potrzeby
              naszych gości. To miejsce, którego klimat i kuchnia sprostają
              nawet najbardziej wymagającym gustom.
            </p>
          </div>
        </div>
        <MovingBar />
        <div className="row right">
          <div className="block-text">
            <p className="text right">
              Nasza kuchnia to mieszanka tradycji kulturowych i kulinarnych,
              niepowtarzalnych zapachów i kolorów. Poznajcie zadziwiające
              bogactwo smaków tej kuchni w otoczeniu, które zachwyci Was
              subtelną grą światła we wnętrzu wypełnionym cegłą,
              <span> zielenią </span>i przyjazną atmosferą.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
