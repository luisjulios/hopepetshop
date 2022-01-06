import { Link } from "react-router-dom";
import Fb from "../../assets/images/icons/Fb";
import Ig from "../../assets/images/icons/Ig";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="rrss">
        <h4>Nuestras redes</h4>
        <ul className="fooUl">
          <li className="fooUlLi">
            <a href="/" className="link">
              <Fb />
            </a>
          </li>
          <li className="fooUlLi">
            <a href="/" className="link">
              <Ig />
            </a>
          </li>
        </ul>
      </div>
      <div className="footerNav">
        <h4>Navegación</h4>
        <ul className="fooUl">
          <li className="fooUlLi">
            <Link className="link" to="/all">
              Todos los productos
            </Link>
          </li>
          <li className="fooUlLi">
            <Link className="link" to="/delivery">
              Envíos
            </Link>
          </li>
        </ul>
      </div>
      <div className="contacto">
        <h4>Contacto</h4>
        <ul className="fooUl">
          <li className="fooUlLi">
            <a className="link" href="/">
              +569-55597600
            </a>
          </li>
          <li className="fooUlLi">
            <a className="link" href="/">
              hopepetshop@hopepetshop.cl
            </a>
          </li>
        </ul>
      </div>
      <div className="footerCopy">
        <p>Copyright HopePetshop.cl - 2021. Todos los derechos reservados.</p>
        <p>
          Diseño y desarrollo por{" "}
          <a className="link" href="https://www.linkedin.com/in/antsth/">
            Luis Julio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
