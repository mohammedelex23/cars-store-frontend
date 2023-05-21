import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header>
      <div className="header-box">
        {/* logo */}
        <h1>
          <strong>Your</strong>Car
        </h1>
        {/* nav-links */}
        <nav className="nav">
          <ul className="nav-links">
            <li style={{ backgroundColor: "#741906" }}>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#cars">Cars</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="overlay"></div>
        </nav>
        {/* cart icon */}
        <div className="cart-icon">
          <FontAwesomeIcon className="icon" icon={faShoppingCart} />
          <span>9</span>
        </div>
        {/* burgur icon */}
        <FontAwesomeIcon className="bars-icon icon" icon={faBars} />
      </div>
    </header>
  );
};

export default Header;
