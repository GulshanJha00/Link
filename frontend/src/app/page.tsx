"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import ContactUs from "@/components/Contact";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        style={{ backgroundColor: "var(--blue)" }}
      >
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-0 left-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
            style={{ backgroundColor: "var(--red)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"
            style={{ backgroundColor: "var(--yellow)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-500"
            style={{ backgroundColor: "var(--charcoal)" }}
          />
        </div>

        {/* Content */}
        <div className="z-10 space-y-8 text-center text-white max-w-4xl mx-auto">
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ color: "var(--mint)" }}
          >
            LYNKED
          </h1>
          <p> YOU KNOW WHAT TO DO.</p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-[#F9DC5C]">
            Share your code with a single link. Clean, fast, and developer-first. Built for devs who want to get stuff DONE. No fluff, just code. Whether you're collaborating, learning, or showing off, Lynked doesn't waste your time.
          </p>

          {/* Primary CTA */}
          <div>
            <button
              onClick={() => {
                const id = nanoid(6);
                router.push(`/${id}`);
              }}
              className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-300 cursor-pointer transition font-bold text-xl transform hover:scale-110"
            >
              CREATE A LINK. NOW.
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
};

export default Page;
