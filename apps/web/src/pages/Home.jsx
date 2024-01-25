import "./Home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const Navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Set initial opacity to 0 and x position to 100
      animate={{ opacity: 1, x: 0 }} // Animate opacity to 1 and x position to 0
      exit={{ opacity: 0, x: -100 }} // Animate opacity to 0 and x position to -100 on exit
      transition={{ duration: 0.15, ease: "easeOut" }} // Set transition duration and easing function
    >
      {" "}
      <div className=" relative font-Inter top-[6vw] w-[90%] h-[52.85vh] left-[4.96%]">
        <h1 className=" relative text-[10vw] text-Tblack leading-[100%] tracking-tighter font-semibold">
          InkCode
        </h1>
        <h2 className="Tagline text-[4.2vw] text-Tblack tracking-tighter font-normal">
          Elevate your Technical
          <br />
          Interviews Seamlessly!
        </h2>
        <button
          className="StartButton flex flex-shrink-0 font-Inter items-center justify-center font-semibold
           relative px-4 py-2 rounded-full text-white bg-black md:w-[15%] md:h-[13%] lg:w-[15%] lg:h-[13%]
            xl:w-[15%] xl:h-[14%] text-[1.4vw] top-[25%] left-[3.25%] leading-[90%] transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => Navigate("/Start")}
        >
          Start Now
        </button>

        <div className="auto-layer-column relative h-[25%] w-[90%] top-[65%]">
          <span className="madhav-krishan-goswami absolute text-[1.3vw] font-semibold">
            Madhav Krishan Goswami
          </span>
          <div className="github-mark absolute w-[1.6vw] h-[1.4vw] top-[1.7vw] overflow-hidden z-[5]">
            <div className="vector" />
          </div>
          <span className="text-2 text-[1vw] absolute font-normal top-[1.8vw] left-[1.7vw]">
            @MadhavKrishanGoswami
          </span>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
