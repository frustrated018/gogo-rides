import connect from "@/database/db";
import User from "@/database/models/user";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const res = await User.find();
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error in fetching Users", { status: 500 });
  }
};
