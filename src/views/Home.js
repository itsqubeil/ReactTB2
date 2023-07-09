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

const Home = () => {
  return (
    <div>
      <Header />
      <div className=" bg-cover bg-top bg-no-repeat bg-fixed bg-[url(https://katasumbar.com/wp-content/uploads/2023/03/rumah-makan-sederhana-e1677678042499-1024x586.jpg)]">
        <div className="py-5 sm:py-10">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-20 mb-20 max-w-2xl lg:max-w-4xl gap-10 ">
              <img
                src="https://cdn.discordapp.com/attachments/1096614485231423568/1124611955542474793/Restoran_Sederhana_Logo.png"
                className="mt-10 max-w-screen"
              ></img>
              <div className="w-5/5 col-span-2">
                <h2 className="text-base font-semibold leading-7 text-blue-900 font-gfont ">
                  Restoran
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-red-500 sm:text-4xl font-gfont ">
                  SEDERHANA
                </p>
                <p className="mt-6 text-lg leading-8 text-white font-momon">
                  Sederhana adalah perusahaan waralaba Indonesia yang bergerak
                  di bidang jasa boga atau makanan dengan ciri khas masakan
                  Padang. Restoran ini masuk dalam 10 besar restoran dengan
                  penjualan terlaris di Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestSell />
      <Footer />
    </div>
  );
};

export default Home;
