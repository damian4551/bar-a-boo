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
}) => {
  return (
    <div className="restaurant">
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
