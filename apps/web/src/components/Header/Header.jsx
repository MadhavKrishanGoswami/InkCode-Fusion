import { useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../../constants";
import { useState } from "react";

const Header = () => {
  const Navigate = useNavigate();
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="flex items-center w-[12rem] xl:mr-8" href="#hero">
          <span className="ml-4 text-3xl font-bold text-color-2 hover:text-color-1 tracking-widest">
            InkCode
          </span>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-color-2 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm
                 lg:font-semibold ${
                   item.url === pathname.hash
                     ? "z-2 lg:text-color-2"
                     : "lg:text-n-1/50"
                 } lg:leading-5 lg:hover:text-color-2 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a
          href="https://github.com/MadhavKrishanGoswami/InkCode-Fusion"
          className="button hidden mr-16 text-n-1/50 transition-colors font-codec hover:text-n-1 lg:block"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <button
          className="StartButton flex items-center uppercase justify-center font-code font-bold
    px-8 py-4 rounded-full text-xs text-color-1 bg-color-3 leading-[90%] transition duration-1000 ease-in-out transform hover:scale-105"
          onClick={() => Navigate("/Start")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
