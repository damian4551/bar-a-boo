import React from "react";

import { motion } from "framer-motion";

const AnimationLayout = () => {
  const transition = { duration: 1.6, ease: [0.6, -0.05, 0.01, 0.9] };
  const leftPanel = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
    },
    exit: {
      height: "100vh",
    },
  };

  const rightPanel = {
    initial: {
      height: "100vh",
      top: 0,
    },
    animate: {
      height: 0,
    },
    exit: {
      height: "100vh",
    },
  };

  return (
    <>
      <motion.div
        className="layout-left"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={leftPanel}
        transition={transition}
      ></motion.div>
      <motion.div
        className="layout-right"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={rightPanel}
        transition={transition}
      ></motion.div>
    </>
  );
};

export default AnimationLayout;
