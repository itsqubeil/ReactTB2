import "../App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function About() {
  return (
    <>
      <div class="p-6 bg-sky-500 shadow-lg space-x-4 text-left">
        <div class="text-xl font-medium text-white space-x-4">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
      <div>
        <h1>ini adalah about</h1>
      </div>
    </>
  );
}

export default About;
