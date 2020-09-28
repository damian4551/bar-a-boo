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

  links.forEach((link) => {
    link.addEventListener("mouseenter", cursorHover);
    link.addEventListener("mouseleave", cursorUnhover);
  });

  foodItems.forEach((item) => {
    item.addEventListener("mouseenter", cursorPasta);
    item.addEventListener("mouseleave", cursorUnPasta);
  });

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
