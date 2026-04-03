"use client";

import { useState } from "react";

export default function EquipmentCard({ item }) {
  const [status, setStatus] = useState(item.status);
  const [usedBy, setUsedBy] = useState(item.usedBy || "");

  async function handleToggle() {
    let name = "";

    if (status === "available") {
      name = prompt("Enter your name");
      if (!name) return;
    }

    const res = await fetch(`/api/equipment/${item._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: status === "available" ? "in_use" : "available",
        usedBy: status === "available" ? name : "",
      }),
    });

    const data = await res.json();

    setStatus(data.status);
    setUsedBy(data.usedBy);
  }

  async function handleDelete() {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;
  
    await fetch(`/api/equipment/${item._id}`, {
      method: "DELETE",
    });
  
    window.location.reload(); // simple refresh
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-300">
      
      {/* Image */}
      <div className="w-full h-48 overflow-hidden rounded-lg mb-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
  
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        {item.name}
      </h2>
  
      {/* Description */}
      <p className="text-gray-600 text-sm mb-3">
        {item.description}
      </p>
  
      {/* Status */}
      <span
        className={`inline-block px-3 py-1 text-sm rounded-full mb-2 ${
          status === "available"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {status === "available" ? "Available" : "In Use"}
      </span>
  
      {/* Used By */}
      {status === "in_use" && (
        <p className="text-xs text-gray-500 mb-2">
          In Use by: {usedBy}
        </p>
      )}
  
      {/* Buttons */}
      <div className="flex flex-wrap gap-2 mt-3">
        
        <button
          onClick={handleToggle}
          className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-sm"
        >
          {status === "available" ? "Mark as In Use" : "Mark as Available"}
        </button>
  
        <a
          href={`/edit/${item._id}`}
          className="px-3 py-2 text-sm border text-black border-gray-300 rounded hover:bg-gray-100"
        >
          Edit
        </a>
  
        <button
          onClick={handleDelete}
          className="px-3 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
  
      </div>
    </div>
  );
}