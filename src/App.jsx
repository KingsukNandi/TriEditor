// import { useEffect, useState } from "react";
import "./App.css";
import { OutputBox, CarouselSetter, Footer } from "./components/index";

function App() {
  return (
    <>
      <div className="m-3">
        <CarouselSetter />
      </div>
      <div className="m-3">
        <OutputBox />
      </div>
      <div className="m-3">
        <Footer />
      </div>
    </>
  );
}

export default App;
