import { useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ product, onAdd }) => {
  const [goCart, setGoCart] = useState(false);

  const {addToCart} = useCartContext();

  onAdd = (quantity) => {
    addToCart({...product, quantity: quantity});
    setGoCart(true);
  };
  
  return (
    <div className="itemDetail" key={product.id}>
      <h2 className="nameDetailProduct">{product.name}</h2>
      <img
        src={product.image}
        alt="Imagen detalle de producto"
        className="imgDetailProduct"
      />
      <p className="priceDetailProduct">Precio: ${product.price}</p>
      <p className="descriptionDetailProduct">{product.description}</p>
      {goCart === false ? (
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      ) : (
        <Link className="goCart" to="/cart">Ir al carrito</Link>
      )}
    </div>
  );
};

export default ItemDetail;
