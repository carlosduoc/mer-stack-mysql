import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between px-20 py-2">
      <Link to="/" className="text-white font-bold"><h1> React Mysql</h1></Link>

      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="text-white font-bold py-1 px-2">Listar tareas</Link>
        </li>
        <li>
          <Link to="/new" className="text-white font-bold py-1 px-2"> Crear tarea</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
