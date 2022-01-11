import Logo from "../../assets/images/logo.svg";
import NavBar from "../NavBar/NavBar";
import { NavLink, Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { FaFacebook, FaInstagram, FaShoppingCart } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  const { totalCart, totalItems } = useCartContext();
  return (
    <>
      <header className="headerMD">
        <Link className="brand" to="/hopepetshop">
          <h1>
            HopePetshop
            <img src={Logo} alt="Logo de marca Hope Petshop" className="logo" />
          </h1>
        </Link>
        <NavBar />
      </header>
      <header className="headerL">
        <Link className="brand" to="/hopepetshop">
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
          <NavLink className="cartL" to="/hopepetshop/cart">
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
