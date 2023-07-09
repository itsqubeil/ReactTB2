import "../App.css";
import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Header from "../komponen/header";
import Footer from "../komponen/footer";
import BestSell from "../komponen/BestSell";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const Resto = () => {
  return (
    <div>
      <Header />
      <div className=" bg-cover bg-top bg-no-repeat bg-fixed bg-[url(https://cdn.discordapp.com/attachments/1127438022732951704/1127445153674694736/rumah-makan-sederhana-e1677678042499-1024x586.jpg)]">
        <div className="pt-5 pb-0.5">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className="grid sm:grid-rows-3 text-center sm:grid-cols-1 mx-auto mt-10 mb-10 max-w-2xl lg:max-w-4xl gap-10 ">
              <img
                src="https://cdn.discordapp.com/attachments/1096614485231423568/1124611955542474793/Restoran_Sederhana_Logo.png"
                className="mt-10 mx-auto"
              ></img>
              <div className="row-span-2">
                {/* <h2 className="text-base font-semibold leading-7 text-blue-900 font-gfont ">
                  Restoran
                </h2> */}
                <br></br>
                <p className="mt-2 text-3xl font-bold tracking-tight text-red-500 sm:text-4xl font-gfont ">
                  Tentang Kami
                </p>
                <p className="mt-16 text-lg leading-8 text-white font-momon text-justify">
                  Restoran Sederhana berawal pada tahun 1972 dari sebuah rumah
                  makan Padang kecil milik Bustaman di Pasar Bendungan Hilir,
                  Jakarta. Dalam mengelola restorannya, Bustaman yang berasal
                  dari Lintau, Sumatra Barat, selalu menyesuaikannya dengan
                  lidah orang kebanyakan, sehingga ia mengurangi rasa pedas
                  dalam masakan Padang buatannya. Ia juga memiliki hidangan
                  khusus, yakni Ayam Pop yang telah dikenal luas Saat ini, lebih
                  dari 100 restoran Sederhana tersebar di berbagai kota di
                  Indonesia dan Malaysia. Restoran Sederhana telah membuka
                  outletnya di setiap provinsi di Indonesia, kecuali Provinsi
                  Papua. Hingga saat ini, jaringan Restoran Sederhana adalah
                  jaringan rumah makan Padang terbesar di Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resto;
