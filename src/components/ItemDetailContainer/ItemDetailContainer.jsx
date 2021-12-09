import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import stock from '../../assets/stock.json';
import Loading from '../../assets/loading.svg';

const getItem = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(stock.find(item => item.id === 2));
  }, 2000)
});

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem.then(data => setProduct(data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, []);
  
  return (
    <section className="sectionDetail">
      {loading ? <img src={Loading} alt="loading" className="loading"/> 
      : 
      <ItemDetail
        id={product.id}
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
        stock={product.stock}        
        />}
    </section>
  )
}

export default ItemDetailContainer
