import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import ACTIONS from "../../Actions";

const Whiteboard = ({ socket }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [color, setColor] = useState("#000000");
  const [penWidth, setPenWidth] = useState(3);
  const [undos, setUndos] = useState([]);
  const [redos, setRedos] = useState([]);

  useEffect(() => {
    const newCanvas = new fabric.Canvas("whiteboardCanvas", {
      isDrawingMode: true,
      selection: false,
      height: 400,
      width: 1290,
      freeDrawingBrush: "PencilBrush",
      strokeColor: color,
      selectionLineWidth: penWidth,
    });
    setCanvas(newCanvas);
  }, [color, penWidth]);

  useEffect(() => {
    if (socket && canvas) {
      socket.on(ACTIONS.DRAW, (data) => {
        const { path, color } = data;
        canvas.freeDrawingBrush.color = color;
        canvas.loadFromJSON(path, canvas.renderAll.bind(canvas));
      });
    }
  }, [socket, canvas]);

  const handleColorChange = (newColor) => {
    setColor(newColor);
    canvas.freeDrawingBrush.color = newColor;
  };

  const handleUndo = () => {
    const lastOperation = canvas.getObjects().pop();
    if (lastOperation) {
      const removed = canvas.remove(lastOperation);
      if (removed) {
        setRedos([...redos, lastOperation]);
        setUndos(undos.slice(0, -1));
      }
    }
  };

  const handleRedo = () => {
    const lastRedo = redos.pop();
    if (lastRedo) {
      canvas.add(lastRedo);
      setUndos([...undos, lastRedo]);
      setRedos([...redos]);
    }
  };

  const handleClear = () => {
    canvas.clear();
    setUndos([]);
    setRedos([]);
  };
  const downloadCanvas = () => {
    if (canvas) {
      const dataURL = canvas.toDataURL({
        format: "jpeg",
        quality: 1, // Adjust quality as needed
        multiplier: 2, // Adjust multiplier as needed for better resolution
        backgroundColor: "white", // Set background color to white
      });

      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "whiteboard.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    if (socket && canvas) {
      canvas.on("path:created", (options) => {
        const path = options.path;
        console.log(path);
        const data = {
          path: JSON.stringify(canvas),
          color,
        };
        socket.emit(ACTIONS.DRAW, data, console.log("drawing"));
        setUndos([...undos, path]);
        setRedos([]);
      });
    }
  }, [canvas, color, undos, redos, socket]);
  const changePenWidth = (width) => {
    if (canvas) {
      canvas.freeDrawingBrush.width = width;
      setPenWidth(width);
      canvas.renderAll.bind(canvas);
    }
  };

  return (
    <div>
      <div>
        <canvas id="whiteboardCanvas" ref={canvasRef}></canvas>
        <div>
          <label>Pen Width - {penWidth}</label>
          <input
            type="range"
            onChange={(e) => changePenWidth(e.target.value)}
            value={penWidth}
            min={1}
            max={30}
          />
        </div>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
        <button onClick={handleClear}>Clear</button>
        <input
          type="color"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
        <button onClick={downloadCanvas}>Download Canvas as JPG</button>
      </div>
    </div>
  );
};

export default Whiteboard;
