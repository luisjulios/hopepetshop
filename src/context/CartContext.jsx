import { createContext, useState, useContext } from "react";
import {toast} from 'react-toastify';
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  

  function addQuantity(product) {
    const newCartList = cartList.map((item) => {
      if (item.id === product.id) {
        item.quantity += 1;
        if (item.stock < item.quantity) {
          item.quantity -= 1;
        }
      }
      return item;
    });
    setCartList(newCartList);
  }
  function removeQuantity(product) {
    const newCartList = cartList.map((item) => {
      if (item.id === product.id) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          item.quantity = 1;
        }
      }
      return item;
    });
    setCartList(newCartList);
  }
  function addToCart(product) {
    const index = cartList.findIndex((i) => i.id === product.id);
    if (index > -1) {
      const prevQuantity = cartList[index].quantity;
      cartList.splice(index, 1);
      setCartList([
        ...cartList,
        { ...product, quantity: product.quantity + prevQuantity },
      ]);
    } else {
      setCartList([...cartList, product]);
    }
  }
  function deleteFromCart(product) {
    setCartList(cartList.filter((item) => item.id !== product.id));
    toast(`Has eliminado ${product.name}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false
    })
  }

  function emptyCart() {
    setCartList([]);
    toast('Sin productos en el carrito', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false
    })
  }
  function totalItems() {
    return cartList.reduce((acc, item) => acc + item.quantity, 0);
  }
  function totalCart() {
    if ((cartList.reduce((acc, item) => acc + item.price * item.quantity, 0))  < 20000  && cartList.length > 0) {
      return cartList.reduce((acc, item) => acc + item.price * item.quantity, 0) + 2500;
    } else {
      return cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
  }
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        deleteFromCart,
        totalItems,
        totalCart,
        addQuantity,
        removeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
