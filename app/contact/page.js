"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Music2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    nume: "",
    telefon: "",
    email: "",
    mesaj: "",
    serviciu: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (data.success) {
    alert("Mesaj trimis cu succes!");
    setForm({
      nume: "",
      telefon: "",
      email: "",
      mesaj: "",
      serviciu: "",
    });
  } else {
    alert("Eroare la trimitere.");
  }
};

  return (
    <div className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* TITLU + SUBTITLU */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#3b885e] mb-6">Contact</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Ai nevoie de servicii profesionale de curățenie? Nu ezita să ne contactezi.
          Echipa noastră îți va răspunde rapid cu o ofertă personalizată adaptată nevoilor tale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* FORMULAR */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Nume și Prenume</label>
            <input
              type="text"
              name="nume"
              value={form.nume}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#3b885e]"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Telefon</label>
            <input
              type="tel"
              name="telefon"
              value={form.telefon}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#3b885e]"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#3b885e]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Mesaj</label>
            <textarea
              name="mesaj"
              rows="5"
              value={form.mesaj}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#3b885e]"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Serviciu dorit</label>
            <select
              name="serviciu"
              value={form.serviciu}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#3b885e]"
            >
              <option value="">Selectează</option>
              <option>Curățenie rezidențială</option>
              <option>Curățenie birouri</option>
              <option>Curățenie după renovare</option>
              <option>Airbnb / Regim hotelier</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3b885e] hover:bg-[#2f6f4c] text-white py-3 rounded-2xl font-semibold text-lg shadow-md transition"
          >
            Trimite mesajul
          </button>
        </form>

        {/* DATE CONTACT */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-[#3b885e] mb-6">Date de contact</h2>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#3b885e]" />
                Craiova, România
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#3b885e]" />
                0770 457 197
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#3b885e]" />
                siacleaningcraiova@gmail.com
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ne găsești și pe:</h3>
            <div className="flex gap-4">
              {[
              { icon: Facebook, link: "https://facebook.com/siacleaning.ro" },
              { icon: Instagram, link: "https://instagram.com/siacleaning.ro" },
              { icon: Music2, link: "https://tiktok.com/siacleaning.ro" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b885e]/10 hover:bg-[#3b885e]/20 transition cursor-pointer"
                >
                  <Icon className="text-[#3b885e]" size={20} />
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
