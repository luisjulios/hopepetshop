import { Link } from "react-router-dom";
import { memo } from "react";
import "./Item.css";
const Item = memo(({ product }) => {
  return (
    <div className="cardProduct" key={product.id}>
      <Link to={`/hopepetshop/details/${product.id}`} className="linkItem">
      <img
        src={product.image}
        alt="Imagen de producto"
        className="imgCardProduct"
      />
      <h3 className="nameProduct">{product.name}</h3>
      <h3 className="priceProduct">$ {product.price}</h3>
        <button className="btnVerMas">Detalles</button>
      </Link>
      <hr />
    </div>
  );
});

export default Item;
