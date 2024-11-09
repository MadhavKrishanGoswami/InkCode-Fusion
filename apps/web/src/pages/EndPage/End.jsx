import React from "react";
import { useNavigate } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
//import "./End.css";

const End = () => {
  const Navigate = useNavigate();
  const iconStyle = {
    color: "black",
  };
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Set initial opacity to 0 and x position to 100
      animate={{ opacity: 1, x: 0 }} // Animate opacity to 1 and x position to 0
      exit={{ opacity: 0, x: -100 }} // Animate opacity to 0 and x position to -100 on exit
      transition={{ duration: 0.15, ease: "easeOut" }} // Set transition duration and easing function
      className=""
    >
      {" "}
      <button
        className=" text-black text-[3.5vw] font-Inter z-10 font-semibold
         tracking-wide ml-6 py-2"
        onClick={() => Navigate("/")}
      >
        InkCode
      </button>
      <div className=" fixed top-[22vh] left-[10vw]">
        <h1 className=" font-Inter text-[4.5vw] text-black font-bold">
          Meeting Ended!
        </h1>
        <h2 className=" font-Inter text-[2vw] text-black font-semibold top-5">
          Start a new Meeting?
        </h2>
        <button
          className=" fixed w-[12vw] h-[3.4vw] rounded-full text-White
             font-Inter font-semibold bg-black text-[1.4vw] ml-4 md:ml-8 top-[50vh] left-[40vw] 
             transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => Navigate("/Start")}
        >
          New Meeting
        </button>
      </div>
      <div
        className="flex flex-col justify-center font-Inter items-center bg-Copyright  
         w-full h-[15vh] mx-auto fixed bottom-0  overflow-x-hidden"
      >
        <div className="Copyright flex items-center">
          <div className="hairline h-0.5 w-165 bg-gray-400"></div>
          <span className="Text4 text-white p-2">
            Copyright@{currentYear}
          </span>{" "}
          {/* Display the current year */}
          <div className="hairline h-0.5 w-165 bg-gray-400"></div>
        </div>
        <div className="Icons">
          <a
            href="https://www.facebook.com/madhav.goswami.9461"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookRoundedIcon className="icon m-0 mx-1" style={iconStyle} />
          </a>
          <a
            href="https://twitter.com/Goswamimadhav24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="icon m-0 mx-1" style={iconStyle} />
          </a>
          <a
            href="https://github.com/MadhavKrishanGoswami"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="icon m-0 mx-1" style={iconStyle} />
          </a>
          <a
            href="https://www.linkedin.com/in/madhav-krishan-goswami-3ba50a289/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="icon m-0 mx-1" style={iconStyle} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default End;
