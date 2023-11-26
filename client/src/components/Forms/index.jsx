import "./index.css";
import CreateRoomForm from "./createRoomForm/CreateRoomForm";
import JoinRoomForm from "./joinRoomForm/JoinRoomForm";

const Forms = () => {
  return (
    <div className="FORM">
      <div className="CreatCard">
        <h1 className="text CREATE"> CREATE </h1>
        <CreateRoomForm />
      </div>
      <div className="JoinCard">
        <h1 className="text JOIN"> JOIN </h1>
        <JoinRoomForm />
      </div>
    </div>
  );
};
export default Forms;
