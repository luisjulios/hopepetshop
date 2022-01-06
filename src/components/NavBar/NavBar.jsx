import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import All from "../../assets/images/icons/All";
import Home from "../../assets/images/icons/Home";
const NavBar = () => {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "isActive" : "")}
              to="/"
            >
              <Home />
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "isActive" : "")}
              to="/all"
            >
              <All />
              PRODUCTOS
            </NavLink>
            <ul>
              <li>
                {" "}
                <NavLink
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  to="/category/gatos"
                >
                  Gatos
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  to="/category/perros"
                >
                  Perros
                </NavLink>{" "}
              </li>
            </ul>
          </li>
          <CartWidget />
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
