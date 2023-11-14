import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const Navigate = useNavigate();
  return (
    <div >
      {/*<button className="AboutButton d-grid gap-2 d-md-flex justify-content-md"  onClick= {() => Navigate("/AboutUs")}>Aboout Us</button>*/}
        <h1 className="Heading col-xxl-4 col-xl-4 col-lg-8,col-md-8 col-sm-8">InkCode</h1>
        <h2 className="Tagline col-xxl-8 col-xl-12 col-lg-12 col-md-12 col-sm-12">
          Elevate your Technical
          <br/>Interviews Seamlessly!
        </h2>
        <div className="d-grid gap-2 d-md-flex justify-content-md">
        <button className="StartButton" onClick= {() => Navigate("/Start")}>Start Now</button>
        </div>
        <img src="Colours.png" alt="ColourPic" />
     
        <h3 className="DeveloperName">Saachi Badal</h3>
        <h3 className="Id">@Saachi26</h3>

    </div>
  );
};
export default Home;
