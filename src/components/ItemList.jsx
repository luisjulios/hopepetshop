import React, {useState, useEffect} from 'react'
import Item from './Item'
import stock from '../stock'
import Loading from '../loading.svg'

const getFetched = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(stock)
  }, 3000)
})
const ItemList = ({items}) => {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getFetched.then(data => setStock(data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, []);


  return (
    <div className="itemList">
      {loading ? <img src={Loading} alt="Cargando" className="loading"/> : stock.map(product => <Item key={product.id} product={product}/>)}
    </div>
  )
}

export default ItemList
