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
    name: "Ayam Pop",
    href: "#",
    imageSrc:
      "https://www.masakapahariini.com/wp-content/uploads/2018/06/AYAM-POP-FINAL-DISH.jpg",
    imageAlt: "Pop",
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
    name: "Ayam Goreng",
    imageSrc:
      "https://id.muqsith.com/assets/upload/image/ayam_goreng_padang.jpg",
    imageAlt: "Ini gambar ayam gorang",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 4,
    name: "Gulai Ayam",
    imageSrc:
      "https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/04/Resep-Gulai-Ayam.jpg?fit=1920%2C1828&ssl=1",
    imageAlt: "Gulai",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
];
const products2 = [
  {
    id: 1,
    name: "Rendang Daging",
    href: "#",
    imageSrc:
      "https://img.jakpost.net/c/2020/07/07/2020_07_07_99643_1594104376._large.jpg",
    imageAlt: "Rendang",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 2,
    name: "Dendeng Balado",
    imageSrc:
      "https://asset.kompas.com/crops/hn8rHYisgVkj5JSznC7YyW_JNpQ=/38x72:838x605/750x500/data/photo/2022/04/02/6247cfd4495ba.jpg",
    imageAlt: "Dendeng balado",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 3,
    name: "Paru Goreng",
    imageSrc:
      "https://www.resepkuerenyah.com/wp-content/uploads/2016/02/keripik-paru.jpg",
    imageAlt: "Paru Goreng",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 4,
    name: "Sop Iga",
    imageSrc:
      "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/sop-iga.jpg",
    imageAlt: "Sop iga",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  // More products...
];
const products3 = [
  {
    id: 1,
    name: "Ikan Kembung Goreng/Bakar",
    href: "#",
    imageSrc: "https://i.ytimg.com/vi/9qt8_JASqf8/maxresdefault.jpg",
    imageAlt: "Ikan Kembung",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 2,
    name: "Ikan Nila",
    imageSrc:
      "https://www.dapurkintamani.com/wp-content/uploads/2022/02/feat-resep-ikan-bakar-padang-1024x612.jpg",
    imageAlt: "Nila",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 3,
    name: "Ikan Bawal",
    imageSrc:
      "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2018/05/19/3400236901.jpg",
    imageAlt: "Bawal",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 4,
    name: "Ikan Asin Gabus Cabe Hijau",
    imageSrc:
      "https://api.minapoli.com/media/infomina/p/medium_79d48387ef1d198e21b57b570e2adfb4.png",
    imageAlt: "Ikan Asin Gabus Cabe Hijau",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
];
const products4 = [
  {
    id: 1,
    name: "Gulai Ayam",
    imageSrc:
      "https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/04/Resep-Gulai-Ayam.jpg?fit=1920%2C1828&ssl=1",
    imageAlt: "Gulai",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 2,
    name: "Gulai Kepala Kakap",
    imageSrc:
      "https://www.primarasa.co.id/images/images/Gulai%20Kepala%20Ikan%20-%20Resep%281%29.jpg",
    imageAlt: "Kakap head",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 3,
    name: "Gulai Ikan Mas",
    imageSrc:
      "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/12/31/3077225213.jpg",
    imageAlt: "GUle mas",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
  {
    id: 4,
    name: "Gulai Cincang Kambing",
    imageSrc:
      "https://asset.kompas.com/crops/1MSM-CFOeLMx6rf7YfCteqPF3M4=/0x459:667x904/750x500/data/photo/2021/03/08/6045c26b91be8.jpg",
    imageAlt: "Gulai Cincang Kambing",
    price: "Rp25.000,00.",
    extra: "Dengan Nasi",
    pricee: "Rp35.000,00.",
  },
];
const minuman = [
  {
    id: 1,
    name: "Jus Jeruk",
    imageSrc:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/6-C2EZHAC1AFCTE6-C2EZHALXR8LDMA/detail/menueditor_item_cea16e5f33d243d98f520021772e8398_1614096347346825257.webp",
    imageAlt: "Jeruk",
    price: "Rp10.000,00.",
  },
  {
    id: 2,
    name: "Juice Tomat",
    imageSrc:
      "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/7f9d96de-cb87-435c-a383-7e994ef589c5_Go-Biz_20230313_163834.jpeg",
    imageAlt: "Tomat",
    price: "Rp10.000,00.",
  },
  {
    id: 3,
    name: "Juice Alpukat",
    imageSrc:
      "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/12/21/3861837828.jpg",
    imageAlt: "Alpukats",
    price: "Rp10.000,00.",
  },
  {
    id: 4,
    name: "Juice Sirsak",
    imageSrc:
      "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/01/02/107785183.jpeg",
    imageAlt: "Sirsak",
    price: "Rp10.000,00.",
  },
];

export default function IngfoMenu() {
  return (
    <div className="bg-yellow-300 font-karla">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-red-800 text-center mb-10 -mt-10">
          Menu
        </h2>
        <h1 className="text-md font-bold tracking-tight text-red-800 text-center mb-10 -mt-5">
          Masakan yang kami sediakan
        </h1>

        <h2 className="text-2xl font-bold tracking-tight text-red-800 mb-10 -mt-5">
          Olahan Ayam
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
        <h2 className="text-2xl font-bold tracking-tight text-red-800 mb-10 mt-10">
          Olahan Daging
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products2.map((pro2) => (
            <div key={pro2.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={pro2.imageSrc}
                  alt={pro2.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-red-800">
                    <a href={pro2.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {pro2.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-red-800">{pro2.extra}</p>
                </div>
                <div>
                  <h3 className="text-sm text-red-800">{pro2.price} </h3>
                  <p className="text-sm font-medium text-red-800">
                    {pro2.pricee}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-red-800 mb-10 mt-10">
          Olahan Ikan
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products3.map((pro3) => (
            <div key={pro3.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={pro3.imageSrc}
                  alt={pro3.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-red-800">
                    <a href={pro3.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {pro3.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-red-800">{pro3.extra}</p>
                </div>
                <div>
                  <h3 className="text-sm text-red-800">{pro3.price} </h3>
                  <p className="text-sm font-medium text-red-800">
                    {pro3.pricee}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-red-800 mb-10 mt-10">
          Olahan Gulai
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products4.map((pro4) => (
            <div key={pro4.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={pro4.imageSrc}
                  alt={pro4.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-red-800">
                    <a href={pro4.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {pro4.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-red-800">{pro4.extra}</p>
                </div>
                <div>
                  <h3 className="text-sm text-red-800">{pro4.price} </h3>
                  <p className="text-sm font-medium text-red-800">
                    {pro4.pricee}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-red-800 mb-10 mt-10">
          Aneka Minuman
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {minuman.map((pro4) => (
            <div key={pro4.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={pro4.imageSrc}
                  alt={pro4.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-red-800">
                    <a href={pro4.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {pro4.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-red-800">{pro4.extra}</p>
                </div>
                <div>
                  <h3 className="text-sm text-red-800">{pro4.price} </h3>
                  <p className="text-sm font-medium text-red-800">
                    {pro4.pricee}
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
