import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import bikedata from "../bikes.json";
import SlideItem from "./SliderItem";
import Title from "./Title";

export default (props) => {
  const [data] = useState(bikedata);
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    spacing: 15,
    loop: true,
    duration: 5000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    slidesPerView: 1,
    breakpoints: {
      "(min-width: 481px)": {
        slidesPerView: 2,
      },
      "(min-width: 769px)": {
        slidesPerView: 3,
      },
    },
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
      <Title title="Best sellers" />
      <div ref={sliderRef} className="keen-slider">
        {data.bikes.map((bike) => (
          <SlideItem key={bike.id} bike={bike} />
        ))}
      </div>
    </>
  );
};
