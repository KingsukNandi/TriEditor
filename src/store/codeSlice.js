import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  htmlCode: `<!-- Type HTML code here -->`,
  cssCode: `/* Type CSS here */`,
  jsCode: `// Type JavaScript code here`,
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
