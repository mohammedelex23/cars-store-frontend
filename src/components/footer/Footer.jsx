import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        {/* your car */}
        <div className="yourcar">
          <h2>
            <strong>Your</strong>Car
          </h2>
          <p>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>
          <p>
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </div>
        {/* news letter */}
        <div className="newsletter">
          <h2>News Letter</h2>
          <p>
            Subscribe to our news letter for updates, news and exclusive offers
          </p>
          <div className="form">
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
        {/* contact */}
        <div className="contact">
          <h2>Contact</h2>
          <div className="address">
            <div className="item">
              <FontAwesomeIcon icon={faLocationDot} />
              <div>
                <p>2038 2nd Avenue,</p>
                <p>Las Vegas, United States</p>
              </div>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <p>01444773421423</p>
                <p>01477678449405</p>
              </div>
            </div>

            <div className="item">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>info@YourCar.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="social">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </div>
        <div className="line"></div>
        <p>
          © Copyright 2023 · <strong>YourCar</strong> All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
