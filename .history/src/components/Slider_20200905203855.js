import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import bikedata from "../bikes.json";
import SlideItem from "./SliderItem";

export default (props) => {
  const [data] = useState(bikedata);
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({

    loop: true,
    duration: 50000,
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
        {data.bikes.map((bike) => (
          <SlideItem key={bike.id} bike={bike} />
        ))}
      </div>
    </>
  );
};
