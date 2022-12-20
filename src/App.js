import "./App.css";
import { people } from "./people";

function App() {
  console.log(people);
  return (
    <div className="App">
      <header className="App-header">Welcome</header>
    </div>
  );
}

export default App;

// wyświetlić listę ludzi
// button -> posortować według nazwy użytkownika
// wyświetlić awatar
// https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/ -> reszta adresu w obiekcie
