import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";

function CodeEditorHTML(props) {
  const handleChange = (value) => {
    props.onChange(value);
  };
  return (
    <CodeMirror
      // lineWrapping={true}
      // className="m-6"
      // className="focus:h-0"
      theme="dark"
      value={props.value}
      height="40vh"
      width="100%"
      extensions={[html({ selfClosingTags: true })]}
      // basicSetup={{ lineWrapping: true }}
      onChange={handleChange}
    />
  );
}
export default CodeEditorHTML;
