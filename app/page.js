"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Clock, Sparkles, Users } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative py-24 md:py-32 px-6 md:px-8 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold mb-6 leading-tight">
            Curățenie profesională Craiova
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Profesionalism, seriozitate și rezultate impecabile pentru casa sau afacerea ta.
          </p>
          <Link
            href="/servicii"
            className="bg-[#3b885e] hover:bg-[#2f6f4c] px-7 py-3 rounded-2xl font-semibold text-base shadow-xl transition"
          >
            Vezi Serviciile & Prețurile
          </Link>
        </motion.div>
      </section>

      {/* DE CE SĂ NE ALEGI */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3b885e] mb-6">
            De ce să ne alegi?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Oferim servicii profesionale de curățenie la standarde înalte, cu atenție la detalii și respect pentru spațiul tău. Ne concentrăm pe rezultate impecabile, comunicare clară și intervenții rapide, adaptate nevoilor fiecărui client.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Users className="w-10 h-10 text-[#3b885e]" />,
              title: "Echipă verificată",
              text: "Personal instruit și orientat către rezultate impecabile.",
            },
            {
              icon: <Sparkles className="w-10 h-10 text-[#3b885e]" />,
              title: "Produse profesionale",
              text: "Utilizăm soluții și echipamente profesionale.",
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-[#3b885e]" />,
              title: "Seriozitate & responsabilitate",
              text: "Respectăm programările și tratăm fiecare spațiu cu grijă.",
            },
            {
              icon: <Clock className="w-10 h-10 text-[#3b885e]" />,
              title: "Program flexibil",
              text: "Ne adaptăm programului tău.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <div className="mb-6 flex justify-center">{item.icon}</div>
              <h3 className="font-bold text-lg mb-3 text-[#3b885e]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICII PREVIEW */}
      <section className="py-20 px-8 bg-[#3b885e] text-white">
        <h2 className="text-4xl font-bold text-center mb-6">Serviciile noastre</h2>
        <p className="text-center text-white/80 max-w-3xl mx-auto mb-16">
          Oferim soluții complete de curățenie adaptate fiecărui tip de spațiu.
        </p>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { title: "Curățenie rezidențială", img: "/rezidential.jpg", description: "Curățenie completă pentru apartamente și case, cu atenție la fiecare detaliu." },
            { title: "Curățenie birouri", img: "/birouri.jpg", description: "Menținem spațiul de lucru curat și organizat pentru un mediu profesional." },
            { title: "Curățenie post-construcție", img: "/post-constructie.jpg", description: "Îndepărtăm praful și reziduurile pentru a reda spațiului aspectul perfect." },
          ].map((serviciu, index) => (
            <Link
              href="/servicii"
              key={index}
              className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition block"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${serviciu.img})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3b885e] mb-3">
                  {serviciu.title}
                </h3>
                {serviciu.description && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {serviciu.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALE */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3b885e] mb-6">
            Ce spun clienții noștri
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Feedback real de la clienți mulțumiți din Craiova.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              text: "Servicii impecabile! Echipa punctuală și foarte atentă la detalii.",
              name: "Maria P.",
            },
            {
              text: "Colaborăm pentru birou și suntem foarte mulțumiți de profesionalism.",
              name: "Andrei D.",
            },
            {
              text: "Curățenia după renovare a fost peste așteptări.",
              name: "Elena R.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                “{review.text}”
              </p>
              <h4 className="font-semibold text-[#3b885e]">– {review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SEO TEXT SECTION */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3b885e] mb-6">
            Firmă de curățenie în Craiova – Servicii complete pentru locuințe și firme
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            SIA Cleaning oferă servicii profesionale de curățenie în Craiova pentru apartamente, case, birouri, spații comerciale și proprietăți în regim hotelier. Ne adresăm atât persoanelor fizice, cât și companiilor care au nevoie de intervenții rapide și rezultate impecabile.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dacă ai nevoie de curățenie rezidențială în Craiova, curățenie pentru birouri sau curățenie după renovare, echipa noastră este pregătită să intervină prompt. Folosim produse profesionale și echipamente moderne pentru a asigura igienizarea completă a fiecărui spațiu.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Alegând serviciile noastre de curățenie în Craiova, beneficiezi de seriozitate, responsabilitate și tarife corecte. Contactează-ne pentru o ofertă personalizată adaptată nevoilor tale.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-20 px-8 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/cta.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lasă totul în mâinile profesioniștilor
          </h2>
          <Link
            href="/contact"
            className="bg-[#3b885e] hover:bg-[#2f6f4c] px-8 py-3 rounded-2xl font-semibold shadow-xl transition"
          >
            Contactează-ne
          </Link>
        </div>
      </section>
    </>
  );
}