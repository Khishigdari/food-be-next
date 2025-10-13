import { Category } from "../models/Category";
import connectDB from "../mongodb";

export const createCategory = async (name: string) => {
  await connectDB();
  const newCategory = new Category({ name });
  await newCategory.save();
  return newCategory;
};

export const getAllCategories = async () => {
  await connectDB();
  return await Category.find();
};

export const deleteCategories = async (categoryId: string) => {
  await connectDB();
  await Category.deleteOne({ _id: categoryId });
  return;
};
