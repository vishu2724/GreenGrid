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
      
   

      {/* Search + Filter */}
      <div className="flex gap-4 mb-6">
  <input
    type="text"
    placeholder="Search equipment..."
    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"    value={status}
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