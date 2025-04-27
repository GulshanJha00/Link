"use client";

import HomePage from "@/components/sitecraft/HomePage";
import { SiteCraftNavbar } from "@/components/sitecraft/Navbar";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis({autoRaf: true,
      smoothWheel: true,
      touchMultiplier: 2,
      touchInertiaMultiplier: 2,

    })
  
    return () => {
      lenis.destroy()
    }
  }, [])
  

  
  return (
    <>
    <SiteCraftNavbar/>
    <HomePage/>
    <div className="absolute inset-0 bg-black/40 "></div>
      <div className="h-screen w-full bg-red-900"></div>
      <div className="h-screen w-full bg-yellow-900"></div>
      <div className="h-screen w-full bg-green-900"></div>
      <div className="h-screen w-full bg-red-900"></div>
    </>
  );
};
export default Page;
