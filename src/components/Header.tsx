"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <img
            src="https://revaahomes.com/wp-content/uploads/2025/11/Landing-Page-Logo_11zon-10.webp" alt="Vihaan Eleganza"
            className="h-10 lg:h-12 object-contain"
          />

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-black" style={{ letterSpacing: "0.5px", cursor: "pointer" }}>
            <a className="hover:text-[#A38022] transition">Area & Price</a>
            <a className="hover:text-[#A38022] transition">Amenities</a>
            <a className="hover:text-[#A38022] transition">Location</a>
            <a className="hover:text-[#A38022] transition">Virtual Visit</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:09403891977"
              className="hidden sm:inline-flex bg-[#A38022] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#A38022] transition"
              style={{ letterSpacing: "0.5px" }}
            >
              09403891977
            </a>

            <button
              className="lg:hidden cursor-pointer text-gray-800"
              onClick={() => setOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <img
            src="https://revaahomes.com/wp-content/uploads/2025/02/Vihaan-Eleganza-Nerul-Logo.png"
            className="h-9"
          />
          <button
            className="cursor-pointer text-gray-800"
            onClick={() => setOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6 text-sm font-semibold text-gray-800">
          <a className="hover:text-[#A38022]">Area & Price</a>
          <a className="hover:text-[#A38022]">Amenities</a>
          <a className="hover:text-[#A38022]">Location</a>
          <a className="hover:text-[#A38022]">Virtual Visit</a>

          <a
            href="tel:09403891977"
            className="mt-4 bg-[#CE811C] text-white text-center py-3 rounded-md font-semibold"
            style={{ letterSpacing: "0.5px" }}
          >
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
