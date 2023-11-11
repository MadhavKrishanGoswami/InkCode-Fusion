import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

const Editor = () => {
  // State to hold the value of the code in the editor
  const [value, setValue] = React.useState("print('Hello World')");

  // Callback function to handle changes in the code editor
  const onChange = React.useCallback((val, viewUpdate) => {
    // Update the state with the new value
    setValue(val);
  }, []);

  // Render the CodeMirror component with Python language support
  return (
    <CodeMirror
      value={value}
      height="200px"
      extensions={[python()]}
      onChange={onChange}
    />
  );
};

export default Editor;
