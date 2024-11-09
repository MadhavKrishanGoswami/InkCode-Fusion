import "./Home.css";
import Header from "../../components/Header/Header";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import TechStack from "../../components/TechStack/TechStack";
import Pricing from "../../components/Pricing/Pricing";
const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <TechStack />
        <Pricing />
        <Footer />
      </div>
    </>
  );
};

export default Home;
