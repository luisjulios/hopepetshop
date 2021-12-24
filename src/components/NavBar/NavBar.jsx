import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
      <>
      <nav className='menu'>
        <ul>
          <li>
            <NavLink className={({ isActive }) => isActive ? "isActive" : ""} to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house m-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
              </svg>INICIO
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "isActive" : ""} to="/all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-ul m-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>PRODUCTOS
            </NavLink>
            <ul>
              <li> <NavLink className={({ isActive }) => isActive ? "isActive" : ""} to="/category/gatos">Gatos</NavLink> </li>
              <li> <NavLink className={({ isActive }) => isActive ? "isActive" : ""} to="/category/perros">Perros</NavLink> </li>
            </ul>
          </li>
          <CartWidget/>
        </ul>
      </nav>
      </>
  )
}
export default NavBar