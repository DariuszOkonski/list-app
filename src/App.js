import "./App.css";
import UsersList from "./components/UsersList/UsersList";
import { people } from "./data/people";

function App() {
  return (
    <div className="App">
      <UsersList users={people} />
    </div>
  );
}

export default App;

// wyświetlić listę ludzi
// button -> posortować według nazwy użytkownika
// wyświetlić awatar
// https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/ -> reszta adresu w obiekcie
