import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import CartItem from "./CartItem";
const Cart = ({ isCartOpen }) => {
  return (
    <div
      style={{ visibility: isCartOpen ? "visible" : "hidden" }}
      className={`cart-box ${isCartOpen ? "open" : "close"}`}
    >
      <div className="cart">
        {/* cart items */}
        <ul>
          <CartItem />
        </ul>
        {/* delete all btn */}
        <button className="btn-delete-all">
          <span>Delete All</span>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Cart;
