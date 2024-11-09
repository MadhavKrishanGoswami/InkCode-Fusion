import { TechStack, TechContent, TechText } from "../../constants/index";
import Section from "../Section/Section";
import { LeftCurve, RightCurve } from "../design/Techstack";
import Icon from "../../assets/images/InkCode Icon.ico";
import check from "../../assets/images/check.svg";

const TechStackSection = () => {
  return (
    <Section crosses id="TechStack">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">TechStack</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {TechContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img
                    src={check}
                    width={28}
                    height={24}
                    className="bg-color-2 rounded-full m-1 p-1"
                    alt="check"
                  />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {TechText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-color-2 rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-color-2 rounded-full">
                  <img src={Icon} width={48} height={48} alt="brainwave" />
                </div>
              </div>
            </div>

            <ul>
              {TechStack.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechStackSection;
