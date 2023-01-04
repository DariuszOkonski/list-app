import React, { useState } from "react";
import AgeGuesserAnswer from "./AgeGuesserAnswer";

export default function AgeGuesser() {
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    setCheck(true);
    console.log("sendFrom");
  };

  if (check) {
    return (
      <>
        <AgeGuesserAnswer name={name} />
        <button onClick={() => setCheck(false)}>Try again</button>
      </>
    );
  }

  return (
    <>
      <form onSubmit={sendForm}>
        <label>
          Podaj imię:
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Zgadnij mój wiek</button>
      </form>
    </>
  );
}
