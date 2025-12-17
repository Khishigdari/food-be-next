import mongoose, { Schema } from "mongoose";
import { FoodSchema } from "./Food";

const FoodOrderItem = new Schema({
  food: FoodSchema,
  quantity: Number,
});

export const FoodOrderSchema = new Schema(
  {
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    totalPrice: { type: Number, required: true },
    foodOrderItems: { type: [FoodOrderItem], required: true },
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Order =
  mongoose.models.Order || mongoose.model("Order", FoodOrderSchema);
