"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { nanoid } from 'nanoid'

const Page = () => {

        const router = useRouter();

        const id = nanoid(5)
    
        console.log(id)
    
    
        router.push(`/create/${id}`)
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <h1 className="text-2xl animate-pulse">Creating your Link...</h1>
        </div>
  )
}

export default Page