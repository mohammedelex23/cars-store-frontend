import "./Testmonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testmonials = () => {
  return (
    <section className="testmonials">
      <h2>TESTMONIALS</h2>
      <h5>Testmonials</h5>
      <div className="desc">
        <p className="desc-p">
          I recently bought a car through YourCar and I was blown away by their
          exceptional service. The staff were friendly and knowledgeable, and
          they helped me find the perfect car for my needs. I highly recommend
          YourCar to anyone looking for a luxury car buying experience.
        </p>
        <div className="stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="author">
          <h4>Annie Rudy</h4>
          <h6>Las vegas</h6>
        </div>
        <img src="/images/testmonials.png" alt="car" />
      </div>
    </section>
  );
};

export default Testmonials;
