import EquipmentCard from "@/components/EquipmentCard";
async function getEquipments() {
  const res = await fetch("http://localhost:3000/api/equipment", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const equipments = await getEquipments();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
     <div className="flex justify-between items-center mb-6">
  <h1 className="text-3xl font-bold text-green-700">
    Green Grid
  </h1>

  <a
    href="/add"
    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
  >
    + Add Equipment
  </a>
</div>

      {equipments.length === 0 ? (
        <p className="text-gray-600">No equipment found</p>
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