import { Food } from "../models/Food";
import connectDB from "../mongodb";
import { FoodType } from "../utils/types";

export const getAllFoods = async (): //   name: string,
//   price: string,
//   ingredients: string,

//   image: string,
//   category: string
Promise<FoodType[]> => {
  await connectDB();
  //   const newFood = new Food({ name, price, ingredients, image, category });
  //   await newFood.save();
  //   return newFood;

  const allFoods: FoodType[] = await Food.find();
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

export const deleteFoods = async (categoryId: string) => {
  await connectDB();
  await Food.deleteOne({ _id: categoryId });
  return;
};
