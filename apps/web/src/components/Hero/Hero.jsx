import React from "react";
import { useNavigate } from "react-router-dom";
import Code from "../../assets/images/Collaboration.svg";
import Section from "../Section/Section";
import { BackgroundCircles, BottomLine } from "../design/Hero";
import curve from "../../assets/images/curve.png";
import Gradient from "../../assets/images/gradient.png";
const Hero = () => {
  const Navigate = useNavigate();

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-4 max-w-[62rem] text-color-4 mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Elevate Your Coding Interviews with{` `}
            <span className="inline-block relative">
              InkCode{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-color-1 lg:mb-8 tracking-wider">
            The all-in-one platform for interactive coding interviews and
            real-time collaboration.
          </p>
          <button
            className="flex items-center justify-center font-semibold font-Inter
          px-11 py-5 rounded-full text-lg text-White bg-color-3 leading-[90%] transition duration-1000 ease-in-out transform hover:scale-105 mx-auto"
            onClick={() => Navigate("/Start")}
          >
            Get Started
          </button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[2rem] md:h-[2.5rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/25] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/400] lg:aspect-[1024/650]">
                <img
                  src={Code}
                  className="w-full scale-[1.3] translate-y-[10%] md:scale-[1] md:-translate-y-[6%] lg:-translate-y-[2%]"
                  width={1024}
                  height={490}
                  alt="Code"
                />
              </div>
            </div>
            <div className="absolute -z-5 left-1/2 w-[504%] scale-50 lg:scale-105 -translate-x-1/2 -top-[1%] md:-top-[46%] md:w-[138%] lg:-top-[104%] opacity-70 translate-y-80">
              <img
                src={Gradient}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
          </div>

          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
