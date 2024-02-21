"use server";

import connect from "@/database/db";
import Cart from "@/database/models/cart";
import User from "@/database/models/user";
import Vehicle from "@/database/models/vehicles";

//! Add to cart

export const addToCart = async (vehicleId, userEmail) => {
  try {
    await connect();

    // Throw Error if no vehicleid or userEmail comes through
    if (!vehicleId || !userEmail) {
      throw new Error("userEamil and vehicleId are required");
    }

    // Check if user exists in db by email
    const verifiedUser = await User.find({ email: userEmail });
    if (verifiedUser.length === 0) {
      throw new Error("User not found in database");
    }

    // Check if vehicle exists in DB
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      throw new Error("Vehicle not found in database");
    }

    // Check if vehicle is in users cart already
    const cart = await Cart.findOne({ user: verifiedUser?._id });
    if (cart && cart.vehicles.includes(vehicleId)) {
      throw new Error("Vehicle already exists in your cart.");
    }

    // If it meets all the conditions add the thing to users cart
    if (!cart) {
      await Cart.create({ user: verifiedUser?._id, vehicles: [vehicleId] });
    } else {
      // If the user already has a cart, update it
      cart.vehicles.push(vehicleId);
      await cart.save();
    }

    // Return final data and message
    return { message: "Added this vehicle to your cart." };
  } catch (error) {
    throw new Error(error);
  }
};
