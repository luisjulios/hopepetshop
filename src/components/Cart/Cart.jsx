import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../ItemCount/ItemCount.css";
import "./Cart.css";


const Cart = () => {

  const { cartList, emptyCart, deleteFromCart, totalCart, addQuantity, removeQuantity } = useCartContext();
  
  return (
    <main>
      <h2>Carrito de Compras</h2>
      {cartList < 1 ? (
        <>
          <p>No hay productos en el carrito</p>
          <Link to="/hopepetshop/all" className="backStore">
            Volver a la tienda
          </Link>
        </>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.name} />
                    <h6>{product.name}</h6>
                  </td>
                  <td>${product.price}</td>
                  <td>
                  <button className="remove" onClick={()=>{removeQuantity(product)}}>
                    <FaMinus className="faQuantity" />
                  </button>
                    <input type="number"className="quantity" readOnly value={product.quantity}/>
                  <button className="add" onClick={()=>{addQuantity(product)}}>
                    <FaPlus className="faQuantity" />
                  </button>
                    </td>
                  <td>${product.quantity * product.price}</td>
                  <td>
                    <button
                      onClick={() => deleteFromCart(product)}
                      className="btn-delete"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={emptyCart} className="btn-empty">
            Vaciar carrito
          </button>
          <p>
            Total: ${totalCart()}
          </p>
          <p className="infoCart">
            Compras inferiores a $20.000, el envío es de $2.500.
          </p>
          <Link to="/hopepetshop/checkout" className="checkout">
            Terminar compra
          </Link>
        </>
      )}
    </main>
  );
};

export default Cart;
