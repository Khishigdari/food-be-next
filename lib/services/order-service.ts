// import { NextResponse } from "next/server";
// import { Order } from "../models/Order";
// import connectDB from "../mongodb";
// import { FoodType } from "../types/types";

// export const createOrder = async (
//   selectedFood: FoodType[],
//   quantity: number
// ) => {
//   await connectDB();

//   const order = await Order.create({
//     food: selectedFood,
//     quantity,
//   });
//   return NextResponse.json({ message: "Successfully placed order", order });
// };

import connectDB from "../mongodb";
import { Order } from "../models/Order";
import { Food } from "../models/Food";
import mongoose from "mongoose";

type CreateOrderItem = {
  foodId: string;
  quantity: number;
};

export const createOrder = async (items: CreateOrderItem[]) => {
  await connectDB();

  if (!items.length) {
    throw new Error("Order items are required");
  }

  let totalPrice = 0;

  const foodOrderItems = await Promise.all(
    items.map(async (item) => {
      const food = await Food.findById(item.foodId);
      if (!food) {
        throw new Error("Food not found");
      }

      const itemTotal = food.price * item.quantity;
      totalPrice += itemTotal;

      return {
        food,
        quantity: item.quantity,
      };
    })
  );

  const order = await Order.create({
    // userId: new mongoose.Types.ObjectId(userId),
    totalPrice,
    foodOrderItems,
    status: "PENDING",
  });

  return order;
};
