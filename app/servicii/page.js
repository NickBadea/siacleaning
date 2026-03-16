"use client";

import Link from "next/link";

export default function ServiciiPage() {
  return (
    <div className="py-16 md:py-20 px-5 md:px-12 max-w-7xl mx-auto">

      <h1 className="text-3xl md:text-5xl font-bold text-[#3b885e] text-center mb-6">
        Servicii & Prețuri
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16 text-sm md:text-base">
        Oferim servicii profesionale de curățenie în Craiova pentru locuințe,
        birouri, spații comerciale și proprietăți Airbnb.
      </p>

      {/* ================= REZIDENTIAL ================= */}

      <section className="mb-20">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-[#3b885e] text-center md:text-left">
          Curățenie Rezidențială
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">

          {/* INTRETINERE */}

          <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-4 text-center md:text-left">
              Curățenie de întreținere
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm md:text-base mb-5">

              <li className="flex justify-between">
                <span>Garsonieră</span>
                <strong>180 lei</strong>
              </li>

              <li className="flex justify-between">
                <span>Ap. 2 camere</span>
                <strong>230 lei</strong>
              </li>

              <li className="flex justify-between">
                <span>Ap. 3 camere</span>
                <strong>280 lei</strong>
              </li>

              <li className="flex justify-between">
                <span>Ap. 4 camere</span>
                <strong>330 lei</strong>
              </li>

            </ul>

            <div className="text-xs md:text-sm text-gray-500 space-y-1 text-center md:text-left">
              <p>Baie suplimentară: <strong>+50 lei</strong></p>
              <p>Balcon: <strong>+30 lei</strong></p>
            </div>

          </div>

          {/* GENERALA */}

          <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-4 text-center md:text-left">
              Curățenie generală
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm md:text-base mb-5">

              <li className="flex justify-between">
                <span>Garsonieră</span>
                <strong>250 lei</strong>
              </li>

              <li className="flex justify-between">
                <span>Ap. 2 camere</span>
                <strong>320 lei</strong>
              </li>

              <li className="flex justify-between">
                <span>Ap. 3 camere</span>
                <strong>400 lei</strong>
              </li>

              <li className="flex justify-between">
                <span>Ap. 4 camere</span>
                <strong>470 lei</strong>
              </li>

            </ul>

            <div className="text-xs md:text-sm text-gray-500 space-y-1 text-center md:text-left">
              <p>Baie suplimentară: <strong>+80 lei</strong></p>
              <p>Balcon: <strong>+30 lei</strong></p>
              <p>Geamuri: <strong>10 lei / mp</strong></p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= SPECIAL ================= */}

      <section className="mb-20">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-[#3b885e] text-center md:text-left">
          Servicii Speciale
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center md:text-left">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Curățenie după renovare
            </h3>

            <p className="font-semibold text-base md:text-lg">
              12 – 20 lei / mp
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center md:text-left">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Curățenie la mutare
            </h3>

            <p className="font-semibold text-base md:text-lg">
              10 – 15 lei / mp
            </p>

          </div>

        </div>

      </section>

      {/* ================= AIRBNB ================= */}

      <section className="mb-20">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-[#3b885e] text-center md:text-left">
          Airbnb / Regim Hotelier
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center md:text-left">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Curățenie + schimb lenjerii
            </h3>

            <p className="font-semibold text-base md:text-lg">
              250 – 550 lei
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center md:text-left">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Abonament proprietari
            </h3>

            <p className="font-semibold text-base md:text-lg">
              -20% reducere
            </p>

            <p className="text-xs md:text-sm text-gray-500 mt-2">
              Tarif preferențial pentru colaborări recurente.
            </p>

          </div>

        </div>

      </section>

      {/* ================= BIROURI ================= */}

      <section className="mb-20">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-[#3b885e] text-center md:text-left">
          Birouri & Spații Comerciale
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center md:text-left">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Curățenie zilnică
            </h3>

            <p className="font-semibold text-base md:text-lg">
              3 – 6 lei / mp
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center md:text-left">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Curățenie generală
            </h3>

            <p className="font-semibold text-base md:text-lg">
              7 – 12 lei / mp
            </p>

          </div>

        </div>

      </section>

      {/* ================= EXTRA ================= */}

      <section className="mb-16">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-[#3b885e] text-center md:text-left">
          Servicii Extra
        </h2>

        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg grid md:grid-cols-2 gap-4 md:gap-6 text-gray-600 text-sm md:text-base">

          <ul className="space-y-2 text-center md:text-left">
            <li>Călcat haine — <strong>10 lei / buc</strong></li>
            <li>Călcat lenjerii — <strong>30 lei / set</strong></li>
          </ul>

          <ul className="space-y-2 text-center md:text-left">
            <li>Curățare geamuri</li>
            <li>Curățare balcon / terasă</li>
          </ul>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <div className="text-center">

        <Link
          href="/contact"
          className="bg-[#3b885e] hover:bg-[#2f6f4c] px-8 md:px-10 py-3 md:py-4 rounded-2xl font-semibold text-white shadow-lg transition text-sm md:text-base"
        >
          Solicită ofertă personalizată
        </Link>

      </div>

    </div>
  );
}