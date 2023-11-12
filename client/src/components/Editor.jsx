import React, { useEffect, useRef } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/python/python";
import "codemirror/theme/material.css";
import "codemirror/addon/edit/closebrackets";
import codemirror from "codemirror";

const Editor = () => {
  useEffect(() => {
    async function init() {
      codemirror.fromTextArea(document.getElementById("realTimeEditor"), {
        mode: "python",
        theme: "material",
        lineNumbers: true,
        autoCloseBrackets: true,
      });
    }
    init();
  }, []);

  return <textarea id="realTimeEditor"></textarea>;
};

export default Editor;
