import { useEffect, useState } from "react";
import { Editor } from "./index";
import { Carousel } from "nuka-carousel";

function CarouselSetter() {
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
      <div className="flex justify-evenly items-center gap-3">
        <Editor />
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-evenly items-center gap-3">
        <Carousel scrollDistance={300} showArrows="hover">
          <Editor />
        </Carousel>
      </div>
    </>
  );
}
export default CarouselSetter;
