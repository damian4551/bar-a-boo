import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-inner">
        <div className="row">
          <div className="block-text">
            <h3 className="title">O nas</h3>
            <p className="text left">
              Restauracja<span> Bar a Boo </span>to odpowiedź na potrzeby
              naszych gości. To miejsce, którego klimat i kuchnia sprostają
              nawet najbardziej wymagającym gustom.
            </p>
          </div>
          <div className="img-block right">
            <div className="img-right" />
          </div>
        </div>
        <div className="row">
          <div className="img-block left">
            <div className="img-left" />
          </div>
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
