"use server";

import connect from "@/database/db";
import User from "@/database/models/user";

export async function createUser(formData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    photoUrl: formData.get("photoUrl"),
  };
  //   console.log("Raw Data: ", rawFormData);

  try {
    await connect();

    // TODO: Check if user already exists in DB

    const newUser = new User(rawFormData);
    await newUser.save();

    // redirect user to the home page

    // console.log("new user:", newUser);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Add User To the Database", { cause: error });
  }
}
