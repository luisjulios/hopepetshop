import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Cart from "../../assets/images/icons/Cart";
const CartWidget = () => {
  const { cartList, totalItems } = useCartContext();
  return (
    <>
      <li className="cartMD">
        <NavLink
          className={({ isActive }) => (isActive ? "isActive" : "")}
          to="/cart"
        >
          <Cart />
          CARRITO {cartList.length === 0 ? "" : `(${totalItems()})`}
        </NavLink>
      </li>
    </>
  );
};

export default CartWidget;
