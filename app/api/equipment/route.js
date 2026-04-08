import connectDB from "../../../lib/mongodb";
import Equipment from "../../../models/Equipment";

// GET → saare equipments fetch karega
export async function GET(req) {
    try {
      await connectDB();
  
      const { searchParams } = new URL(req.url);// url parse(url ko todta h)
  
      const search = searchParams.get("search");//search info fetch karega
      const status = searchParams.get("status");//status info fetch karega
  
      let query = {}; //query object banaya jo filter karega
  
      if (search) {
        query.name = { $regex: search,// pattern searching ke liye regex use karte hai
           $options: "i" };//case insensitive
      }
  
      if (status) {
        query.status = status;
      }
  
      const data = await Equipment.find(query);
  
      return Response.json(data);
    } catch (error) {
      return Response.json(
        { error: "Failed to fetch equipment" },
        { status: 500 }
      );
    }
  }

// POST → naya equipment add karega
export async function POST(req) {
    try {
      await connectDB();
  
      const body = await req.json();
  
      const item = await Equipment.create(body);
  
      return Response.json(item);
    } catch (error) {
      return Response.json(
        { error: "Failed to create equipment" },
        { status: 500 }
      );
    }
  }

 