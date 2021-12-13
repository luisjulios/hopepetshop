import { useState, useEffect } from "react"
import stock from "../../assets/stock.json"
import Item from '../Item/Item'

const getFavorites = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(stock)
  }, 1000)
});


const Favorites = ({product}) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    getFavorites.then(data => {
      setFavorites(data.filter(product => product.stock > 6))
    })
  }, [])
  return (
    <section className="favorites">
      <h3>Productos destacados</h3>
      <div className="favorites__container">
      {favorites.map(product => <Item key={product.id} product={product}/>)}
      </div>
    </section>
  )
}

export default Favorites

// 