import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/get">Lista Usuarios</Link>
        </li>
        <li>
          <Link to="/new">Nuevo Usuario</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;