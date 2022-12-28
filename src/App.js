import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div className="App">
      <div className="sandbox" style={{ backgroundColor: bgColor }}></div>

      <select value={bgColor} onChange={(e) => setBgColor(e.target.value)}>
        <option value="white">-select-</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="crimson">Crimson</option>
      </select>
    </div>
  );
}

export default App;
17: 30
// wyświetlić listę ludzi
// button -> posortować według nazwy użytkownika
// wyświetlić awatar
// https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/ -> reszta adresu w obiekcie
