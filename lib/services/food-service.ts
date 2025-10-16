import { Food } from "../models/Food";
import connectDB from "../mongodb";
import { FoodType } from "../utils/types";

export const getAllFoods = async (): Promise<FoodType[]> => {
  await connectDB();
  // const allFoods: FoodType[] = await Food.find();
  const allFoods: FoodType[] = await Food.find({}).populate("categoryId");
  return allFoods;
};

export const createFood = async (
  name: string,
  ingredients: string,
  price: number,
  categoryId: string,
  imageUrl: string
) => {
  await connectDB();

  const newFood = new Food({
    name,
    ingredients,
    price,
    categoryId,
    image: imageUrl,
    // imageUrl,
  });
  await newFood.save();
  return true;
};

export const editFood = async (
  name: string,
  ingredients: string,
  price: number,
  categoryId: string,
  imageUrl: string
) => {
  await connectDB();

  const newFood = new Food({
    name,
    ingredients,
    price,
    categoryId,
    image: imageUrl,
    // imageUrl,
  });
  await newFood.edit();
  return true;
};

export const deleteFoods = async (_id: string) => {
  await connectDB();
  await Food.deleteOne({ _id });
  return;
};
