import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Cart from "../cart/Cart";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hash, setHash] = useState("/");
  function toggleNav() {
    if (isCartOpen) setIsCartOpen(false);
    setIsNavOpen(!isNavOpen);
  }
  function toggleCart() {
    if (isNavOpen) setIsNavOpen(false);
    setIsCartOpen(!isCartOpen);
  }
  function changeHash(hash) {
    setHash(hash);
  }
  useEffect(() => {
    history.replaceState(null, null, " ");
  }, []);
  return (
    <header>
      <div className="header-box">
        {/* logo */}
        <h1>
          <strong>Your</strong>Car
        </h1>
        {/* nav-links */}
        <nav className={`nav ${isNavOpen ? "open" : "close"}`}>
          <ul className="nav-links">
            <li
              onClick={() => changeHash("/")}
              style={{ backgroundColor: hash === "/" ? "#741906" : "" }}
            >
              <a href="/">Home</a>
            </li>
            <li
              onClick={() => changeHash("#about")}
              style={{ backgroundColor: hash === "#about" ? "#741906" : "" }}
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={() => changeHash("#services")}
              style={{ backgroundColor: hash === "#services" ? "#741906" : "" }}
            >
              <a href="#services">Services</a>
            </li>
            <li
              onClick={() => changeHash("#cars")}
              style={{ backgroundColor: hash === "#cars" ? "#741906" : "" }}
            >
              <a href="#cars">Cars</a>
            </li>
            <li
              onClick={() => changeHash("#contact")}
              style={{ backgroundColor: hash === "#contact" ? "#741906" : "" }}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="overlay"></div>
        </nav>
        {/* cart icon */}
        <div
          onClick={toggleCart}
          style={{ cursor: "pointer" }}
          className="cart-icon"
        >
          <FontAwesomeIcon className="icon" icon={faShoppingCart} />
          <span>9</span>
        </div>
        {/* burgur icon */}
        <FontAwesomeIcon
          onClick={toggleNav}
          className="bars-icon icon"
          icon={faBars}
        />
        <Cart isCartOpen={isCartOpen} />
      </div>
    </header>
  );
};

export default Header;
