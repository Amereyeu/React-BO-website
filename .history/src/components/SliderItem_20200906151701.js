import React from "react";

function SlideItem({ headphone }) {
  const bgImage = {
    backgroundImage: rgba(251,0,151,0.3) 100%) `url(${headphone.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",

  };

  return (
    <div className="keen-slider__slide" style={bgImage}>
      <h2 className="keen-slider__slide__title">{headphone.title}</h2>
      <h3 className="keen-slider__slide__subtitle">{headphone.subtitle}</h3>
    </div>
  );
}

export default SlideItem;
