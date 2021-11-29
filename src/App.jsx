import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <img src={Logo} alt="Logo" className="logo"/>
      </header>
      <ItemListContainer greeting="Bienvenido a HopePetshop, lo mejor para tu mascota!"/>
    </div>
  );
}

export default App;
