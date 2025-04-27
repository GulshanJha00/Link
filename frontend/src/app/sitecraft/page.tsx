"use client";

import HomePage from "@/components/sitecraft/HomePage";
import { SiteCraftNavbar } from "@/components/sitecraft/Navbar";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Head from "next/head";
import { useEffect } from "react";

const Page = () => {
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
          content="Create a website instantly by writing a prompt. It's fast, free, and efficient with our AI-powered site creation tool. Perfect for developers and anyone in need of rapid website building."
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
        <meta
          property="og:url"
          content="https://cheated.vercel.app/sitecraft"
        />
        <meta
          property="og:image"
          content="https://cheated.vercel.app/og-image.jpg"
        />{" "}
        <meta name="twitter:card" content="favicon.ico" />
        <meta name="twitter:title" content="Cheated | Share Code Instantly" />
        <meta
          name="twitter:description"
          content="Create a website instantly by writing a prompt with our AI tool. Effortless, fast, and free. And share the code with your friends"
        />
      </Head>

      <SiteCraftNavbar />
      <HomePage />
      <div className="absolute inset-0 bg-black/40 "></div>
      <div className="h-screen w-full bg-red-900"></div>
      <div className="h-screen w-full bg-yellow-900"></div>
      <div className="h-screen w-full bg-green-900"></div>
      <div className="h-screen w-full bg-red-900"></div>
    </>
  );
};
export default Page;
