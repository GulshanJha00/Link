"use client";
import React from "react";
import { PlayIcon, HelpCircleIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-(--blue) p-5 shadow-md sticky top-0 z-10 border-b border-gray-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand Name */}
        <h1 className="text-3xl font-extrabold bg-(--yellow) text-transparent bg-clip-text">
          Cheated
        </h1>

        {/* Buttons */}
        <div className="space-x-4 flex items-center">
          <select
            className="bg-gray-900 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-sm"
            name="language"
            id="language"
          >
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="js">JavaScript</option>
            <option value="python">Python</option>
          </select>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
            <PlayIcon size={18} />
            Run
          </button>
          <button className="flex cursor-pointer items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
            <HelpCircleIcon size={18} />
            Help
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
