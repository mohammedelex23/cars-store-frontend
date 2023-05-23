import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightDots,
  faGem,
  faHandHoldingHand,
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css";
const Services = () => {
  return (
    <section className="services-box">
      <div className="overlay"></div>
      <div className="services">
        <div className="title">
          <h2>SERVICES</h2>
          <h5>Services</h5>
        </div>
        <ul className="content">
          <li>
            <FontAwesomeIcon className="icon" icon={faArrowUpRightDots} />
            <h3 className="sub-title">Car sales</h3>
            <p>
              Car sales At YourCar, we offer a wide selection of luxury vehicles
              for sale. Whether you're in the market for a sleek sports car or a
              spacious SUV, we have the perfect vehicle to fit your needs.
            </p>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faHandHoldingHand} />
            <h3>Car rental</h3>
            <p>
              Car rental If you're in need of a luxury car rental, look no
              further than YourCar. Our fleet of high-end vehicles is regularly
              maintained and serviced to ensure that you have a safe and
              comfortable driving experience.
            </p>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faGem} />
            <h3>Car selling</h3>
            <p>
              Car selling At YourCar, we make it easy to sell your car. Simply
              bring your vehicle in for an appraisal, and we'll handle the rest.
              We offer fair prices and a hassle-free selling process, so you can
              get your vehicle with minimal effort.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
