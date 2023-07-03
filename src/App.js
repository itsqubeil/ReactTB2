import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
// import About from "./views/Abo";
import Menu from "./views/Manu";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
