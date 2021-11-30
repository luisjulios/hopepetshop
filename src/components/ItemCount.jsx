import React, {useState} from 'react'

function ItemCount({stock, initial = 1, onAdd}) {
  const [quantity, setQuantity] = useState(initial);
  
  const addQuantity = () => {
    setQuantity(quantity + 1);
    if (quantity === stock) {
      setQuantity(quantity);
    }
  }
  const removeQuantity = () => {
    setQuantity(quantity - 1);
    if (quantity === 1) {
      setQuantity(1);
    }
  }
  return (
    <form action="#" className="formProduct">
      <p>Product Name</p>
      <div className="buttons">
      <button className="remove" onClick={removeQuantity}>-</button>
      <input type="number" className="quantity" value={quantity} onChange={()=>{console.log(quantity);}}/>
      <button className="add" onClick={addQuantity}>+</button>
      </div>
      <button type="submit" className="addCart" onClick={onAdd}>Agregar al carrito</button>
    </form>
  )
}

export default ItemCount
