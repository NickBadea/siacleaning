"use client";

import Link from "next/link";

export default function ServiciiPage() {
  return (
    <div className="py-16 md:py-20 px-5 md:px-12 max-w-7xl mx-auto">

      <h1 className="text-3xl md:text-5xl font-bold text-[#3b885e] text-center mb-6">
        Servicii de Curățenie
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16 text-sm md:text-base">
        Oferim servicii profesionale de curățenie în Craiova pentru locuințe,
        birouri, spații comerciale și proprietăți Airbnb. 
        Fiecare intervenție este adaptată în funcție de spațiu și necesități.
      </p>

      {/* ================= REZIDENTIAL ================= */}

      <section className="mb-20">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-[#3b885e] text-center md:text-left">
          Curățenie Rezidențială
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">

          <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-4">
              Curățenie de întreținere
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li>✔️ Aspirare și spălare pardoseli</li>
              <li>✔️ Ștergere praf mobilier și suprafețe</li>
              <li>✔️ Curățare bucătărie (suprafețe, exterior electrocasnice)</li>
              <li>✔️ Curățare baie completă</li>
              <li>✔️ Golire coșuri de gunoi</li>
            </ul>

          </div>

          <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-4">
              Curățenie generală
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li>✔️ Curățare în profunzime a întregii locuințe</li>
              <li>✔️ Degresare bucătărie</li>
              <li>✔️ Curățare detaliată baie</li>
              <li>✔️ Curățare uși, tocuri, plinte</li>
              <li>✔️ Spălare geamuri (la cerere)</li>
            </ul>

          </div>

        </div>

      </section>

      {/* ================= SPECIAL ================= */}

      <section className="mb-20">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-[#3b885e] text-center md:text-left">
          Servicii Speciale
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Curățenie după renovare
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
              Îndepărtăm praful fin, resturile de materiale și murdăria dificilă 
              după lucrări de renovare sau construcții.
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Curățenie la mutare
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
              Pregătim locuința pentru predare sau mutare, astfel încât totul să fie 
              impecabil pentru următorul locatar.
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

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Curățenie + schimb lenjerii
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
              Intervenim rapid între rezervări pentru a pregăti locuința 
              pentru următorii oaspeți.
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Abonamente pentru proprietari
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
              Colaborări recurente cu intervenții programate și prioritate 
              în perioadele aglomerate.
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

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Curățenie periodică
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
              Menținem spațiul curat zilnic sau săptămânal, în funcție de activitate.
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">

            <h3 className="text-lg md:text-xl font-bold text-[#3b885e] mb-2">
              Curățenie generală
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
              Curățare completă pentru spații comerciale, showroom-uri sau birouri.
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

          <ul className="space-y-2">
            <li>✔️ Călcat haine</li>
            <li>✔️ Călcat lenjerii</li>
          </ul>

          <ul className="space-y-2">
            <li>✔️ Curățare geamuri</li>
            <li>✔️ Curățare balcon / terasă</li>
          </ul>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <div className="text-center">

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Pentru ofertă personalizată în funcție de spațiu și nevoi, contactează-ne.
        </p>

        <Link
          href="/contact"
          className="bg-[#3b885e] hover:bg-[#2f6f4c] px-8 md:px-10 py-3 md:py-4 rounded-2xl font-semibold text-white shadow-lg transition text-sm md:text-base"
        >
          Solicita ofertă
        </Link>

      </div>

    </div>
  );
}