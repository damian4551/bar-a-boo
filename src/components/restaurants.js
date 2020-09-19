import React, { useContext } from "react";
import RestaurantCard from "./restaurantCard";
import { RestaurantContext } from "../context";

const Restaurant = () => {
  const restaurantInfo = useContext(RestaurantContext);
  return (
    <div>
      {restaurantInfo.map(
        ({ path, city, name, facebook, instagram, phone, background }) => (
          <RestaurantCard
            path={path}
            key={name}
            city={city}
            name={name}
            facebook={facebook}
            instagram={instagram}
            phone={phone}
            background={background}
          />
        )
      )}
    </div>
  );
};

export default Restaurant;
