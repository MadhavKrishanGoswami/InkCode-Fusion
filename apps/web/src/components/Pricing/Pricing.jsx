import Section from "../Section/Section";
import stars from "../../assets/images/stars.svg";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "../design/Pricing";
import { GlobeDemo } from "../design/GridGlobe";
import Heading from "../Heading/Heading";
import { Gradient } from "../design/Gradient";
const Pricing = () => {
  return (
    <Section className="overflow-hidden mt-0">
      <Gradient />
      <Heading title="Collaborate, Anytime, Anywhere" />

      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <GlobeDemo height={50} width={50} />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading tag="Get started with InkCode" />

        <div id="pricing" className="relative ">
          <div className="blur-xl">
            <PricingList />
          </div>

          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
