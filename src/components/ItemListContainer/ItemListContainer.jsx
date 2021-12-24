import {useState, useEffect, memo} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from '../../assets/images/loading.svg';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Favorites from "../Favorites/Favorites";


const ItemListContainer = memo(({nameCategory, greetings}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategory} = useParams();

  useEffect(() => {
    const db = getFirestore();
    if(idCategory) {
      const queryProducts = query(collection(db, 'productos'), where('category', '==', idCategory));
      getDocs(queryProducts)
      .then(resp => { setProducts( resp.docs.map(product => ({id: product.id, ...product.data()}))); 
      setLoading(false); })
    } else {
      const queryProducts = collection(db, 'productos');
      getDocs(queryProducts)
      .then(resp => { setProducts( resp.docs.map(product => ({id: product.id, ...product.data()})) ); 
      setLoading(false); })
    }
  }, [idCategory]);

  if (idCategory === 'gatos') {
    nameCategory = 'Gatos';
  } else if (idCategory === 'perros') {
    nameCategory = 'Perros';
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
});

export default ItemListContainer;