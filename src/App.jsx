import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { NavContextProvider } from "./components/nav-context";

function App() {
  return (
    <NavContextProvider>
     <Navbar/>
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </NavContextProvider>
  );
}
export default App;
