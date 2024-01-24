import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className=" relative font-Inter top-[6vw] w-[90%] h-[52.85vh] left-[4.96%]">
        <h1 className=" relative text-[10vw] text-Tblack leading-[100%] tracking-tighter font-semibold">
          InkCode
        </h1>
        <h2 className="Tagline text-[4.2vw] text-Tblack tracking-tighter font-normal">
          Elevate your Technical
          <br />
          Interviews Seamlessly!
        </h2>
        <Link
          href="/start"
          className=" flex flex-shrink-0 font-Inter items-center justify-center font-semibold
           relative px-4 py-2 rounded-full text-white bg-black md:w-[15%] md:h-[13%] lg:w-[15%] lg:h-[13%]
            xl:w-[15%] xl:h-[14%] text-[1.4vw] top-[25%] left-[3.25%] leading-[90%] transition duration-300 ease-in-out transform hover:scale-105"
        >
          Start Now
        </Link>

        <div className="auto-layer-column relative h-[25%] w-[90%] top-[65%]">
          <span className="madhav-krishan-goswami absolute text-[1.3vw] font-semibold">
            Madhav Krishan Goswami
          </span>
          <div className="github-mark absolute w-[2rem] h-[2rem] top-[1.7vw] overflow-hidden z-[5]">
            <img src="/github-mark.svg" alt="Github" />
          </div>
          <span className="text-2 text-[1vw] absolute font-normal top-[1.8vw] left-[1.7vw]">
            @MadhavKrishanGoswami
          </span>
        </div>
      </div>
    </div>
  );
}
