import { useCartContext } from "../../context/CartContext";
const loadImage = (imageName) =>
  require(`../../assets/images/${imageName}`).default;



const Cart = () => {
  const {cartList, removeFromCart, deleteFromCart} = useCartContext();
  console.log(cartList);
  return (
    <main>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartList.map((product) => (
          <li key={product.id}>
            <img src={loadImage(`${product.image}`)} alt="" width='75rem' height='75rem'/>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <p>Total: {product.quantity * product.price}</p>
            <button onClick={() => deleteFromCart(product)}>Eliminar</button>
          </li>
        ))}
        <button onClick={removeFromCart}>Vaciar carrito</button>
      </ul>
    </main>
  )
}

export default Cart
