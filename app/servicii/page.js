"use client";

import Link from "next/link";

export default function ServiciiPage() {
  return (
    <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-[#3b885e] text-center mb-6">
        Servicii & Prețuri
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
        Oferim soluții profesionale de curățenie în Craiova pentru locuințe, Airbnb, birouri și spații comerciale.
      </p>

      {/* ================= REZIDENȚIAL ================= */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-[#3b885e]">Curățenie Rezidențială</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
            title: "Curățenie de întreținere",
            price: "180 – 450 lei",
            items: [
              "Aspirat și spălat pardoseli",
              "Șters praf mobilier",
              "Curățare bucătărie",
              "Igienizare baie completă",
              "Golire coșuri gunoi",
            ],
          },{
            title: "Curățenie generală",
            price: "8 – 12 lei/mp",
            items: [
              "Interior dulapuri",
              "Interior frigider & cuptor",
              "Uși, plinte, prize",
              "Curățare în profunzime",
            ],
          },{
            title: "Curățenie după renovare",
            price: "12 – 20 lei/mp",
            items: [
              "Îndepărtare praf fin",
              "Curățare urme lavabilă",
              "Curățare gresie & faianță",
              "Îndepărtare adeziv / silicon",
            ],
          }].map((service, i) => (
            <div key={i} className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
              <h3 className="text-xl font-bold text-[#3b885e] mb-4">{service.title}</h3>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {service.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
              <p className="font-semibold text-lg">{service.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
  <h3 className="text-xl font-bold text-[#3b885e] mb-3">
    Curățenie la mutare
  </h3>
  <p className="font-semibold">10 – 15 lei/mp</p>
</div>
      </section>

      {/* ================= AIRBNB ================= */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-[#3b885e]">Airbnb / Regim Hotelier</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold text-[#3b885e] mb-4">Check-out / Check-in</h3>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• Curățenie completă</li>
              <li>• Igienizare baie & bucătărie</li>
              <li>• Aranjare pat</li>
              <li>• Verificare proprietate</li>
            </ul>
            <p className="font-semibold">180 – 450 lei</p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold text-[#3b885e] mb-4">Airbnb + schimb lenjerii</h3>
            <p className="text-sm text-gray-600 mb-4">Include schimb lenjerii și consumabile.</p>
            <p className="font-semibold">250 – 550 lei / intervenție</p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold text-[#3b885e] mb-4">Abonament proprietari</h3>
            <p className="text-sm text-gray-600 mb-4">Prioritate în program și tarif preferențial.</p>
            <p className="font-semibold">Preț personalizat</p>
          </div>
        </div>
      </section>

      {/* ================= BIROURI ================= */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-[#3b885e]">Birouri & Spații Comerciale</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold text-[#3b885e] mb-4">Curățenie zilnică (contract)</h3>
            <p className="font-semibold">3 – 6 lei/mp (abonament)</p>
          </div>
          <div className="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold text-[#3b885e] mb-4">Curățenie generală birouri</h3>
            <p className="font-semibold">7 – 12 lei/mp</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICII EXTRA ================= */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-[#3b885e]">Servicii Extra</h2>
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 grid md:grid-cols-2 gap-6 text-gray-600 text-sm">
          <ul className="space-y-2">
            <li>• Curățare geamuri (interior / exterior)</li>
            <li>• Curățare tapițerii (canapele, saltele)</li>
            <li>• Spălare mochete & covoare</li>
          </ul>
          <ul className="space-y-2">
            <li>• Curățare gresie și rosturi</li>
            <li>• Curățare balcon / terasă</li>
            <li>• Ozonificare și dezinfectare</li>
          </ul>
        </div>
      </section>

      <div className="text-center">
        <Link
          href="/contact"
          className="bg-[#3b885e] hover:bg-[#2f6f4c] px-10 py-4 rounded-2xl font-semibold text-white shadow-lg transition"
        >
          Solicită ofertă personalizată
        </Link>
      </div>
    </div>
  );
}