import React from 'react'
import ItemCount from './ItemCount'
import Noavailable from '../noavailable.png'
const Item = ({product}) => {
  return (
    <div className="cardProduct">
      <img src={Noavailable} alt="Producto" className="imgProduct"/>
      <h3 className="nameProduct">{product.name}</h3>
      <h2 className="priceProduct">$ {product.price}</h2>
      <ItemCount stock={product.stock} initial={1}/>
    </div>
  )
}

export default Item
