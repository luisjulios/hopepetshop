import Favorites from '../../components/Favorites/Favorites.jsx'
const NotFound = () => {
  return (
    <div className="notFound">
      <h2 className="error">ERROR - 404</h2>
      <p>La página que estás buscando no existe</p>
      <Favorites/>
    </div>
  )
}

export default NotFound
