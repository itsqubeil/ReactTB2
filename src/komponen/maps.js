import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

function Maps() {
  return (
    <div className="bg-yellow-400 font-karla">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-red-800 text-center mb-10 -mt-10">
          Restoran Sederhana Bekasi
        </h2>
        <h1 className="text-md font-bold tracking-tight text-red-800 text-center mb-10 -mt-5">
          Harapan Indah
        </h1>
        <div>
          <iframe
            className="mx-auto max-w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.572664646333!2d106.97644439999999!3d-6.1878967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c447312be65%3A0x5d0d9dc0b9346dcd!2sRestoran%20Sederhana%20SA%20Kota%20Harapan%20Indah!5e0!3m2!1sen!2sid!4v1688903447605!5m2!1sen!2sid"
            width="1210"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Maps;
