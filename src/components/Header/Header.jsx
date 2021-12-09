import Logo from '../../assets/logo.svg';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header>
      <NavBar/>
      <h1>HopePetshop<img src={Logo} alt="Logo" className="logo"/></h1>
    </header>
  )
}

export default Header;
