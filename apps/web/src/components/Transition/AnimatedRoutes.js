import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import Start from "../../pages/Start";
import Room from "../../pages/RoomPage/Room";
import End from "../../pages/End";
import { AnimatePresence } from "framer-motion";
import Cursor from "../../pages/GradientBubbles/GradientBubbles";
import PageNotFound from "../../pages/PageNotFound";

const AnimatedRoutes = () => {
  const location = useLocation();
  const isRoomPath = location.pathname.startsWith("/room/");

  return (
    <AnimatePresence mode="wait">
      {!isRoomPath && <Cursor />}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/end" element={<End />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
