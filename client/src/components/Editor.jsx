import { useEffect } from "react";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

const Editor = () => {
  const [value, setValue] = React.useState("print('Hello World')");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);
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
