"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
// 🔥 Logo trebuie pus în /public/logo.png
// NU mai folosim import din assets

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={80}
            className="h-20 md:h-24 object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-12 font-medium">
          <Link href="/">Acasă</Link>
          <Link href="/servicii">Servicii & Prețuri</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="hidden md:block">
          <a
            href="tel:0770457197"
            className="bg-[#3b885e] hover:bg-[#2f6f4c] text-white px-5 py-2.5 rounded-2xl font-semibold shadow-md transition flex items-center gap-2"
          >
            <Phone size={18} />
            Sună
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-[#3b885e]"></span>
          <span className="w-6 h-0.5 bg-[#3b885e]"></span>
          <span className="w-6 h-0.5 bg-[#3b885e]"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-6">
          <Link href="/" onClick={() => setOpen(false)}>Acasă</Link>
          <Link href="/servicii" onClick={() => setOpen(false)}>Servicii & Prețuri</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
