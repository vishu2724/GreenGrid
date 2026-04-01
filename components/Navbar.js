"use client";

import Link from "next/link";

export default function Navbar() {
  return (
<div className="flex justify-between items-center p-4 bg-white shadow">
      <Link href="/" className="text-xl font-bold text-green-700">
        Green Grid
      </Link>

      <div className="flex gap-4">
        <Link href="/" className="text-gray-700">
          Home
        </Link>

        <Link
          href="/add"
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          + Add
        </Link>
      </div>
    </div>
  );
}