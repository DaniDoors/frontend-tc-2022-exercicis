import { useState } from "react";
import "./Acordio.css";

const Contingut = [
  {
    titol: "No ho creuas",
    text: "tinc pels al nas",
  },
  {
    titol: "Pero es cert",
    text: "i en tinc molts",
  },
  {
    titol: "No ho diguis",
    text: "i son molt llargs i negres",
  },
  {
    titol: "A ningu",
    text: "i s'omplen de mocs",
  },
  {
    titol: "Que no es pot saber",
    text: "pq es marranot",
  },
];
const Contingut2 = [
  "No ho creuas",
  "Pero es cert",
  "No ho diguis",
  "A ningu",
  "Que no es pot saber",
];

export default function Acordio() {
  const [veure, setVeure] = useState(1000);

  const show = (index) => {
    setVeure(index);
  };

  return (
    <div>
      {Contingut.map((n, i) => (
        <div key={i}>{Contingut[i].titol}</div>
      ))}
    </div>
  );
}

/*
<div className={veure === i ? "VeureSi" : "VeureNo"}>
          {Contingut[i].text}
        </div>
        */
