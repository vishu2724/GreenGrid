import connectDB from "../../../lib/mongodb";
import Equipment from "../../../models/Equipment";

// GET → saare equipments fetch karega
export async function GET(req) {
    await connectDB();
  
    const { searchParams } = new URL(req.url);
  
    const search = searchParams.get("search");
    const status = searchParams.get("status");
  
    let query = {};
  
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }
  
    if (status) {
      query.status = status;
    }
  
    const data = await Equipment.find(query);
  
    return Response.json(data);
  }

// POST → naya equipment add karega
export async function POST(req) {
  await connectDB();
  const body = await req.json();

  const item = await Equipment.create(body);
  return Response.json(item);
}