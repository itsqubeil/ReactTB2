import { Link, NavLink } from "react-router-dom";
import { Fragment, useState } from "react";

export default function Header() {
  return (
    <header className="bg-yellow-300 sticky top-0 z-50 font-karla">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sederhana</span>
            <img
              className="h-8 w-auto"
              src="https://cdn.discordapp.com/attachments/1096614485231423568/1124611955542474793/Restoran_Sederhana_Logo.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="flex gap-x-12">
          <NavLink
            to="/menu"
            className="text-md font-semibold leading-6 text-red-800"
          >
            Menu
          </NavLink>
          <NavLink
            to="/lokasi"
            className="text-md font-semibold leading-6 text-red-800"
          >
            Lokasi
          </NavLink>
          <NavLink
            to="/Resto"
            className="text-md font-semibold leading-6 text-red-800"
          >
            Tentang Kami
          </NavLink>
          {/* <NavLink
            to="/Developer"
            className="text-md font-semibold leading-6 text-red-800"
          >
            Our Developer
          </NavLink> */}
        </div>
      </nav>
    </header>
  );
}
