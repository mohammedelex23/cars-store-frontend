import "./App.css";
import About from "./components/about/About";
import Cars from "./components/cars/Cars";
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
      </main>
    </>
  );
};

export default App;
