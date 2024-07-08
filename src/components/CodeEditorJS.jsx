import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

function CodeEditorJS(props) {
  const handleChange = (value) => {
    props.onChange(value);
  };
  return (
    <CodeMirror
      // className="m-6"
      theme="dark"
      value={props.value}
      height="40vh"
      width="100%"
      extensions={[javascript({ jsx: true })]}
      onChange={handleChange}
    />
  );
}
export default CodeEditorJS;
