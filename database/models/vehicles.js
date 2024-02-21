import { Schema, model, models } from "mongoose";

const vehicleSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  owner: { type: String, required: true },
  brand_name: { type: String, required: true },
  Details: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true, default: 0.0 },
});

const Vehicle = models.Vehicle || model("Vehicle", vehicleSchema);

export default Vehicle;
