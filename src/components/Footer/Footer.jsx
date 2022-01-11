import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="rrss">
        <h4>Nuestras redes</h4>
        <ul className="fooUl">
          <li>
            <a href="/" className="link">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hopepetshopcl/" className="link">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="footerNav">
        <h4>Navegación</h4>
        <ul className="fooUl">
          <li>
            <Link className="link" to="/all">
              Todos los productos
            </Link>
          </li>
        </ul>
      </div>
      <div className="contacto">
        <h4>Contacto</h4>
        <ul className="fooUl">
          <li>
            <a className="link" href="/">
              +569-55597600
            </a>
          </li>
          <li>
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
