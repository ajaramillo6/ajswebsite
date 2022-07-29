import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Contact from "./components/contact/Contact";

function App() {

  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects/:id" element={<Single />} />
        </Routes>
        <Contact />
      </Router>
    </div>
  );
}

export default App;

