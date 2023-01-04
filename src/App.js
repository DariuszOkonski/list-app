import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });

  const sendForm = (e) => {
    e.preventDefault();

    console.log(person);
  };

  const change = (e) => {
    setPerson((person) => ({
      ...person,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="App">
      <form onSubmit={sendForm}>
        <p>
          <label>
            Imie: <br />
            <input
              type="text"
              name="firstName"
              value={person.firstName}
              onChange={change}
            />
          </label>
        </p>
        <p>
          <label>
            Nazwisko: <br />
            <input
              type="text"
              name="lastName"
              value={person.lastName}
              onChange={change}
            />
          </label>
        </p>
        <p>
          <label>
            Wiek: <br />
            <input
              type="number"
              name="age"
              value={person.age}
              onChange={change}
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
