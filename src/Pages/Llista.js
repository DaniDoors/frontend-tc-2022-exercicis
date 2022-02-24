import GaleriaFotos from "./GaleriaFotos";
import Comptador from "./Comptador";
import Acordio from "./Acordio";
import Carrusel from "./Carrusel";
import ToggleButton from "./ToggleButton";
import GroupButton from "./GroupButton";
import ToggleableSidebar from "./ToggleableSidebar";
import Tabs from "./Tabs";
import TresEnRatlla from "./TresEnRatlla";
import RellotgeDigital from "./RellotgeDigital";
import RellotgeAnalogic from "./RellotgeAnalogic";
import Sumador from "./Sumador";
import TipCalculator from "./TipCalculator";
import MajorMenor from "./MajorMenor";
import Afegir from "./Afegir";
import TreureRepetits from "./TreureRepetits";
import TreureNoRepetits from "./TreureNoRepetits";
import Intercalar from "./Intercalar";
import Objectes from "./Objectes";
const valors = [4, 7, 5, 8, 3, 6, 5, 12, 8, 54, 100, 5, 7, 9];
const valors2 = [5, 3, 8, 2, 98, 4, 3, 5, 6, 9];
const ides = ["a", "b", "c", "d"];
const objecte = {
  a: { hola: "un" },
  b: { hola: "dos" },
  c: { hola: "tres" },
  d: { hola: "quatre" },
};
let numeroMes = 99;
let posicio = 7;
const Llista = [
  {
    path: "GaleriaFotos",
    titol: "Galeria de Fotos",
    element: <GaleriaFotos />,
  },
  { path: "Comptador", titol: "Comptador", element: <Comptador /> },
  { path: "Acordio", titol: "Acordio", element: <Acordio /> },
  { path: "Carrusel", titol: "Carrusel", element: <Carrusel /> },
  { path: "ToggleButton", titol: "Toggle Button", element: <ToggleButton /> },
  { path: "GroupButton", titol: "GroupButton", element: <GroupButton /> },
  {
    path: "ToggleableSidebar",
    titol: "Toggleable Sidebar",
    element: <ToggleableSidebar />,
  },
  { path: "Tabs", titol: "Tabs", element: <Tabs /> },
  { path: "TresEnRatlla", titol: "TresEnRatlla", element: <TresEnRatlla /> },
  {
    path: "RellotgeDigital",
    titol: "Rellotge Digital",
    element: <RellotgeDigital />,
  },
  {
    path: "RellotgeAnalogic",
    titol: "Rellotge Analogic",
    element: <RellotgeAnalogic />,
  },
  { path: "Sumador", titol: "Sumador de numeros", element: <Sumador /> },
  {
    path: "TipCalculator",
    titol: "Tip Calculator",
    element: <TipCalculator />,
  },
  {
    path: "MajorMenor",
    titol: "Buscar el Major, menor, suma i mitjana d'un array",
    element: <MajorMenor valors={valors} />,
  },
  {
    path: "Afegir",
    titol: "Afegeix un numero",
    element: <Afegir array={valors} numero={numeroMes} posicio={posicio} />,
  },
  {
    path: "TreureRepetits",
    titol: "Fa un array amb els valors repetits",
    element: <TreureRepetits array={valors} />,
  },
  {
    path: "TreureNoRepetits",
    titol: "fa un array amb els valos no repetits",
    element: <TreureNoRepetits valors={valors} />,
  },
  {
    path: "intercalar",
    titol: "Intercala dos arrays",
    element: <Intercalar array1={valors} array2={valors2} />,
  },
  {
    path: "objectes",
    titol: "Exercici 7",
    element: <Objectes array={ides} objecte={objecte} />,
  },
];

export default Llista;
