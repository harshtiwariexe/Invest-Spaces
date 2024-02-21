import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Is</h1>
        {/* Add your logo here */}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Dropdown menu for mobile view */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-white p-4 rounded shadow">
          <p className="mb-2">About</p>
          <p className="mb-2">Apartments</p>
          <p className="mb-2">Advantages</p>
          <p className="mb-2">Location</p>
          <p className="mb-2">FAQ</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            SignUp
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
            Login
          </button>
        </div>
      )}

      {/* Desktop navigation */}
      <div className="hidden md:flex gap-4">
        <p>About</p>
        <p>Apartments</p>
        <p>Advantages</p>
        <p>Location</p>
        <p>FAQ</p>
      </div>

      {/* Desktop login/signup buttons */}
      <div className="hidden md:flex">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          SignUp
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    </header>
  );
}
