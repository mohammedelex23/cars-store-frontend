import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import "./Landing.css";
const Landing = () => {
  return (
    <section className="landing">
      <h3 className="title">Find the perfect car for you at YourCar.</h3>
      <p className="desc">
        We offer a wide range of cars that cater to your needs and budget. Visit
        us today and drive away with your dream car!
      </p>
      <button className="btn">
        <span>Discover</span>
        <FontAwesomeIcon icon={faSquareArrowUpRight} />
      </button>
    </section>
  );
};
export default Landing;
