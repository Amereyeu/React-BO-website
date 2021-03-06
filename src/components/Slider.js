import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import beodata from "../data.json";
import SlideItem from "./SliderItem";

export default (props) => {
  const [data] = useState(beodata);
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({

    loop: true,
    duration: 5000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    slidesPerView: 1,

  });

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 4000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);


  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {data.headphones.map((headphone) => (
          <SlideItem key={headphone.id} headphone={headphone} />
        ))}
      </div>
    </>
  );
};
