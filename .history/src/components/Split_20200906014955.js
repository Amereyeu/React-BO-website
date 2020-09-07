import React from 'react'
import Man from "../images/man.jpg";
import Woman from "../images/woman.jpg"

function Split() {
  return (
    <div className="info">
      <div className="info__left">
        <img src={Woman} alt="woman"/>
        <h2>Active Noise Cancellation</h2>
        <span>
          Inhabit a private space, anywhere, with Beoplay H95. Adaptive Active
          Noise Cancellation adjusts according to your environment, ensuring you
          can fully immerse yourself in music, calls or complete silence while
          travelling, exploring or relaxing.
        </span>
      </div>
  

      <div className="info__rig">
        <h2>Up to 38 hours of playback</h2>
        <span>
          The latest in wireless technology ensures that Beoplay H95 can deliver
          up to 38 hours of continuous play time at normal listening levels with
          ANC turned on.
        </span>
        <img src={Man} alt="man"/>
      </div>
      
    </div>
  );
}

export default Split
