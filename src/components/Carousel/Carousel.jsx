const loadImage = (imageName) => (require(`../../assets/images/${imageName}`).default);

const Carrusel = () => {
  return (
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={loadImage('slide1.jpg')} className="d-block slide" alt="slide carousel"/>
    </div>
    <div className="carousel-item">
      <img src={loadImage('slide2.jpg')} className="d-block slide" alt="slide carousel"/>
    </div>
    <div className="carousel-item">
      <img src={loadImage('slide3.jpg')} className="d-block slide" alt="slide carousel"/>
    </div>
  </div>
</div>
  )
}
export default Carrusel;
