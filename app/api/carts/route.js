import connect from "@/database/db";
import Cart from "@/database/models/cart";
import { NextResponse } from "next/server";

// Get all cart data
export const GET = async () => {
  try {
    await connect();
    const res = await Cart.find();
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error in fetching Users", { status: 500 });
  }
};
