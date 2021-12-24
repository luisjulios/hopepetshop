import Carrusel from "../Carousel/Carousel"

const Home = ({ greetings }) => {
  return (
    <main>
      <h2>{greetings}</h2>
      <Carrusel/>
        <p className="enunciado">
        Los alimentos favoritos de tu mascota sin moverte de tu casa.
        <small>ENVIO GRATIS (Pedido mínimo $20.000)</small>
        </p>
    </main>
  )
}

export default Home
