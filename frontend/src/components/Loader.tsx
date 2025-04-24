"use client"
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen absolute top-0 left-0 flex items-center justify-center bg-black text-white overflow-hidden z-50">
      {/* Paint Blobs */}
      <div className="absolute w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-60 top-10 left-10 mix-blend-lighten animate-blob1"></div>
      <div className="absolute w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-50 bottom-16 right-20 mix-blend-lighten animate-blob2"></div>
      <div className="absolute w-28 h-28 bg-yellow-400 rounded-full blur-xl opacity-50 bottom-5 left-1/2 mix-blend-lighten animate-blob3"></div>

      {/* Center Text */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold animate-pulse font-henry">
          Creating Your Link...
        </h1>
        <p className="text-sm mt-3 font-henry text-gray-300 italic">
          Hold on, magic about to happen
        </p>
      </div>

      <style jsx>{`
        .font-henry {
          font-family: 'Comic Sans MS', 'Comic Neue', cursive;
        }
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -10px) scale(1.1); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-15px, 25px) scale(0.95); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, 10px) scale(1.05); }
        }
        .animate-blob1 { animation: blob1 7s infinite ease-in-out; }
        .animate-blob2 { animation: blob2 6s infinite ease-in-out; }
        .animate-blob3 { animation: blob3 8s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Loader;
