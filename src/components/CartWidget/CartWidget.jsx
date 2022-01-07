import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const { cartList, totalItems } = useCartContext();
  return (
    <>
      <li className="cartMD">
        <NavLink
          className={({ isActive }) => (isActive ? "isActive" : "")}
          to="/cart"
        >
          <FaShoppingCart className="icon"/>
          CARRITO {cartList.length === 0 ? "" : `(${totalItems()})`}
        </NavLink>
      </li>
    </>
  );
};

export default CartWidget;
