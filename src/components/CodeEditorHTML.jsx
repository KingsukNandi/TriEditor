import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { useDispatch, useSelector } from "react-redux";
import { setHtmlCode } from "../store/codeSlice";

function CodeEditorHTML() {
  const dispatch = useDispatch();
  const htmlCode = useSelector((state) => state.code.htmlCode);

  return (
    <CodeMirror
      // lineWrapping={true}
      // className="m-6"
      // className="focus:h-0"
      theme="dark"
      value={htmlCode}
      height="40vh"
      width="100%"
      extensions={[html({ selfClosingTags: true })]}
      // basicSetup={{ lineWrapping: true }}
      onChange={(data) => {
        dispatch(setHtmlCode(data));
      }}
    />
  );
}
export default CodeEditorHTML;
