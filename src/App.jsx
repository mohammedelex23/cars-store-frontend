import "./App.css";
import About from "./components/about/About";
import Cars from "./components/cars/Cars";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Logos from "./components/logos/Logos";
import Services from "./components/services/Services";
import Testmonials from "./components/testmonials/Testmonials";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <About />
        <Services />
        <Cars />
        <Gallery />
        <Testmonials />
        <Logos />
      </main>
      <Footer />
    </>
  );
};

export default App;
