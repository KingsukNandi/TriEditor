import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { setJsCode } from "../store/codeSlice";
import { useDispatch, useSelector } from "react-redux";

function CodeEditorJS() {
  const dispatch = useDispatch();
  const jsCode = useSelector((state) => state.code.jsCode);

  return (
    <CodeMirror
      // className="m-6"
      theme="dark"
      value={jsCode}
      height="40vh"
      width="100%"
      extensions={[javascript({ jsx: true })]}
      onChange={(data) => {
        dispatch(setJsCode(data));
      }}
    />
  );
}
export default CodeEditorJS;
