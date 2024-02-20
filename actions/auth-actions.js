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

//? Function to check for user in db are different for signup and login. in one if there is user thats an error other positive

//! Users existance for login
export async function LoginUserExists(formData) {
  const email = formData.get("email");
  try {
    await connect();
    const userMatch = await User.findOne({ email });

    // if doesn't exist throw error
    if (!userMatch) {
      throw new Error("User doesn't exists");
    }

    // If user exist, return a success message
    return "Found user in DB";

    
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
