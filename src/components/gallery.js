import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="row">
        <div className="img-block left">
          <div className="img img-1" />
        </div>
        <div className="img-block right">
          <div className="img img-2" />
        </div>
      </div>
      <div className="row">
        <div className="img-block right">
          <div className="img img-3" />
        </div>
        <div className="img-block left">
          <div className="img img-4" />
        </div>
      </div>
      <div className="row">
        <div className="img-block left">
          <div className="img img-5" />
        </div>
        <div className="img-block right">
          <div className="img img-6" />
        </div>
      </div>
      <div className="row">
        <div className="img-block right">
          <div className="img img-7" />
        </div>
        <div className="img-block left">
          <div className="img img-8" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
