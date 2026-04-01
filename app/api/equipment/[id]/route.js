import connectDB from "../../../../lib/mongodb";
import Equipment from "../../../../models/Equipment";

// GET single item
export async function GET(req, context) {
    try {
      await connectDB();
  
      const { id } = await context.params;
  
      const item = await Equipment.findById(id);
  
      return Response.json(item);
    } catch (error) {
      return Response.json(
        { error: "Failed to fetch equipment" },
        { status: 500 }
      );
    }
  }

// PATCH update
export async function PATCH(req, context) {
    try {
      await connectDB();
  
      const body = await req.json();
      const { id } = await context.params;
  
      const updated = await Equipment.findByIdAndUpdate(
        id,
        body,
        { new: true }
      );
  
      return Response.json(updated);
    } catch (error) {
      return Response.json(
        { error: "Failed to update equipment" },
        { status: 500 }
      );
    }
  }