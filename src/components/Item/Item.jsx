import ItemCount from '../ItemCount/ItemCount'

const loadImage = (imageName) => (require(`../../assets/${imageName}`).default);

const Item = ({product}) => {

  return (
    <div className="cardProduct">
      <img src={loadImage(`${product.image}`)} alt="Producto" className="imgCardProduct"/>
      <h3 className="nameProduct" key={product.id}>{product.name}</h3>
      <h2 className="priceProduct">$ {product.price}</h2>
      <ItemCount stock={product.stock} initial={1}/>
    </div>
  )
}

export default Item
