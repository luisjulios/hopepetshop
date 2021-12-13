import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import stock from '../../assets/stock.json';
import Loading from '../../assets/images/loading.svg';
import Favorites from '../Favorites/Favorites';

const getItem = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(stock);
  }, 2000)
});

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idProd} = useParams();
  
  useEffect(() => {
    getItem.then(data => {
      setProduct(data.find(item => item.id === parseInt(idProd)));
      setLoading(false);
    })
  }, [idProd]);
  
  return (
    <section className="sectionDetail">
      {loading ? <img src={Loading} alt="loading" className="loading"/> 
      : 
      <ItemDetail product={product}/>}
      <Favorites products={product}/>
    </section>
  )
}

export default ItemDetailContainer
