import "./Home.css";
import gitLogo from "./Assets/images/github-mark.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const Navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Set initial opacity to 0 and x position to 100
      animate={{ opacity: 1, x: 0 }} // Animate opacity to 1 and x position to 0
      exit={{ opacity: 0, x: -100 }} // Animate opacity to 0 and x position to -100 on exit
      transition={{ duration: 1, ease: "easeOut" }} // Set transition duration and easing function
    >
      {" "}
      <div className="font-Inter w-[90%] h-screen mx-auto relative flex flex-col justify-center items-center md:justify-start md:items-start md:pt-28 ">
        <h1 className="text-[5.5rem] sm:text-8xl  text-black leading-[100%] tracking-tighter font-semibold ">
          InkCode
        </h1>
        <h2 className="Tagline text-2xl sm:text-4xl my-8 md:my-6 text-black tracking-tighter font-normal">
          Elevate your Technical
          <br />
          Interviews Seamlessly!
        </h2>
        <button
          className="StartButton flex  items-center justify-center font-semibold font-Inter
          px-10 py-4 rounded-full text-md text-White bg-black  leading-[90%] transition duration-1000 ease-in-out transform hover:scale-105"
          onClick={() => Navigate("/Start")}
        >
          Start Now
        </button>
      </div>
      <div className="auto-layer-column absolute bottom-3 left-4">
        <span className="madhav-krishan-goswami  text-lg lg:text-base font-semibold">
          Madhav Krishan Goswami
        </span>
        <div className="flex items-center">
          <img
            src={gitLogo}
            className="git-logo w-10 lg:w-8 h-auto mr-2"
            alt="git-logo"
          />
          <span className="text-lg lg:text-base font-normal">
            @MadhavKrishanGoswami
          </span>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
