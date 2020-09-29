import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  path,
  city,
  name,
  facebook,
  instagram,
  phone,
  background,
  styles,
}) => {
  return (
    <div
      className="restaurant"
      id="restaurants"
      style={{
        padding: styles === true && "0",
        marginTop: styles === true && "calc(1rem + 4vw)",
      }}
    >
      <div className="restaurant-inner">
        <Link to={path} className="img-link">
          <div className="restaurant-img">
            <div
              className="img"
              style={{
                backgroundImage: "url(" + background + ")",
              }}
            />
          </div>
        </Link>
        <div className="restaurant-info">
          <Link to={path}>
            <div className="localization">
              <h2 className="city">{city}</h2>
              <h2 className="street">{name}</h2>
            </div>
          </Link>
          <div className="social">
            <a href={facebook}>facebook</a>
            <a href={instagram}>instagram</a>
          </div>
          <div className="reservation">
            <p className="text-reservation">rezerwacja</p>
            <p className="phone">{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
