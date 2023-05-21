import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartItem.css";
const CartItem = () => {
  return (
    <li className="cartitem">
      {/* info */}
      <div className="info">
        {/* car name */}
        <h3 className="car-name">SUV</h3>
        {/* car desc */}
        <p>Mercedes M class</p>
        {/* btn groups */}
        <div className="btn-groups">
          <div className="qty-btns">
            <button className="qty-item btn-minus">-</button>
            <span style={{ textAlign: "center" }} className="qty-item">
              7
            </span>
            <button className="qty-item btn-plus">+</button>
          </div>
          <FontAwesomeIcon size="lg" icon={faTrash} />
        </div>
      </div>
      {/* car image */}
      <img src="/images/cart-car1.png" alt="" />
    </li>
  );
};
export default CartItem;
