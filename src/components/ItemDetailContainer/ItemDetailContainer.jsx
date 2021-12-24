import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../../assets/images/loading.svg';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Favorites from '../Favorites/Favorites';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {idProd} = useParams();
  
  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, `productos/${idProd}`);
    getDoc(queryProduct).then(resp => {
      setProduct({id: resp.id, ...resp.data()}); 
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

export default ItemDetailContainer;
