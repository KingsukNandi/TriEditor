import React, { useEffect, useState } from "react";

function OutputBox(props) {
  const [htmlCode, setHtmlCode] = useState(props.htmlCode);
  const [cssCode, setCssCode] = useState(props.cssCode);
  const [jsCode, setJsCode] = useState(props.jsCode);
  const [combinedCode, setCombinedCode] = useState("");

  useEffect(() => {
    setHtmlCode(props.htmlCode);
    setCssCode(props.cssCode);
    setJsCode(props.jsCode);

    const updatedCombinedCode = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
              ${cssCode}
          </style>
      </head>
      <body>
          ${htmlCode}
          <script>
              ${jsCode}
          </script>
      </body>
      </html>
    `;

    setCombinedCode(updatedCombinedCode);
  }, [props.htmlCode, props.cssCode, props.jsCode, cssCode, htmlCode, jsCode]);

  return (
    <div
      className=" m-3"
      style={{
        height: "53vh",
      }}
    >
      <iframe
        srcDoc={combinedCode}
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid #3e4451",
          backgroundColor: "white",
        }}
      ></iframe>
    </div>
  );
}

export default OutputBox;
