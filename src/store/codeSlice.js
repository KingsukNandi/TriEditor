import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button id="click-me">Click Count : 0</button>
</body>
</html>`,
  cssCode: `body {
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
}`,
  jsCode: `let clickCount = 0;
document
  .getElementById("click-me")
  .addEventListener("click", function() {
    clickCount++;
    this.textContent = \`Click Count : \${clickCount}\`;
  });`,
};
export const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setHtmlCode: (state, action) => {
      state.htmlCode = action.payload;
    },
    setCssCode: (state, action) => {
      state.cssCode = action.payload;
    },
    setJsCode: (state, action) => {
      state.jsCode = action.payload;
    },
  },
});

export const { setHtmlCode, setCssCode, setJsCode } = codeSlice.actions;
export default codeSlice.reducer;
