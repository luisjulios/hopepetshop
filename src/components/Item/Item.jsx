import {Link} from 'react-router-dom';

const loadImage = (imageName) => (require(`../../assets/images/${imageName}`).default);

const Item = ({product}) => {

  return (
    <div className="cardProduct"  key={product.id}>
      <img src={loadImage(`${product.image}`)} alt="Imagen de producto" className="imgCardProduct"/>
      <h3 className="nameProduct">{product.name}</h3>
      <h3 className="priceProduct">$ {product.price}</h3>
      <Link to={`/details/${product.id}`}><button className='btnVerMas' >Detalles</button></Link>
      <hr/>
    </div>
  )
}

export default Item
