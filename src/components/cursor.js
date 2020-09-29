import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 500,
    y: 500,
  });

  const links = document.querySelectorAll("a");
  const mouseCursor = document.querySelector(".cursor");
  const foodItems = document.querySelectorAll(".food-item");

  const onMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setMousePosition({ x, y });
  };

  const cursorHover = () => {
    mouseCursor.classList.add("active-cursor");
  };

  const cursorUnhover = () => {
    mouseCursor.classList.remove("active-cursor");
  };

  const cursorPasta = () => {
    mouseCursor.classList.add("pasta-cursor");
  };
  const cursorUnPasta = () => {
    mouseCursor.classList.remove("pasta-cursor");
  };

  const cursorBreakfast = () => {
    mouseCursor.classList.add("breakfast-cursor");
  };
  const cursorUnBreakfast = () => {
    mouseCursor.classList.remove("breakfast-cursor");
  };

  const cursorSoup = () => {
    mouseCursor.classList.add("soup-cursor");
  };
  const cursorUnSoup = () => {
    mouseCursor.classList.remove("soup-cursor");
  };

  const cursorSalad = () => {
    mouseCursor.classList.add("salad-cursor");
  };
  const cursorUnSalad = () => {
    mouseCursor.classList.remove("salad-cursor");
  };

  const cursorDessert = () => {
    mouseCursor.classList.add("dessert-cursor");
  };
  const cursorUnDessert = () => {
    mouseCursor.classList.remove("dessert-cursor");
  };

  const cursorAlcohol = () => {
    mouseCursor.classList.add("alcohol-cursor");
  };
  const cursorUnAlcohol = () => {
    mouseCursor.classList.remove("alcohol-cursor");
  };

  links.forEach((link) => {
    link.addEventListener("mouseenter", cursorHover);
    link.addEventListener("mouseleave", cursorUnhover);
  });

  if (foodItems[0] !== undefined) {
    foodItems[0].addEventListener("mouseenter", cursorPasta);
    foodItems[0].addEventListener("mouseleave", cursorUnPasta);
  }

  if (foodItems[1] !== undefined) {
    foodItems[1].addEventListener("mouseenter", cursorBreakfast);
    foodItems[1].addEventListener("mouseleave", cursorUnBreakfast);
  }

  if (foodItems[2] !== undefined) {
    foodItems[2].addEventListener("mouseenter", cursorSoup);
    foodItems[2].addEventListener("mouseleave", cursorUnSoup);
  }

  if (foodItems[3] !== undefined) {
    foodItems[3].addEventListener("mouseenter", cursorSalad);
    foodItems[3].addEventListener("mouseleave", cursorUnSalad);
  }

  if (foodItems[4] !== undefined) {
    foodItems[4].addEventListener("mouseenter", cursorDessert);
    foodItems[4].addEventListener("mouseleave", cursorUnDessert);
  }

  if (foodItems[5] !== undefined) {
    foodItems[5].addEventListener("mouseenter", cursorAlcohol);
    foodItems[5].addEventListener("mouseleave", cursorUnAlcohol);
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
      }}
    ></div>
  );
};

export default Cursor;
