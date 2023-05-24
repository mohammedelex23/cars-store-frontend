import "./Gallery.css";
const Gallery = () => {
  return (
    <section className="gallery">
      <div className="col">
        <img src="/images/gallery-car1.png" alt="car" />
        <img src="/images/gallery-car4.png" alt="car" />
        <img src="/images/gallery-car7.png" alt="car" />
      </div>
      <div className="col middle">
        <img src="/images/gallery-car2.png" alt="car" />
        <div className="middle">
          <img src="/images/gallery-car5.png" alt="car" />
          <div className="img-desc">
            <h3>Tesla Model 3</h3>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button>Contact</button>
          </div>
        </div>
        <img src="/images/gallery-car8.png" alt="car" />
      </div>
      <div className="col">
        <img src="/images/gallery-car3.png" alt="car" />
        <img src="/images/gallery-car6.png" alt="car" />
        <img src="/images/gallery-car9.png" alt="car" />
      </div>
    </section>
  );
};

export default Gallery;
