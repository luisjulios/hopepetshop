import ItemCount from "../ItemCount/ItemCount";

const loadImage = (imageName) => (require(`../../assets/${imageName}`).default);

const ItemDetail = ({id, name, description, price, image, stock}) => {
  return (
    <div className="itemDetail">
      <h2 className="nameDetailProduct">{name}</h2>
      <img src={loadImage(`${image}`)} alt={name} className="imgDetailProduct"/>
      <p className="priceDetailProduct">Precio: ${price}</p>
      <p className="descriptionDetailProduct">{description}</p>
      <ItemCount stock={stock} initial={1}/>
    </div>
  )
}

export default ItemDetail;
