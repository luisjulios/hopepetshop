import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartList, removeFromCart, deleteFromCart, totalCart } =
    useCartContext();
  return (
    <main>
      <h2>Carrito de Compras</h2>
      {cartList < 1 ? (
        <>
          <p>No hay productos en el carrito</p>
          <Link to="/all">Volver a la tienda</Link>
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
                    <img
                      src={product.image}
                      alt={product.name}
                      width="50rem"
                      height="50rem"
                    />
                  </td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.quantity * product.price}</td>
                  <td>
                    <button
                      onClick={() => deleteFromCart(product)}
                      className="button-delete"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={removeFromCart}>Vaciar carrito</button>
          <p>Total: ${totalCart()}</p>
          <Link to="/checkout">Terminar compra</Link>
        </>
      )}
    </main>
  );
};

export default Cart;
