import gradient from "../../assets/images/gradient.png";

export const Gradient = () => {
  return (
    <div className="absolute top-[25rem] left-[37rem] w-[76rem] opacity-80 mix-blend-color-dodge pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[70rem] h-[61rem] -translate-x-3/4 -translate-y-1/2">
        <img
          className="w-full"
          src={gradient}
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};
