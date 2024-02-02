import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/Transition/AnimatedRoutes";
import Cursor from "../src/pages/GradientBubbles/GradientBubbles";

import { Toaster } from "react-hot-toast";
function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    return (
      <div className=" ">
        <h1 className=" absolute z-50 text-[7vw] mt-[40vh] content-center justify-center text-Tblack tracking-tighter font-normal max-w-screen text-center w-[50%]  ml-[25vw]">
          Sorry, InkCode is not supported on mobile devices Yet :(
        </h1>
        <Cursor />
      </div>
    );
  }

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
