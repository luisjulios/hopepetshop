import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartList, emptyCart, deleteFromCart, totalCart } = useCartContext();

  return (
    <main>
      <h2>Carrito de Compras</h2>
      {cartList < 1 ? (
        <>
          <p>No hay productos en el carrito</p>
          <Link to="/all" className="backStore">
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
                  <td className="d-flex flex-column align-items-center">
                    <img src={product.image} alt={product.name} />
                    <h6>{product.name}</h6>
                  </td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
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
            Total: ${totalCart() < 20000 ? totalCart() + 2500 : totalCart()}
          </p>
          <p className="infoCart">
            Compras inferiores a $20.000, el envío es de $2.500.
          </p>
          <Link to="/checkout" className="checkout">
            Terminar compra
          </Link>
        </>
      )}
    </main>
  );
};

export default Cart;
