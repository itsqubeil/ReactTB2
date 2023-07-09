import "../App.css";
import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Header from "../komponen/header";
import Footer from "../komponen/footer";
import Maps from "../komponen/maps";
const Lokasi = () => {
  return (
    <div>
      <Header />
      <div className=" bg-cover bg-top bg-no-repeat bg-fixed bg-[url(https://cdn.discordapp.com/attachments/1127438022732951704/1127588010679083008/rumah-makan-sederhana-e1677678042499-1024x586-picsay.jpg)]">
        <div className="py-0.5 md:py-10">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-20 mb-20 max-w-2xl lg:max-w-4xl gap-10 ">
              {/* <img
                src="https://cdn.discordapp.com/attachments/1096614485231423568/1124611955542474793/Restoran_Sederhana_Logo.png"
                className="mt-10 max-w-screen"
              ></img> */}
              <div className="w-5/5 col-span-3">
                {/* <h2 className="text-base font-semibold leading-7 text-blue-900 font-gfont ">
                  Restoran
                </h2> */}
                <p className="mt-5 text-center text-3xl font-bold tracking-tight text-red-500 lg:text-4xl font-gfont ">
                  Temukan Kami
                </p>
                {/* <p className="mt-6 text-lg leading-8 text-white font-momon">
                  Sederhana adalah perusahaan waralaba Indonesia yang bergerak
                  di bidang jasa boga atau makanan dengan ciri khas masakan
                  Padang. Restoran ini masuk dalam 10 besar restoran dengan
                  penjualan terlaris di Indonesia.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Maps />
      <Footer />
    </div>
  );
};

export default Lokasi;
