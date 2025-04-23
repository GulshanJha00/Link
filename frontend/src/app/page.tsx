'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { nanoid } from 'nanoid';

const Page = () => {
  const router = useRouter()
  return (

    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ backgroundColor: 'var(--blue)' }}
    >
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-0 left-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
          style={{ backgroundColor: 'var(--red)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"
          style={{ backgroundColor: 'var(--yellow)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-500"
          style={{ backgroundColor: 'var(--charoal)' }}
        />
      </div>

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--mint)' }}>
          Link
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6" style={{ color: 'var(--yellow)' }}>
          Share your code with a single link. Clean, fast and developer-first. Built for devs who just want to share code without distractions.
        </p>
          <button className="bg-[#ED254E] cursor-pointer hover:bg-[#c61d42] text-white px-6 py-2 rounded-md shadow-md transition" onClick={()=>{
            const id = nanoid(6)
            router.push(`/create/${id}`)
            }}>
            Create a New Link
          </button>
      </div>
    </div>
  );
};
export default Page;