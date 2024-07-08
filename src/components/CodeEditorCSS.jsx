import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";

function CodeEditorCSS(props) {
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
      extensions={[css()]}
      onChange={handleChange}
    />
  );
}
export default CodeEditorCSS;
