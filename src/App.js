import Layout from "./component/Layout/layout"; // Corrected the import to use uppercase
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Project from "./pages/Project/Project";
import Techstack from "./pages/TechStack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";



function App() {
  return (
    <>
      <Layout /> 
      <div className="container">
      <About/>
      <Education/>
      <WorkExp/>
      <Project/>
      <Techstack/>
      
      <Contact/>
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">Isha's Portfolio</h4>
      </div>
      
    <ScrollToTop smooth
    color="#f29f67"
      style={{backgroundColor:"#1e1e2c",borderRadius:"80px"}}
    />
    </>
  );
}

export default App;
