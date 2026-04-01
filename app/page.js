const equipments = [
  {
    id: 1,
    name: "Tractor",
    description: "Powerful farming tractor",
    status: "available",
  },
  {
    id: 2,
    name: "Harvester",
    description: "Used for harvesting crops",
    status: "in_use",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">
          Green Grid
        </h1>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          + Add Equipment
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {equipments.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {item.name}
            </h2>

            <p className="text-gray-600 mb-3">
              {item.description}
            </p>

            <span
              className={`inline-block px-3 py-1 text-sm rounded-full ${
                item.status === "available"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.status === "available"
                ? "Available"
                : "In Use"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}