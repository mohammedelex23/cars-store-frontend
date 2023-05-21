import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <About />
      </main>
    </>
  );
};

export default App;
