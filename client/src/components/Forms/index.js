import "./index.css";
import CreateRoomForm from "./createRoomForm/index";
import JoinRoomForm from "./joinRoomForm/index";

const Forms = () => {
  return (
    <div className="row h-100 pt-5">
      <div className="col-md-4 mt-5 form-box p-5 border rounded-2 mx-auto d-flex flex-column align-items-center">
        <h1 className="text-primary fw-bold "> CREATE ROOM </h1>
        <CreateRoomForm />
      </div>
      <div className="col-md-4 mt-5 form-box p-5 border rounded-2 mx-auto d-flex flex-column align-items-center">
        <h1 className="text-primary fw-bold "> JOIN ROOM </h1>
        <JoinRoomForm />
      </div>
    </div>
  );
};
export default Forms;
