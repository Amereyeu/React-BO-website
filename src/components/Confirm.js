import React from "react";

function Confirm({
  step,
  setStep,
  firstName,
  lastName,
  email,
  city,
  zip,
  address
}) {
  return (
    <div className="checkout">
      <dl>
        <dt>First Name:</dt>
        <dd className="checkout__input">{firstName}</dd>
        <dt>Last Name:</dt>
        <dd className="checkout__input">{lastName}</dd>
        <dt>Email:</dt>
        <dd className="checkout__input">{email}</dd>
        <dt>City:</dt>
        <dd className="checkout__input">{city}</dd>
        <dt>Address:</dt>
        <dd className="checkout__input">{address}</dd>
        <dt>ZIP Code:</dt>
        <dd className="checkout__input">{zip}</dd>
      </dl>

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

export default Confirm;
