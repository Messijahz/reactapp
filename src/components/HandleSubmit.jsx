import React, { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => { 
    e.preventDefault(); // Gör så att sidan inte laddas om direkt innan vi kontrollerat om epostadressen är giltig.

    
    if (email.length >= 5 && email.includes("@") && email.includes(".")) { // Vi validerar om användaren skrivit in minst 5 tecken i fältet. Detta måste innehålla ett @-tecken och ett tecken måste vara en punkt.
      setErrorMessage(""); // Tar bort felmeddelandet om e-postadressen skulle vara giltig.
      setConfirmationMessage("Thank you for signing up!");
      setEmail("");
    } else {
      setErrorMessage("* Email is not valid."); // Visar vårat felmeddelande om adressen är ogiltig.
      setConfirmationMessage("");
    }

  };

  return (
    <div className="subscribe-form">
        <form className="contact-form" method="get" onSubmit={handleSubmit} noValidate>
        <label className="contact-form" htmlFor="email"></label>
            <div className="mail-icon-input">
                <input 
                    className="form-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" &#xf003;   Your Email"
                    style={{ fontFamily: "Arial, 'FontAwesome'" }}
                    value={email}
                    onChange={handleChange}
                    autoComplete="email"
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
            </div>
        <button className="contact-btn-subscribe"type="submit">
        Subscribe
        </button>
        </form>
    </div>
  );
};

export default EmailForm;