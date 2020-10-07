import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

function Form() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          step={step}
          setStep={setStep}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          address={address}
          setAddress={setAddress}
          city={city}
          setCity={setCity}
          zip={zip}
          setZip={setZip}
          step={step}
          setStep={setStep}
        />
      );
    case 3:
      return (
        <Confirm
          firstName={firstName}
          lastName={lastName}
          email={email}
          address={address}
          city={city}
          zip={zip}
          step={step}
          setStep={setStep}
        />
      );
    case 4:
      return <Success />;

    default:
      return;
  }
}

export default Form;
