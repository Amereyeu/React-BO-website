import React from "react";
import Man from "../images/man.jpg";
import Woman from "../images/woman.jpg";

function Split() {
  return (
    <div className="info">
      <div className="info__left">
        <div className="info__left__image"></div>
        <section>
          <h2 className="info__left__title">Active Noise Cancellation</h2>
          <p className="info__left__text">
            Inhabit a private space, anywhere, with Beoplay H95. Adaptive Active
            Noise Cancellation adjusts according to your environment, ensuring
            you can fully immerse yourself in music, calls or complete silence
            while travelling, exploring or relaxing.
          </p>
        </section>
      </div>

      <div className="info__right">
        <section>
          <h2 className="info__right__title">Up to 38 hours of playback</h2>
          <p className="info__right__text">
            The latest in wireless technology ensures that Beoplay H95 can
            deliver up to 38 hours of continuous play time at normal listening
            levels with ANC turned on.
          </p>
        </section>
        <className="info__right__image" />
      </div>
    </div>
  );
}

export default Split;
