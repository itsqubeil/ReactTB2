import "../App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function developer() {
  return (
    <>
      <div class="p-6 bg-sky-500 shadow-lg space-x-4 text-left">
        <div class="text-xl font-medium text-white space-x-4">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/developer>Our Developer</link>
        </div>
      </div>
      <div>
        <h1>Website ini dibuat untuk memenuhi tugas TB 2 yang bertema kuliner dan kelompok saya mengambil tema kuliner yang ada di restoran
            sederhana masakan Padang
        </h1>
      </div>
    </>
  );
}

export default About;
