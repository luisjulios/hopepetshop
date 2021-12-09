import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemDetailContainer/>
      <ItemListContainer greeting="Bienvenido a HopePetshop, lo mejor para tu mascota!"/>
      <Footer/>
    </div>
  );
}

export default App;
