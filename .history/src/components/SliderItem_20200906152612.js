import React from "react";

function SlideItem({ headphone }) {
  const bgImage = {
    backgroundImage: `linear-gradient(180deg, rgba(0,255,254,0.3) 50%, rgba(255,10,204,0.3) 100%),  url(${headphone.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="keen-slider__slide" style={bgImage}>
      <h2 className="keen-slider__slide__title">{headphone.title}</h2>
      <h3 className="keen-slider__slide__subtitle">{headphone.subtitle}</h3>
    </div>
  );
}

export default SlideItem;
