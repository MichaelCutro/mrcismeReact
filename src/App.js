import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Blog from "./Pages/Blog";
import Osmosis from "./Pages/Osmosis";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import Lisa from "./Pages/Lisa";
// //import Return1984 from './Components/Return1984';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Books />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Osmosis" element={<Osmosis />} />
        <Route path="/Lisa" element={<Lisa />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
