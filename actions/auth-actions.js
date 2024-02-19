"use server";

export async function createUser(formData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    photoUrl: formData.get("photoUrl"),
  };

  console.log(rawFormData);
}
