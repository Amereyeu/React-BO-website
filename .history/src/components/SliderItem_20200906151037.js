import React from "react";

function SlideItem({ headphone }) {
    const bgImage = {
      backgroundImage: `url(${headphone.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "10rem",
      backgroundRepeat: "no-repeat",
      marginBottom: "4rem",
    };
  return (
    <div className="keen-slider__slide" style={bgImage}>
{/*       <img
        className="keen-slider__slide__image"
        src={headphone.image}
        alt={headphone.subtitle}
      /> */}

      <h2 className="keen-slider__slide__title">{headphone.title}</h2>
      <h3 className="keen-slider__slide__subtitle">{headphone.subtitle}</h3>
    </div>
  );
}

export default SlideItem;
