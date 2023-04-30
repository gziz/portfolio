import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Experience/>
        <Work/>
        <Contact/>
    </div>
  );
}

export default App;
