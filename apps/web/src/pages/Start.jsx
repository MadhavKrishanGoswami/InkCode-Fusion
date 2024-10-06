import React from "react";
import Forms from "../components/Forms/index";
import "./Start.css";
import { motion } from "framer-motion";
const Start = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }} // Set initial opacity to 0 and x position to "100%"
      animate={{ opacity: 1, x: 0 }} // Animate opacity to 1 and x position to 0
      exit={{ opacity: 0 }} // Animate opacity to 0 and x position to "-100%" on exit
      transition={{ ease: "easeOut", duration: 0.6 }} // Add smooth transition with easeInOut easing and duration of 0.5 seconds
    >
      <Forms className="top" />
    </motion.div>
  );
};

export default Start;
