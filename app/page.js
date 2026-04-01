"use client";

import { useState, useEffect } from "react";
import EquipmentCard from "@/components/EquipmentCard";

export default function Home() {
  const [equipments, setEquipments] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  async function fetchData() {
    let url = `/api/equipment?search=${search}&status=${status}`;
    const res = await fetch(url);
    const data = await res.json();
    setEquipments(data);
  }

  useEffect(() => {
    fetchData();
  }, [search, status]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">
          Green Grid
        </h1>

        <a
          href="/add"
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Equipment
        </a>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search equipment..."
          className="border p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="available">Available</option>
          <option value="in_use">In Use</option>
        </select>
      </div>

      {/* List */}
      {equipments.length === 0 ? (
        <p>No equipment found</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {equipments.map((item) => (
            <EquipmentCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}