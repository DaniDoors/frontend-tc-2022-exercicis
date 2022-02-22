import { useState } from "react";
import "./GaleriaFotos.css";

const fotos = ["CB125.jpg", "Gladius.jpg", "H2.jpg", "Ninja.jpg", "XSR.jpg"];

export default function GaleriaFotos() {
  const [fotaca, setFotaca] = useState(false);

  if (fotaca) {
    return (
      <div className="FotoGran">
        <img src={fotaca} alt={fotaca} onClick={() => setFotaca(false)} />
      </div>
    );
  }
  return (
    <div className="Album">
      <div className="Fotos">
        {fotos.map((foto, i) => (
          <img
            className="Foto"
            key={i}
            src={foto}
            alt={foto}
            onClick={() => setFotaca(foto)}
          />
        ))}
      </div>
    </div>
  );
}
