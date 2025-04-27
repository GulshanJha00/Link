"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import ContactUs from "@/components/Contact";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import Head from "next/head";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      touchMultiplier: 2,
      touchInertiaMultiplier: 2,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <title>Cheated | Share Code Instantly</title>
        <meta
          name="description"
          content="Create a link to share your code instantly with colleagues and friends. Clean, fast, and developer-first."
        />
        <meta
          name="keywords"
          content="instant website creation, AI website generator, free website builder, website maker, create website with AI, AI site crafting, code sharing platform, code runner, share code online, collaborate on code, instant code sharing, programming, developer tools, AI-powered site builder, prompt-based site creation, fast website design, rapid website building, code execution, real-time code execution, coding collaboration, web development tools, developer-first tools, share your code instantly, online code editor, website builder for developers, site crafting with AI, code collaboration platform, instant code playground, free code sharing, tech tools for developers, cheated, cheatedVercel, Cheatxyz,cheatedxyz, cheated, sitecraft, site craft, sitecrafter, site-crafter, cheated.xyz, cheated"
        />

        <meta property="og:title" content="Cheated | Share Code Instantly" />
        <meta
          property="og:description"
          content="Create a link to share your code instantly with colleagues and friends. Fast, developer-first, and built for efficiency."
        />
        <meta property="og:url" content="https://cheated.vercel.app" />
      </Head>
      <Navbar />
      <div className="min-h-screen w-screen bg-[#150404] bg-[url('/Background/bg-red.jpg')] bg-cover  flex items-center justify-center relative overflow-hidden">
        <div className="bg-[#150404]/30 absolute inset-0  "></div>

        {/* Content */}
        <header className="z-10 space-y-8 text-center  text-white max-w-4xl mx-auto">
          <h1
            className="text-6xl md:text-7xl font-extrabold drop-shadow-charcoal animate-flicker mb-0"
            style={{
              fontWeight: "bold",
              color: "var(--yellow)",
              textShadow: "2px 2px 0 var(--red), 4px 4px 0 var(--blue)",
            }}
          >
            LYNKED
          </h1>

          <p className="text-base font-henry text-gray-300 italic mt-0">
            YOU KNOW WHAT TO DO.
          </p>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-[#F9DC5C]">
            Share your code with a single link. Clean, fast, and
            developer-first. Built for devs who want to get stuff DONE. No
            fluff, just code. Whether you&apos;re collaborating, learning, or
            showing off, Lynked doesn&apos;t waste your time.
          </p>

          {/* Primary CTA */}
          <div>
            {loading ? (
              <Loader />
            ) : (
              <button
                onClick={() => {
                  const id = nanoid(6);
                  setLoading(true);
                  router.push(`/${id}`);
                }}
                className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-300 cursor-pointer transition font-bold text-xl transform hover:scale-110"
              >
                CREATE A LINK. NOW.
              </button>
            )}
          </div>
        </header>
      </div>

      {/* Features Section */}
      <Features />

      {/* Contact Us Section */}
      <ContactUs />
      <Footer />
    </>
  );
};

export default Page;
