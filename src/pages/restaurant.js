import React from "react";

//components
import Header from "../components/header";
import RestaurantCard from "../components/restaurantCard";
import Hours from "../components/hours";
import Footer from "../components/footer";
import Map from "../components/map";
import AnimationLayout from "../components/animationLayout";
import Cursor from "../components/cursor";

const Restaurant = ({
  city,
  name,
  facebook,
  instagram,
  phone,
  background,
  hours,
  street,
  email,
  path,
  cords,
}) => {
  window.scrollTo(0, 0);
  return (
    <>
      <AnimationLayout />
      <Cursor />
      <Header position="static" displayNavigation="none" displayHeader={true} />
      <RestaurantCard
        city={city}
        name={name}
        facebook={facebook}
        instagram={instagram}
        phone={phone}
        background={background}
        path={path}
      />
      <Hours hours={hours} street={street} phone={phone} email={email} />
      <Map cords={cords} />
      <Footer />
    </>
  );
};

export default Restaurant;
