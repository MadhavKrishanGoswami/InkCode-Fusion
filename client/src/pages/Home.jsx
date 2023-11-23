import "./Home.css";
import { useNavigate } from "react-router-dom";
import Cursor from "./GradientBubbles/GradientBubbles";
const Home = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <Cursor />
      <div className="Hendding-container">
        <h1 className="Heading ">InkCode</h1>
        <h2 className="Tagline  ">
          Elevate your Technical
          <br />
          Interviews Seamlessly!
        </h2>
        <button className="StartButton" onClick={() => Navigate("/Start")}>
          Start Now
        </button>
        <div className="auto-layer-column">
          <span className="madhav-krishan-goswami">Saachi Badal</span>
          <div className="github-mark">
            <div className="vector" />
          </div>
          <span className="text-2">@BadalSaachi12</span>
        </div>
      </div>
    </div>
  );
};
export default Home;
