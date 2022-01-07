import Logo from "../../assets/images/logo.svg";
import NavBar from "../NavBar/NavBar";
import { NavLink, Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { FaFacebook, FaInstagram, FaShoppingCart } from "react-icons/fa";

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
                  <FaFacebook />
                </a>
              </li>
              <li className="fooUlLL">
                <a href="/" className="link">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <NavLink className="cartL" to="/cart">
            <FaShoppingCart />
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
