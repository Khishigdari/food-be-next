import mongoose, { Schema } from "mongoose";
import { FoodType } from "../utils/types";

// type IFood = {
//   name: string;
//   price: number;
//   ingredients: string;
//   imageUrl: string;
//   //   category: string;
// };

const FoodSchema = new Schema({
  name: String,
  price: Number,
  categoryId: Schema.Types.ObjectId,
  ingredients: String,
  image: String,
  //   category: String,
});

export const Food =
  mongoose.models.Food || mongoose.model<FoodType>("Food", FoodSchema);
