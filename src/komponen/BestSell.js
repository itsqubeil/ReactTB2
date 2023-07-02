import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Rendang",
    href: "#",
    imageSrc:
      "https://img.jakpost.net/c/2020/07/07/2020_07_07_99643_1594104376._large.jpg",
    imageAlt: "Ini gambar rendang",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 2,
    name: "Ayam Bakar",
    imageSrc:
      "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/04/05/1781976871.jpg",
    imageAlt: "Ini gambar ayam gosong",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 3,
    name: "Telor Balado",
    imageSrc:
      "https://resepkoki.id/wp-content/uploads/2019/11/Telur-Balado.jpg",
    imageAlt: "Ini gambar telor pedas",
    price: "Rp15.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp25.000,00.",
  },
  // More products...
];

export default function BestSell() {
  return (
    <div className="bg-yellow-400 font-karla">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-red-800 text-center mb-10 -mt-10">
          Terlaris
        </h2>
        <h1 className="text-md font-bold tracking-tight text-red-800 text-center mb-10 -mt-5">
          Menu terlaris saat ini
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-red-800">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-red-800">{product.extra}</p>
                </div>
                <div>
                  <h3 className="text-sm text-red-800">{product.price} </h3>
                  <p className="text-sm font-medium text-red-800">
                    {product.pricee}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
