import React from "react";

function FormPersonalDetails({
  step,
  setStep,
  city,
  setCity,
  zip,
  setZip,
  address,
  setAddress,
}) {
  return (
    <div className="checkout">
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          className="checkout__input"
          defaultValue={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          className="checkout__input"
          defaultValue={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>ZIP Code</label>
        <input
          type="text"
          className="checkout__input"
          defaultValue={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="checkout__button"
        onClick={() => setStep(step + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default FormPersonalDetails;
