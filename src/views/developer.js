import "../App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "../komponen/header";
import Footer from "../komponen/footer";

function Developer() {
  return (
    <div>
      <Header />
      <div className=" bg-cover bg-top bg-no-repeat bg-fixed bg-yellow-400">
        <div className="py-5 sm:py-10">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className="text-center font-gfont text-red-700 text-3xl mt-16">
              Tim Kami
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 mt-32 mb-32 mx-auto max-w-2xl lg:max-w-4xl gap-10 ">
              <img
                src="https://cdn.discordapp.com/attachments/1127438022732951704/1127438842673246279/IMG-20230708-WA0022-picsay.jpg"
                className="rounded-full"
              ></img>
              <div className="w-5/5 col-span-2">
                <h2 className="text-base font-semibold text-blue-900 font-gfont ">
                  Kelompok 8
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-red-500 sm:text-4xl font-gfont ">
                  Rio Aditya Mukti
                </p>
                <p className="mt-6 text-lg leading-8 text-white font-momon">
                  Adalah seorang mahasiswa yang ingin mengejar cita cita dengan
                  menjadi yang terbaik dan terdepan.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-32 mb-32 mx-auto max-w-2xl lg:max-w-4xl gap-10 ">
              <div className="w-5/5 col-span-2">
                <h2 className="text-base font-semibold text-blue-900 font-gfont ">
                  Kelompok 8
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-red-500 sm:text-4xl font-gfont ">
                  Daffa Ian Nabil
                </p>
                <p className="mt-6 text-lg leading-8 text-white font-momon">
                  Adalah seorang mahasiswa yang sedang mencari apa yang ingin
                  dia lakukan untuk menjalani kehidupannya di masa mendatang.
                </p>
              </div>
              <img
                src="https://cdn.discordapp.com/attachments/1127438022732951704/1127438896981086248/Screenshot_2023-05-01-19-18-40-616_com.google.android.apps.photos2.jpg"
                className="rounded-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Developer;
