import React from "react";

function FormUserDetails({
  step,
  setStep,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
}) {
  return (
    <div className="checkout">
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="checkout__input"
          defaultValue={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="checkout__input"
          defaultValue={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          className="checkout__input"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default FormUserDetails;
