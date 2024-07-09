import React from "react";
import CodeEditorJS from "./CodeEditorJS";
import CodeEditorCSS from "./CodeEditorCSS";
import CodeEditorHTML from "./CodeEditorHTML";

function Editor() {
  return (
    <>
      <div className={`w-1/3`}>
        <span className="texts">HTML</span>
        <CodeEditorHTML />
      </div>
      <div className="w-1/3">
        <span className="texts">CSS</span>
        <CodeEditorCSS />
      </div>
      <div className="w-1/3">
        <span className="texts">JS</span>
        <CodeEditorJS />
      </div>
    </>
  );
}

export default Editor;
