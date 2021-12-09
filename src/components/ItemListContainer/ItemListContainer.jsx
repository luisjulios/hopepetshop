import {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import stock from '../../assets/stock.json';
import Loading from '../../assets/loading.svg';

const getFetched = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(stock)
  }, 3000)
});

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getFetched.then(data => setProducts(data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, []);
  
  return (
    <main>
      <h2>{greeting}</h2>
      {loading ? <img src={Loading} alt="Cargando" className="loading"/>: 
      <ItemList products={products}/>}
    </main>
  )
};

export default ItemListContainer;