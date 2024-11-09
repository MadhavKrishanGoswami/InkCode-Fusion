import React from "react";
import Forms from "../../components/Forms/index";
import { motion } from "framer-motion";
const Start = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
      >
        <Forms className="top" />
      </motion.div>
    </>
  );
};
export default Start;
