//import "./index.css";
import CreateRoomForm from "./createRoomForm/CreateRoomForm";
import JoinRoomForm from "./joinRoomForm/JoinRoomForm";

const Forms = () => {
  return (
    <div className="FORM flex justify-center items-center relative top-[5vw] gap-x-[12vw]">
      <div className="CreatCard flex flex-col items-center bg-StartBg w-[30vw] h-[40vw] rounded-[3vw]">
        <h1
          className="text CREATE flex justify-center items-center relative font-semibold top-[3.4vw]
        leading-normal capitalize flex-shrink-0 text-center font-Inter text-StartHead"
        >
          {" "}
          CREATE{" "}
        </h1>
        <CreateRoomForm />
      </div>
      <div className="JoinCard flex flex-col items-center  bg-StartBg w-[30vw] h-[40vw] rounded-[3vw]">
        <h1
          className="text JOIN flex justify-center items-center relative font-semibold top-[3.4vw]
        leading-normal capitalize flex-shrink-0 text-center font-Inter text-StartHead"
        >
          {" "}
          JOIN{" "}
        </h1>
        <JoinRoomForm />
      </div>
    </div>
  );
};
export default Forms;
