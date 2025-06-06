"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#150404]/95 border border-black text-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
          Lynked
        </h1>

        <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
          <Link href="/home" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="#features" className="hover:text-yellow-400 transition">Features</Link>
          <Link href="#contact" className="hover:text-yellow-400 transition">Contact</Link>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 cursor-pointer transition font-semibold">
            Get Started
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-gray-900 text-sm font-medium">
          <Link href="#home" className="block hover:text-yellow-400">Home</Link>
          <Link href="#features" className="block hover:text-yellow-400">Features</Link>
          <Link href="#contact" className="block hover:text-yellow-400">Contact</Link>
          <button className="w-full bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition font-semibold mt-2">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
