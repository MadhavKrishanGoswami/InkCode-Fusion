import CreateRoomForm from "./createRoomForm/CreateRoomForm";
import JoinRoomForm from "./joinRoomForm/JoinRoomForm";

const Forms = () => {
  return (
    <div className="flex justify-center items-center relative top-[5vw] gap-x-[12vw]">
      <div className="flex flex-col items-center bg-black w-[30vw] h-[35vw] rounded-3xl shadow-md shadow-Tblack">
        <h1
          className="font-[Poppins] flex justify-center items-center relative font-bold top-[3.4vw]
        leading-normal capitalize flex-shrink-0 text-center text-StartHead text-[2vw]"
        >
          {" "}
          Create Room{" "}
        </h1>
        <CreateRoomForm />
      </div>
      <div className="flex flex-col items-center bg-StartBg w-[30vw] h-[35vw] rounded-3xl shadow-md shadow-Tblack">
        <h1
          className="flex justify-center items-center relative font-bold top-[3.4vw]
        leading-normal capitalize flex-shrink-0 text-center text-[2vw] font-[Poppins] text-StartHead"
        >
          {" "}
          Join Room{" "}
        </h1>
        <JoinRoomForm />
      </div>
    </div>
  );
};
export default Forms;
