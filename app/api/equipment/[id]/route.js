import connectDB from "../../../../lib/mongodb";
import Equipment from "../../../../models/Equipment";

// GET single item
export async function GET(req, context) {
    try {
      await connectDB();
  
      const { id } = await context.params;//dynamic route ka data deta hai
  
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
  
      const body = await req.json();//Client se aaya data read karta hai
      const { id } = await context.params;
  
      const updated = await Equipment.findByIdAndUpdate(
        id,
        body,
        { new: true } //updated data return karo
      );
  
      return Response.json(updated);
    } catch (error) {
      return Response.json(
        { error: "Failed to update equipment" },
        { status: 500 }
      );
    }
  }

  //delete item
  export async function DELETE(req, context) {
    try {
      await connectDB();
  
      const { id } = await context.params;
  
      await Equipment.findByIdAndDelete(id);
  
      return Response.json({ message: "Deleted successfully" });
    } catch (error) {
      return Response.json(
        { error: "Failed to delete" },
        { status: 500 }
      );
    }
  }