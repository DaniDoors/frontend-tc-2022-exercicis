import { Outlet, Link } from "react-router-dom";
import Llista from "./Llista";

export default function Layout() {
  return (
    <>
      <header> Exercicis React</header>
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet />
        </main>
        <nav className="HolyGrail-nav">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {Llista.map((item) => (
                <li>
                  <Link to={item.path}>{item.titol}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </nav>
        <aside className="HolyGrail-ads">…</aside>
      </div>
      <footer>Dani Puertas</footer>
    </>
  );
}
