"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-green-700">
      🌱 Green Grid
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-6">
        
        <Link
          href="/"
          className="text-gray-700 hover:text-green-600 transition"
        >
          Home
        </Link>

        <Link
          href="/add"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          + Add Equipment
        </Link>

      </div>
    </nav>
  );
}