import mongoose, { Schema } from "mongoose";

type ICategory = {
  name: string;
};

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Category =
  mongoose.models.Category ||
  mongoose.model<ICategory>("Category", CategorySchema);
