import React, { useEffect } from "react";
import "./style.scss";

const Cursor = () => {
  useEffect(() => {
    const move = () => {
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      const interBubble = document.querySelector(".interactive");

      function moveCursor() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(moveCursor);
      }

      window.addEventListener("mousemove", (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });

      moveCursor();
    };

    move();
  }, []);

  return (
    <div>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>
      </div>
    </div>
  );
};

export default Cursor;
