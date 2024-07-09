import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function OutputBox() {
  const [combinedCode, setCombinedCode] = useState("");
  const htmlCode = useSelector((state) => state.code.htmlCode);
  const cssCode = useSelector((state) => state.code.cssCode);
  const jsCode = useSelector((state) => state.code.jsCode);

  useEffect(() => {
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
  }, [cssCode, htmlCode, jsCode]);

  return (
    <div
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
