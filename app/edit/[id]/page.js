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
    async function getId() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
  
    getId();
  }, [params]);

  useEffect(() => {
    if (!id) return;
  
    async function fetchData() {
      const res = await fetch(`/api/equipment/${id}`);
      const data = await res.json();
  
      setName(data.name || "");
      setDescription(data.description || "");
      setImage(data.image || "");
    }
  
    fetchData();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`/api/equipment/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, image }),
    });

    router.push("/");
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Equipment</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}