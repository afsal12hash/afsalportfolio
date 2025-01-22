import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import About from "./Components/About";
import Services from "./Components/Services"
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
// import Testimonials from "./Components/Testimonials/Index";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services/>
      <Skills/>
      <Projects/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
