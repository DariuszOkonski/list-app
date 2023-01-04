import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  const sendForm = (e) => {
    e.preventDefault();

    const person = {
      firstName,
      lastName,
      age,
    };

    console.log(person);
  };

  return (
    <div className="App">
      <form onSubmit={sendForm}>
        <p>
          <label>
            Imie: <br />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Nazwisko: <br />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Wiek: <br />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </label>
        </p>
        <p>
          <button type="submit">Wyslij</button>
        </p>
      </form>
    </div>
  );
}

export default App;
// 17: 30
// wyświetlić listę ludzi
// button -> posortować według nazwy użytkownika
// wyświetlić awatar
// https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/ -> reszta adresu w obiekcie
