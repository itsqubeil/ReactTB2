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
        <h1>Restoran Sederhana berawal pada tahun 1972 dari sebuah rumah makan Padang kecil milik Bustaman di Pasar Bendungan Hilir, Jakarta. 
            Dalam mengelola restorannya, Bustaman yang berasal dari Lintau, Sumatra Barat, selalu menyesuaikannya dengan lidah orang kebanyakan,
            sehingga ia mengurangi rasa pedas dalam masakan Padang buatannya. Ia juga memiliki hidangan khusus, yakni Ayam Pop yang telah dikenal luas
            
            Saat ini, lebih dari 100 restoran Sederhana tersebar di berbagai kota di Indonesia dan Malaysia. Restoran Sederhana telah membuka outletnya di setiap provinsi di Indonesia, kecuali Provinsi Papua. 
            Hingga saat ini, jaringan Restoran Sederhana adalah jaringan rumah makan Padang terbesar di Indonesia
        </h1>
      </div>
    </>
  );
}

export default About;
