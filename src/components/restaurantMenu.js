import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RestaurantContext } from "../context";

const RestaurantMenu = () => {
  const restaurantInfo = useContext(RestaurantContext);
  return (
    <div className="restaurant-menu">
      <div className="restaurant-inner-menu" id="restaurants">
        {restaurantInfo.map(({ city, name, path }) => (
          <Link to={path} key={name}>
            <div className="restaurant-block">
              <h2 className="city">{city}</h2>
              <h4 className="name">{name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
