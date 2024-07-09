import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";
import { useDispatch, useSelector } from "react-redux";
import { setCssCode } from "../store/codeSlice";

function CodeEditorCSS() {
  const dispatch = useDispatch();
  const cssCode = useSelector((state) => state.code.cssCode);

  return (
    <CodeMirror
      // className="m-6"
      theme="dark"
      value={cssCode}
      height="40vh"
      width="100%"
      extensions={[css()]}
      onChange={(data) => {
        dispatch(setCssCode(data));
      }}
    />
  );
}
export default CodeEditorCSS;
