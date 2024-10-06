import CreateRoomForm from "./createRoomForm/CreateRoomForm";
import JoinRoomForm from "./joinRoomForm/JoinRoomForm";

const Forms = () => {
  return (
    <div className="flex justify-center items-center relative top-[5vw] gap-x-[12vw]">
      <div className="flex flex-col items-center bg-StartBg w-[30vw] h-[40vw] rounded-[3vw] shadow-md shadow-Tblack">
        <h1
          className="flex justify-center items-center relative font-semibold top-[3.4vw]
        leading-normal capitalize flex-shrink-0 text-center font-Inter text-StartHead text-[2vw]"
        >
          {" "}
          CREATE{" "}
        </h1>
        <CreateRoomForm />
      </div>
      <div className="flex flex-col items-center bg-StartBg w-[30vw] h-[40vw] rounded-[3vw] shadow-md shadow-Tblack">
        <h1
          className="flex justify-center items-center relative font-semibold top-[3.4vw]
        leading-normal capitalize flex-shrink-0 text-center text-[2vw] font-Inter text-StartHead"
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
