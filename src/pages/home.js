import React, { useState, useEffect } from "react";

//components
import Header from "../components/header";
import Banner from "../components/banner";
import About from "../components/about";
import MovingBar from "../components/movingBar";
import Menu from "../components/menu";
import Gallery from "../components/gallery";
import Restaurants from "../components/restaurants";
import RestaurantMenu from "../components/restaurantMenu";
import Footer from "../components/footer";
import AnimationLayout from "../components/animationLayout";
import Cursor from "../components/cursor";

const Home = () => {
  const [displayHeader, setDisplayHeader] = useState(false);

  window.addEventListener("scroll", function () {
    window.pageYOffset > window.innerHeight
      ? setDisplayHeader(true)
      : setDisplayHeader(false);
  });

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <>
      <AnimationLayout />
      <Cursor />
      <Header displayRestaurants="none" displayHeader={displayHeader} />
      <Banner />
      <About />
      <MovingBar />
      <Menu />
      <Gallery />
      <RestaurantMenu />
      <Restaurants />
      <Footer />
    </>
  );
};

export default Home;
