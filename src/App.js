import Navbar from "./component/Navbar";
import About from "./component/About";
import Education from "./component/Education";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import More_Info from "./component/More_Info";
import Home from "./component/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <div className="Navbar">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more_info" element={<More_Info />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
