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

  return (
    <div className="App">
      <form onSubmit={sendForm}>
        <p>
          <label>
            Imie: <br />
            <input
              type="text"
              value={person.firstName}
              onChange={(e) =>
                setPerson((person) => ({
                  ...person,
                  firstName: e.target.value,
                }))
              }
            />
          </label>
        </p>
        <p>
          <label>
            Nazwisko: <br />
            <input
              type="text"
              value={person.lastName}
              onChange={(e) =>
                setPerson((person) => ({
                  ...person,
                  lastName: e.target.value,
                }))
              }
            />
          </label>
        </p>
        <p>
          <label>
            Wiek: <br />
            <input
              type="number"
              value={person.age}
              onChange={(e) =>
                setPerson((person) => ({
                  ...person,
                  age: Number(e.target.value),
                }))
              }
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
