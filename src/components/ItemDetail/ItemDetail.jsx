import ItemCount from "../ItemCount/ItemCount";

const loadImage = (imageName) => (require(`../../assets/images/${imageName}`).default);

const ItemDetail = ({product}) => {
  return (
    <div className="itemDetail" key={product.id}>
      <h2 className="nameDetailProduct">{product.name}</h2>
      <img src={loadImage(`${product.image}`)} alt="Imagen detalle de producto" className="imgDetailProduct"/>
      <p className="priceDetailProduct">Precio: ${product.price}</p>
      <p className="descriptionDetailProduct">{product.description}</p>
      <ItemCount stock={product.stock} initial={1}/>
    </div>
  )
}

export default ItemDetail;
