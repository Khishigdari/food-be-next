import mongoose, { Schema } from "mongoose";
import { FoodType } from "../types/types";

const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    ingredients: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
  // {
  //   name: String,
  //   price: Number,
  //   categoryId: Schema.Types.ObjectId,
  //   ingredients: String,
  //   image: String,
  //   //   category: String,
  // }
);

export const Food =
  mongoose.models.Food || mongoose.model<FoodType>("Food", FoodSchema);

// export const Food = models.Food || model<FoodType>("Food", FoodSchema);
