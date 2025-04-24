"use client";
import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="h-screen border border-gray-700 w-screen bg-[#011936] text-white flex items-center justify-center px-6"
    >
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-4xl font-bold text-[#F9DC5C] mb-8">Get in Touch</h2>
        <p className="text-[#F4FFFD] mb-6">Have questions, suggestions, or need support? Reach out!</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-[#465362] text-white focus:outline-none focus:ring-2 focus:ring-[#F9DC5C]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-[#465362] text-white focus:outline-none focus:ring-2 focus:ring-[#F9DC5C]"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="p-3 rounded-md bg-[#465362] text-white focus:outline-none focus:ring-2 focus:ring-[#F9DC5C]"
          />
          <button
            type="submit"
            className="bg-[#F9DC5C] cursor-pointer hover:bg-[#f1ff83] text-[#011936] font-bold py-2 px-6 rounded-md transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
