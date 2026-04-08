"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPage({ params }) {
    const router = useRouter();
  
    const [id, setId] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function getId() { //
      const resolvedParams = await params;
      setId(resolvedParams.id);//dynamic route se id fetch karke state me set karta hai
    }
  
    getId();
  }, [params]);

  useEffect(() => {
    if (!id) return;
  
    async function fetchData() {
      //GET request karke existing equipment data fetch karna
      const res = await fetch(`/api/equipment/${id}`);
      const data = await res.json();
  
      // Form fields ko existing data se pre-fill karna
      setName(data.name || "");
      setDescription(data.description || "");
      setImage(data.image || "");
    }
  
    fetchData();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    //PATCH request karke updated data server ko bhejna
    await fetch(`/api/equipment/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, image }),
    });

    router.push("/");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      
      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow">
        
        <h1 className="text-2xl font-bold text-green-700 mb-6">
          Edit Equipment
        </h1>
  
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <input
            value={name} //Pre-filled values 
            onChange={(e) => setName(e.target.value)}
            placeholder="Equipment Name"
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
  
          {/* Description */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
  
          {/* Image */}
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
  
          {/* Button */}
          <button
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Update Equipment
          </button>
  
        </form>
      </div>
  
    </div>
  );
}