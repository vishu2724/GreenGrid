"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddEquipment() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/equipment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, image }),
    });

    if (res.ok) {
      router.push("/");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      
      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow">
        
        <h1 className="text-2xl font-bold text-green-700 mb-6">
          Add Equipment
        </h1>
  
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <input
            type="text"
            placeholder="Equipment Name"
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
  
          {/* Description */}
          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
  
          {/* Image */}
          <input
            type="text"
            placeholder="Image URL"
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
  
          {/* Button */}
          <button
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add Equipment
          </button>
  
        </form>
      </div>
  
    </div>
  );
}