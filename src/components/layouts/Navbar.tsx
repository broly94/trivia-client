import { NavLink } from "react-router-dom";
import { decriptedRole } from "../../pages/login/utils/encripted";
import HandleLogout from "../../hooks/useHandleLogout";

function Navbar() {
  const role = localStorage.getItem("role");
  const roleParse = JSON.parse(role!);
  const roleUser = decriptedRole(roleParse);

  return (
    <nav className="flex justify-between flex-wrap w-full mb-10 bg-gray-800">
      <div className="flex justify-center py-7">
        <h3 className="font-mono font-semibold text-lg text-center text-zinc-50 self-center mr-3">
          Puntos: 25000
        </h3>
      </div>
      <div className="flex justify-center flex-col sm:flex-row py-7">
        <NavLink
          to="/"
          className="font-mono font-semibold text-3xl text-center text-zinc-50"
        >
          Trivia
          <span className="text-yellow-300"> Game</span>
        </NavLink>
      </div>
      <ul className="flex justify-center py-7 text-zinc-50 font-bold">
        {roleUser === "admin" ? (
          <li className="px-1">
            <NavLink
              to="/account"
              className="text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4 hover:border-green-300"
            >
              Admin
            </NavLink>
          </li>
        ) : (
          <></>
        )}

        <li className="px-1">
          <NavLink
            to="/account"
            className="text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4 hover:border-yellow-300"
          >
            Configuracion
          </NavLink>
        </li>

        <li className="px-1">
          <NavLink
            to="/login"
            className="text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4 hover:border-red-300"
            onClick={HandleLogout()}
          >
            Salir
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
