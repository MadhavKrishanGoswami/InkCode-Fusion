import { features } from "../../constants/index";
import Section from "../Section/Section";
import { GradientLight } from "../design/Features";
import ClipPath from "../../assets/svg/ClipPath";
import Arrow from "../../assets/svg/Arrow";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <h1 className="flex h1 mb-6 justify-center items-center">Features</h1>

        <div className="flex flex-wrap items-center justify-center gap-10 mb-10">
          {features.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none rounded-lg">
                <h5 className="h5 mb-5 text-[#FF2D7E]">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs text-n-1 font-bold uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow className="cursor-pointer" />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8 rounded-lg"
                style={{ clipPath: "url(#Features)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
