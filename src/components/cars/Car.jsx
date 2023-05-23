import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import "./Car.css";
const Car = ({
  first,
  marginLeft,
  carClass,
  name,
  desc,
  seats,
  luggages,
  image,
}) => {
  return (
    <li
      style={{ marginLeft: first ? `-${marginLeft}%` : "auto" }}
      className="car"
    >
      <div className="img-box">
        <img src={image} alt="car" />
      </div>
      <div className="title">
        <h3>{carClass}</h3>
        <h6>{name}</h6>
      </div>
      <p className="desc">{desc}</p>

      <div className="bottom">
        <div>
          <div className="info">
            <FontAwesomeIcon className="info-icon" icon={faUserGroup} />
            <span>{seats} Seats</span>
          </div>
          <div className="info">
            <FontAwesomeIcon className="info-icon" icon={faBriefcase} />
            <span>{luggages} Luggage</span>
          </div>
        </div>
        <div className="car-qty">
          <button className="btn-minus item">-</button>
          <span className="item">7</span>
          <button className="btn-plus item">+</button>
        </div>
      </div>
    </li>
  );
};

export default Car;
