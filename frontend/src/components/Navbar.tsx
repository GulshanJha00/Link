import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md sticky top-0 z-10">
    <div className="flex justify-between items-center">
      <h1 className="text-white text-xl">Cheated</h1>
      <div className="space-x-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Run
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Help
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
