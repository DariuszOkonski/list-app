import "./ColorBox.css";
import React, { useState } from "react";

export function ColorBox(props) {
  const [backgroundColor, setBackgroundColor] = useState("#ff0000");

  return (
    <>
      <div className="ColorBox__box" style={{ backgroundColor }} />
      <div>
        <select
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        >
          <option value="#ff0000">Czerwony</option>
          <option value="#00ff00">Zielony</option>
          <option value="#0000ff">Niebieski</option>
          <option value={backgroundColor}>Optional</option>
        </select>
      </div>
      <div>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
    </>
  );
}
