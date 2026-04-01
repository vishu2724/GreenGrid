import connectDB from "../../../lib/mongodb";
import Equipment from "@/models/Equipment";

// GET → saare equipments fetch karega
export async function GET() {
  await connectDB();
  const data = await Equipment.find();
  return Response.json(data);
}

// POST → naya equipment add karega
export async function POST(req) {
  await connectDB();
  const body = await req.json();

  const item = await Equipment.create(body);
  return Response.json(item);
}