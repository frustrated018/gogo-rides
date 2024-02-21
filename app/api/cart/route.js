import connect from "@/database/db";
import Cart from "@/database/models/cart";
import User from "@/database/models/user";
import Vehicle from "@/database/models/vehicles";
import { NextResponse } from "next/server";

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

export const POST = async (request) => {
  try {
    await connect();

    // Extract data from the request body
    const { userId, vehicleId } = await request.json();

    // Check if both userId and vehicleId are provided
    if (!userId || !vehicleId) {
      return new NextResponse("UserId and VehicleId are required.", {
        status: 400,
      });
    }

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return new NextResponse("User not found.", { status: 404 });
    }

    // Check if the vehicle exists
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      return new NextResponse("Vehicle not found.", { status: 404 });
    }

    // Check if the vehicle is already in the user's cart
    const cart = await Cart.findOne({ user: userId });
    if (cart && cart.vehicles.includes(vehicleId)) {
      return new NextResponse("Vehicle is already in the cart.", {
        status: 400,
      });
    }

    // Add the vehicle to the user's cart
    if (!cart) {
      // If the user doesn't have a cart yet, create one
      await Cart.create({ user: userId, vehicles: [vehicleId] });
    } else {
      // If the user already has a cart, update it
      cart.vehicles.push(vehicleId);
      await cart.save();
    }

    return new NextResponse("Vehicle added to cart successfully.", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error in adding vehicle to cart.", {
      status: 500,
    });
  }
};
