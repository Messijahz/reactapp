import React, { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Validerar vad användaren matar in med en form av regular expressions.

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault(); //Gör så att sidan inte laddas om direkt innan vi kontrollerat om epostadressen är giltig.

    
    if (emailRegex.test(email)) {
      setErrorMessage(""); //Rensa fältet på ett eventuellt felmeddelande om epostadressen är valid.
      
      try {
        const res = await fetch("https://win24-assignment.azurewebsites.net/api/forms/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });

        if (res.status === 200) {
          setConfirmationMessage("* Thank you for signing up!"); //Om vi får tillbaka koden 200 så visas detta meddelande upp.
          setEmail(""); //Rensar meddelandefältet efter att vi har skickat information opm våran epostadress.
        } else {
          setErrorMessage("* Something went wrong. Please try again."); //Säg att vi skulle få en annan kod tillbaka än 200, så dyker detta meddelande upp.
          setConfirmationMessage(""); //Tar bort bekräftelsemeddelandet.
        }
      } catch (error) {
        setErrorMessage("* There was an error connecting to the server."); //Om servern skulle krångla på något sätt. Säg att vi inte kan ansluta till den, då får vi detta meddelande tillbaka.
        setConfirmationMessage(""); //Tar bort bekräftelsemeddelandet.
        console.error("Error:", error);
      }
    } else {
      setErrorMessage("* Email is not valid."); //Här visar vi detta meddelande om eposten inte skulle vara giltig enligt våran regex.
      setConfirmationMessage(""); //Rensa bekräftelsemeddelandet.
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
        <button className="contact-btn-subscribe" type="submit">
          Subscribe
        </button>
        </form>
    </div>
  );
};

export default EmailForm;