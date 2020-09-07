import React from "react";

function Newsletter() {
  return (
    <div className="news">
      <h2 className="news__title">STAY IN TOUCH</h2>
      <p className="news__text">
        Sign up for our newsletter to receive customized product news, updates and special invites.
      </p>

      <form className="news__form">
        <input type="text" className="news__form__input" placeholder="Email" />
        <button type="submit" className="news__form__button">Sub</button>
      </form>
    </div>
  );
}

export default Newsletter;
