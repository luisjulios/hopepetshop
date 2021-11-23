import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
