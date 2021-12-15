import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
const loadImage = (imageName) =>
  require(`../../assets/images/${imageName}`).default;

const ItemDetail = ({ product, onAdd }) => {
  const [goCart, setGoCart] = useState(false);

  onAdd = (quantity) => {
    const message = `Agregaste ${quantity} ${
      quantity > 1 ? "productos" : "producto"
    } al carrito con un total de ${quantity * product.price}`;
    alert(message);
    setGoCart(true);
  };

  return (
    <div className="itemDetail" key={product.id}>
      <h2 className="nameDetailProduct">{product.name}</h2>
      <img
        src={loadImage(`${product.image}`)}
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
