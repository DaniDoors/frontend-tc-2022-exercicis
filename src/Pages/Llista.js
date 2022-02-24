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
    element: <MajorMenor />,
  },
];

export default Llista;
