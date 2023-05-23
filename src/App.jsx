import "./App.css";
import About from "./components/about/About";
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
      </main>
    </>
  );
};

export default App;
