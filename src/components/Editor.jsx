import React from "react";
import CodeEditorJS from "./CodeEditorJS";
import CodeEditorCSS from "./CodeEditorCSS";
import CodeEditorHTML from "./CodeEditorHTML";

function Editor() {
  return (
    <div className="flex justify-evenly items-center gap-3 w-fit md:w-full">
      <div className="w-72 md:w-1/3">
        <span className="texts">HTML</span>
        <CodeEditorHTML />
      </div>
      <div className="w-72 md:w-1/3">
        <span className="texts">CSS</span>
        <CodeEditorCSS />
      </div>
      <div className="w-72 md:w-1/3">
        <span className="texts">JS</span>
        <CodeEditorJS />
      </div>
    </div>
  );
}

export default Editor;
