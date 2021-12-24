import { useState, useEffect, memo } from "react"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Item from '../Item/Item'

const Favorites = memo(({products}) => {
  const [favorites, setFavorites] = useState([])
  useEffect(() => {
    const db = getFirestore();
    const queryFavorites = query(collection(db, 'productos'), where('stock', '>', 6));
    getDocs(queryFavorites)
    .then(resp => { setFavorites( resp.docs.map(product => ({id: product.id, ...product.data()}))); 
    })
  }, []);

  return (
    <section className="favorites">
      <h3>Productos destacados</h3>
      <div className="favorites__container">
      {favorites.map(product => <Item key={product.id} product={product}/>)}
      </div>
    </section>
  )
})

export default Favorites;

// 