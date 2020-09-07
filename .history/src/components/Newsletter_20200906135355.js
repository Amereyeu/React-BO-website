import React from "react";
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
        <input type="text" className="news__form__input" placeholder="Email" />
        <button type="submit" className="news__form__button">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
