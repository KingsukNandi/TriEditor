import { useEffect, useState } from "react";
import "./App.css";
import {
  CodeEditorCSS,
  CodeEditorHTML,
  CodeEditorJS,
  OutputBox,
} from "./components/index";
import { Carousel } from "nuka-carousel";

function App() {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button id="click-me">Click Count : 0</button>
</body>
</html>`);
  const [cssCode, setCssCode] = useState(`body {
  background-color: #282c34;
  color: #fff;
}
#click-me {
  background-color: #3d4148;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}
#click-me:hover {
  background-color: #52565c;
}`);
  const [jsCode, setJsCode] = useState(`let clickCount = 0;
document
  .getElementById("click-me")
  .addEventListener("click", function() {
    clickCount++;
    this.textContent = \`Click Count : \${clickCount}\`;
  });`);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  if (windowSize > 900) {
    return (
      <>
        <div className="flex justify-evenly items-center gap-3 m-3">
          <div className={`w-1/3`}>
            <span>HTML</span>
            <CodeEditorHTML onChange={setHtmlCode} value={htmlCode} />
          </div>
          <div className="w-1/3">
            <span>CSS</span>
            <CodeEditorCSS onChange={setCssCode} value={cssCode} />
          </div>
          <div className="w-1/3">
            <span>JS</span>
            <CodeEditorJS onChange={setJsCode} value={jsCode} />
          </div>
        </div>
        <div>
          <OutputBox htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="m-3">
          <Carousel scrollDistance={300} showArrows="hover">
            <div className="flex justify-evenly items-center gap-3 w-fit">
              <div className={`w-72`}>
                <span>HTML</span>
                <CodeEditorHTML onChange={setHtmlCode} value={htmlCode} />
              </div>
              <div className={`w-72`}>
                <span>CSS</span>
                <CodeEditorCSS onChange={setCssCode} value={cssCode} />
              </div>
              <div className={`w-72`}>
                <span>JS</span>
                <CodeEditorJS onChange={setJsCode} value={jsCode} />
              </div>
            </div>
          </Carousel>
        </div>
        <div>
          <OutputBox htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
        </div>
      </>
    );
  }
}

export default App;
