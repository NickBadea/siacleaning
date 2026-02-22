import { MapPin, Phone, Mail, Facebook, Instagram, Music2 } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white py-16 px-8 border-t border-[#3b885e] mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LOGO + DESCRIERE */}
        <div>
          <Image
            src="/logo.png"
            alt="SIA Cleaning Logo"
            width={160}
            height={80}
            className="mb-6 object-contain"
          />
          <p className="text-gray-600 mb-6">Firmă de curățenie în Craiova</p>

          {/* BADGE-URI */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b885e]/10 text-sm text-[#3b885e]">
              <span></span>
              Calitate garantată
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b885e]/10 text-sm text-[#3b885e]">
              <span></span>
              Produse profesionale
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b885e]/10 text-sm text-[#3b885e]">
              <span></span>
              Intervenții rapide
            </div>
          </div>
        </div>

        {/* CONTACT + SOCIAL */}
        <div className="space-y-4 md:text-right">
          <div className="flex md:justify-end items-center gap-3">
            <MapPin className="text-[#3b885e]" />
            Craiova, România
          </div>
          <div className="flex md:justify-end items-center gap-3">
            <Phone className="text-[#3b885e]" />
            <a href="tel:0770457197" className="hover:underline">0770 457 197</a>
          </div>
          <div className="flex md:justify-end items-center gap-3">
            <Mail className="text-[#3b885e]" />
            <a href="mailto:siacleaning@gmail.com" className="hover:underline">siacleaning@gmail.com</a>
          </div>

          <div className="flex md:justify-end gap-4 pt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#3b885e]/10 hover:bg-[#3b885e]/20 transition">
              <Facebook className="text-[#3b885e]" size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#3b885e]/10 hover:bg-[#3b885e]/20 transition">
              <Instagram className="text-[#3b885e]" size={18} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#3b885e]/10 hover:bg-[#3b885e]/20 transition">
              <Music2 className="text-[#3b885e]" size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SIA Cleaning. All rights reserved.
      </div>
    </footer>
  );
}