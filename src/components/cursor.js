import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 500,
    y: 500,
  });

  const links = document.querySelectorAll("a");
  const mouseCursor = document.querySelector(".cursor");

  const onMouseMove = (e) => {
    const { pageX: x, pageY: y } = e;
    setMousePosition({ x, y });
  };

  const cursorHover = () => {
    mouseCursor.classList.add("active-cursor");
  };

  const cursorUnhover = () => {
    mouseCursor.classList.remove("active-cursor");
  };

  links.forEach((link) => {
    link.addEventListener("mouseenter", cursorHover);
    link.addEventListener("mouseleave", cursorUnhover);
  });

  if (document.body.clientWidth < 1280) {
    mouseCursor.style.display = "none";
    document.body.style.cursor = "auto";
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
        top: `${mousePosition.y - 12}px`,
        left: `${mousePosition.x - 12}px`,
      }}
    ></div>
  );
};

export default Cursor;
