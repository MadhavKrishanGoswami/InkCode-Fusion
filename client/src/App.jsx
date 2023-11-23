import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Room from "./pages/Room";
import End from "./pages/End";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#1E1E1E", //you can custmize it more if you want :)
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
