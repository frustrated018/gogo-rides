import mongoose, { Schema, model, models } from "mongoose";

const cartSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
  vehicles: [{ type: mongoose.Types.ObjectId, ref: 'Vehicle' }]
});

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;
