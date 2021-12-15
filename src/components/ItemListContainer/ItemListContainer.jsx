import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import stock from '../../assets/stock.json';
import Loading from '../../assets/images/loading.svg';
import Favorites from "../Favorites/Favorites";

const getFetched = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(stock)
  }, 3000)
});

const ItemListContainer = ({nameCategory, greetings}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {idCategory} = useParams();
  
  useEffect(() => {
    if(idCategory){
      getFetched.then(data => {
        setProducts(data.filter(prod => prod.category === idCategory));
        setLoading(false);
      })
    } else {
      setProducts(stock);
      setLoading(false);
    }
  }, [idCategory]);
  
  if (idCategory === 'michis') {
    nameCategory = 'Michis';
  } else if (idCategory === 'firulais') {
    nameCategory = 'Firulais';
  }
  return (
    <main>
      <h2>{nameCategory || greetings}</h2>
      {loading ? <img src={Loading} alt="Cargando" className="loading"/>
      : 
      <ItemList products={products}/>}
      <Favorites products={products}/>
    </main>
  )
};

export default ItemListContainer;