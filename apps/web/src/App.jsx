import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/Transition/AnimatedRoutes";

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
                primary: "#1E1E1E", //you can customize it more if you want :)
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
