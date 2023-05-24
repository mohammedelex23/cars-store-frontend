import "./App.css";
import About from "./components/about/About";
import Cars from "./components/cars/Cars";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Services from "./components/services/Services";
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
      </main>
    </>
  );
};

export default App;
