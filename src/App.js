import { useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList/UsersList";
import { people } from "./data/people";

function App() {
  const [gender, setGender] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(true);

  return (
    <form className="App">
      <select
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">-wybierz-</option>
        <option value="W">Woman</option>
        <option value="M">Man</option>
      </select>

      <input
        type="checkbox"
        checked={agreementChecked}
        onChange={(e) => setAgreementChecked(!agreementChecked)}
        id=""
      />

      <p>You've entered {gender.length} characters.</p>
      <button>send</button>
      {/* <UsersList users={people} /> */}
    </form>
  );
}

export default App;

// wyświetlić listę ludzi
// button -> posortować według nazwy użytkownika
// wyświetlić awatar
// https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/ -> reszta adresu w obiekcie
