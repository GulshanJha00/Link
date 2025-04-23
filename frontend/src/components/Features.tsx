"use client";
import React from "react";
import { FaRegHandshake, FaBrain, FaCode } from "react-icons/fa"; // Adding icons

const Features = () => {
  return (
    <section
      id="features"
      className="h-screen w-screen bg-[#011936] text-white flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-7xl w-full mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#F9DC5C]">
          The Features That Will Blow Your Mind
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Real-time Collaboration */}
          <div className="bg-[#465362] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 transform">
            <div className="mb-4 text-4xl text-[#F9DC5C] flex justify-center">
              <FaRegHandshake />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-[#F9DC5C]">
              Real-time Collaboration (No More Boring Teamwork)
            </h3>
            <p className="text-base text-[#F4FFFD]">
              Work together like a freaking team! Code with your friends in
              real-time without all the usual hassle. Yeah, we&apos;re not about that
              laggy mess.
            </p>
          </div>

          {/* AI Code Assistance */}
          <div className="bg-[#465362] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 transform">
            <div className="mb-4 text-4xl text-[#F9DC5C] flex justify-center">
              <FaBrain />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-[#F9DC5C]">
              AI Code Assistance (Genius in Your Pocket)
            </h3>

            <p className="text-base text-[#F4FFFD]">
              You stuck? Not anymore! Our AI assistant will throw you the best
              code suggestions ever, like it&apos;s reading your mind. You can thank
              us later.
            </p>
          </div>

          {/* Multi-language Support */}
          <div className="bg-[#465362] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 transform">
            <div className="mb-4 text-4xl text-[#F9DC5C] flex justify-center">
              <FaCode />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-[#F9DC5C]">
              Multi-language Support (Write Code Like a Boss)
            </h3>
            <p className="text-base text-[#F4FFFD]">
              Write code in whatever language you want. C++, Java, JavaScript,
              Python... We don&apos;t care. Code like a true master. No limits, just
              raw power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
