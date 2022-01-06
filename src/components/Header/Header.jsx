import Logo from "../../assets/images/logo.svg";
import NavBar from "../NavBar/NavBar";
import { NavLink, Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Fb from "../../assets/images/icons/Fb";
import Ig from "../../assets/images/icons/Ig";

const Header = () => {
  const { totalCart, totalItems } = useCartContext();
  return (
    <>
      <header className="headerMD">
        <NavBar />
        <Link className="brand" to="/">
          <h1>
            HopePetshop
            <img src={Logo} alt="Logo de marca Hope Petshop" className="logo" />
          </h1>
        </Link>
      </header>
      <header className="headerL">
        <Link className="brand" to="/">
          <h1>
            HopePetshop
            <img src={Logo} alt="Logo de marca Hope Petshop" className="logo" />
          </h1>
        </Link>
        <div className="innerHeader">
          <div className="rrss">
            <ul className="fooUl">
              <li className="fooUlLi">
                <a href="/" className="link">
                  <Fb />
                </a>
              </li>
              <li className="fooUlLL">
                <a href="/" className="link">
                  <Ig />
                </a>
              </li>
            </ul>
          </div>
          <NavLink className="cartL" to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <small>{totalItems()}</small>
            <small>${totalCart()}</small>
          </NavLink>
        </div>
      </header>

      <div className="navbarL">
        <NavBar />
      </div>
    </>
  );
};

export default Header;
