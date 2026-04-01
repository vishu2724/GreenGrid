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

  return (
    <div className="bg-white p-5 rounded-xl shadow">
        {item.image && (
  <img
    src={item.image}
    alt={item.name}
  className="w-full h-40 object-contain bg-gray-100 rounded mb-3"
  />
)}
      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
      

      <p className="text-gray-600 mb-3">{item.description}</p>

      <span
        className={`inline-block px-3 py-1 text-sm rounded-full ${
          status === "available"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {status === "available" ? "Available" : "In Use"}
      </span>

      {status === "in_use" && (
        <p className="text-sm mt-2 text-gray-700">
          In Use by: {usedBy}
        </p>
      )}

      <button
        onClick={handleToggle}
        className="mt-4 bg-green-600 text-white px-3 py-2 rounded"
      >
        {status === "available" ? "Mark as In Use" : "Mark as Available"}
      </button>

      <a
  href={`/edit/${item._id}`}
  className="block mt-2 text-blue-600"
>
  Edit
</a>
    </div>
  );
}