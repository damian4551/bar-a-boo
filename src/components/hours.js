import React from "react";

const Hours = ({ hours, street, phone, email }) => {
  return (
    <div className="container">
      <div className="hours">
        <div className="inner-hours">
          <h2 className="title">Godziny otwarcia kuchni i pizzy:</h2>
          <div className="hours-container">
            <div className="hours-row">
              <div className="hours-block">
                <p className="day">{hours.d1.open}</p>
                <p className="kitchen">{hours.d1.kitchen}</p>
                <p className="pizza">{hours.d1.pizza}</p>
              </div>
              <div className="hours-block">
                <p className="day">{hours.d2.open}</p>
                <p className="kitchen">{hours.d2.kitchen}</p>
                <p className="pizza">{hours.d2.pizza}</p>
              </div>
            </div>
            <div className="hours-row">
              <div className="hours-block">
                <p className="day">{hours.d3.open}</p>
                <p className="kitchen">{hours.d3.kitchen}</p>
                <p className="pizza">{hours.d3.pizza}</p>
              </div>
              <div className="hours-block">
                <p className="day">{hours.d4.open}</p>
                <p className="kitchen">{hours.d4.kitchen}</p>
                <p className="pizza">{hours.d4.pizza}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <p className="info-text">{street}</p>
        <p className="info-text">{phone}</p>
        <p className="info-text">{email}</p>
      </div>
    </div>
  );
};

export default Hours;
