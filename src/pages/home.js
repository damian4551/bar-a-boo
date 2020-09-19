import React from "react";

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
  return (
    <>
      <AnimationLayout />
      <Cursor />
      <Header displayRestaurants="none" />
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
