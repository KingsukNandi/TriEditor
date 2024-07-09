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
    return <Editor />;
  } else {
    return (
      <>
        <Carousel scrollDistance={300} showArrows="hover">
          <Editor />
        </Carousel>
      </>
    );
  }
}
export default CarouselSetter;
