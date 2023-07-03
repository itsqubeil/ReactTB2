import "../App.css";
import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Header from "../komponen/header";
import Footer from "../komponen/footer";
import BestSell from "../komponen/BestSell";
import IngfoMenu from "../komponen/ingfomenu";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div>
      <Header />
      <BestSell />
      <IngfoMenu />
      <Footer />
    </div>
  );
};

export default Home;
