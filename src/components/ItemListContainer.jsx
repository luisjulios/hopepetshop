import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import stock from '../stock'
import Loading from '../loading.svg'

const getFetched = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(stock)
  }, 3000)
})

const ItemListContainer = ({greeting}) => {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getFetched.then(data => setStock(data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, []);
  
  return (
    <main>
      {greeting}
      {loading ? <img src={Loading} alt="Cargando" className="loading"/>: 
      <ItemList products={stock}/>}
    </main>
  )
}

export default ItemListContainer

