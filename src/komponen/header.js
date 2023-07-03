import { Link } from "react-router-dom";
import { Fragment, useState } from "react";

export default function Header() {
  return (
    <header className="bg-yellow-300 sticky top-0 z-50 font-karla">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sederhana</span>
            <img
              className="h-8 w-auto"
              src="https://cdn.discordapp.com/attachments/1096614485231423568/1124611955542474793/Restoran_Sederhana_Logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex gap-x-12">
          <a
            href="/menu"
            className="text-md font-semibold leading-6 text-red-800"
          >
            Menu
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-red-800">
            Perhitungan Pemesanan
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-red-800">
            Tentang Kami
          </a>
        </div>
      </nav>
    </header>
  );
}
