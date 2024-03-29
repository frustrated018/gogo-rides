import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  photoUrl: { type: String, required: true },
});

const User = models.User || model("User", userSchema);

export default User;

// vehicles:[{type: mongoose.Types.ObjectId, ref: "Vehicle"}]
