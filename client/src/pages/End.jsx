import React from "react";
import Cursor from "./GradientBubbles/GradientBubbles";
import { useNavigate } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//import "./End.css";

const End = () => {
  const Navigate = useNavigate();
  const iconStyle = {
    color: "black",
  };
  return (
    <>
      <div className="End relative h-screen w-screen">
        <Cursor />
        <button
          className="heading text-black text-[3.5vw] font-Inter z-10 font-semibold
         tracking-wide ml-6 py-2"
          onClick={() => Navigate("/")}
        >
          InkCode
        </button>
        <div className="Content relative top-[2vw] left-[18vw]">
          <h1 className="Text1 font-Inter text-[4.5vw] text-black font-bold">
            Meeting Ended!
          </h1>
          <h2 className="Text2 relative font-Inter text-[2vw] text-black font-semibold top-5">
            Start a new Meeting?
          </h2>
          <button
            className="NewMeetingButton relative w-[12vw] h-[3.4vw] rounded-full text-white
             font-Inter font-semibold bg-black text-[1.4vw] ml-4 md:ml-8 top-10 left-1/4 
             transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => Navigate("/Start")}
          >
            New Meeting
          </button>
          <h2 className="Text3 relative font-Inter text-[1.5vw] text-black font-bold top-32">
            Go back to homepage{" "}
          </h2>
        </div>
        <div
          className="Footer flex flex-col justify-center font-Inter items-center bg-Copyright 
        w-3/4 h-1/6 mx-auto fixed bottom-10 left-[10%] overflow-x-hidden"
        >
          <div className="Copyright flex items-center">
            <div className="hairline h-0.5 w-165 bg-gray-400"></div>
            <span className="Text4 text-white p-2">Copyright@2023</span>
            <div className="hairline h-0.5 w-165 bg-gray-400"></div>
          </div>
          <div className="Icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookRoundedIcon
                className="icon m-0 mx-1"
                style={iconStyle}
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="icon m-0 mx-1" style={iconStyle} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="icon m-0 mx-1" style={iconStyle} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="icon m-0 mx-1" style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default End;
