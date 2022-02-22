import { useState } from "react";
import "./Comptador.css";

export default function Comptador() {
  const [display, setDisplay] = useState(0);

  const incrementa = (quantitat) => {
    const display2 = display + quantitat;
    if (0 <= display2 && display2 <= 10) setDisplay(display + quantitat);
  };

  return (
    <div className="Comptador">
      <div className="Display">{display}</div>
      <div className="Butons">
        <button className="Buto1" onClick={() => incrementa(1)}>
          +1
        </button>
        <button className="Buto1" onClick={() => incrementa(-1)}>
          -1
        </button>
        <button className="Buto1" onClick={() => incrementa(5)}>
          +5
        </button>
      </div>
    </div>
  );
}
