import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

import "./Cars.css";
import Car from "./Car";
const Cars = () => {
  return (
    <section className="cars-box">
      <div className="title">
        <h2>CARS</h2>
        <h5>Cars</h5>
      </div>
      <div className="cars-container">
        <ul className="cars">
          <Car
            marginLeft={88}
            first={true}
            carClass="SUV"
            name="Mercedes M class"
            desc="The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures. With its powerful engine and advanced four-wheel drive system, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space."
            seats="4"
            luggages="2"
            image="/images/cars-suv.png"
          />
          <Car
            carClass="BUSINESS CLASS"
            name="Mercedes G - wagon"
            desc="The BMW 7 Series is the ultimate luxury car, offering unparalleled comfort, style, and technology. With its sleek exterior and spacious interior, this four-door sedan is perfect for those who demand the very best in automotive design and performance."
            seats="5"
            luggages="2"
            image="/images/cars-business.png"
          />
          <Car
            carClass="FIRST CLASS"
            name="Mercedes maybach s600"
            desc="The Porsche 911 is a true icon in the sports car world, known for its sleek design, impressive performance, and superior handling. It's a two-door, two-seat coupe that's perfect for those who love to feel the wind in their hair and the road beneath their wheels."
            seats="4"
            luggages="2"
            image="/images/cars-first.png"
          />
          <Car
            carClass="BUSINESS CLASS"
            name="Mercedes G - wagon"
            desc="The BMW 7 Series is the ultimate luxury car, offering unparalleled comfort, style, and technology. With its sleek exterior and spacious interior, this four-door sedan is perfect for those who demand the very best in automotive design and performance."
            seats="5"
            luggages="2"
            image="/images/cars-business.png"
          />
        </ul>
        <FontAwesomeIcon className="icon" icon={faLessThan} />
        <FontAwesomeIcon className="icon" icon={faGreaterThan} />
      </div>
      {/* navigation */}
      <div className="cars-nav">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Cars;
