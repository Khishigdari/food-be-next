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
    imageUrl,
  });
  await newFood.save();
  return true;
};
