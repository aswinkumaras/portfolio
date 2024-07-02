import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Resume from "./components/Resume";

function App() {
    return (
   <div>
      <Navigation />
      <Header />
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />
   </div>
    
  )
}

export default App;
