import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Newsletter() {
  const { register, handleSubmit, reset, errors } = useForm();
  const [email, setEmail] = useState("")

    function onSubmit(e) {
    
          alert("Zpráva odeslána / Message sent");
        

      reset();
    }

  return (
    <div className="news">
      <h2 className="news__title">STAY IN TOUCH</h2>
      <p className="news__text">
        Sign up for our newsletter to receive customized product news, updates
        and special invites.
      </p>

      <form className="news__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="news__form__input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          ref={register({
            required: true,
            pattern: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <div className="validation-error" style={{ color: theme.color }}>
            {t("errors.required")}
          </div>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <div className="validation-error" style={{ color: theme.color }}>
            Vložte e-mail ve správném tvaru
          </div>
        )}


        <button type="submit" className="news__form__button">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;