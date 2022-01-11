import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { FaHome, FaList } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore
} from "firebase/firestore";
import './NavBar.css';

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const queryCategory = collection(db, "productos");
    getDocs(queryCategory).then((resp) => {
        setCategories(
          resp.docs
            .map((item) => item.data().category)
            .reduce(
              (acc, item) => (acc.includes(item) ? acc : [...acc, item]),
              []
            )
        );
    });
  }, []);

  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "isActive" : "")}
              to="/hopepetshop"
            >
              <FaHome className="icon"/>
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "isActive" : "")}
              to="/hopepetshop/all"
            >
              <FaList className="icon"/>
              PRODUCTOS
            </NavLink>
            <ul>
              {categories.map((category) => (
                <li key={category}>
                <NavLink
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  to={`/hopepetshop/category/${category}`}
                >
                  {category}
                </NavLink>
              </li>
              ))}
            </ul>
          </li>
          <CartWidget />
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
