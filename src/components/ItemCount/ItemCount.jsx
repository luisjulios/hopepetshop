import {Fragment, useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(initial);
  
  const addQuantity = () => {
    setQuantity(prev => prev + 1);
    if (quantity === stock) {
      setQuantity(quantity);
    }
  }
  const removeQuantity = () => {
    setQuantity(prev => prev - 1);
    if (quantity === 1) {
      setQuantity(1);
    }
  }
   onAdd = () => {
    const message = `Agregaste ${quantity} ${quantity > 1 ? 'productos' : 'producto'} al carrito`;
    alert(message);
  }
  return (
    <>
      {stock === 0 ? 
      <button className="outOfStock" disabled>No disponible</button> 
      : 
      <Fragment>
      <div className="buttons">
      <button className="remove" onClick={removeQuantity}>-</button>
      <input className="quantity" value={quantity} readOnly={true}/>
      <button className="add" onClick={addQuantity}>+</button>
      </div>
      <button type="submit" className="addCart" onClick={onAdd}>Agregar al carrito</button>
      </Fragment>}
    </>
  )
}

export default ItemCount