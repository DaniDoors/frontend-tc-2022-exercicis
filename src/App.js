import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Llista from "./Pages/Llista";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {Llista.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
