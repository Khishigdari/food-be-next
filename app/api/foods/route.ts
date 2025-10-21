import { createFood, editFood, getAllFoods } from "@/lib/services/food-service";
import { FoodType } from "@/lib/types/types";
import { uploadImageToCloudinary } from "@/lib/utils/uploadImage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  // Extract food fields from formData
  const name = formData.get("name") as string;
  const ingredients = formData.get("ingredients") as string;
  const price = formData.get("price") as string;
  const categoryId = formData.get("categoryId") as string;
  const image = formData.get("image") as File;

  const uploadedUrl = await uploadImageToCloudinary(image);

  const result = await createFood(
    name,
    ingredients,
    Number(price),
    categoryId,
    uploadedUrl
  );

  if (result) {
    return NextResponse.json(
      { message: "Food item received successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Food Failed to create" },
      { status: 400 }
    );
  }
}

export const GET = async () => {
  const foods = await getAllFoods();

  return NextResponse.json({ message: "Hello", foods }, { status: 200 });
};

//EDIT

export const PUT = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const ingredients = formData.get("ingredients") as string;
    const price = formData.get("price") as string;
    const categoryId = formData.get("categoryId") as string;
    const image = formData.get("image") as File;
    const foodId = formData.get("foodId") as string;
    if (!foodId) {
      return NextResponse.json(
        { error: "foodId is required" },
        { status: 400 }
      );
    }

    let uploadedUrl = "";
    if (image instanceof File) {
      uploadedUrl = await uploadImageToCloudinary(image);
    } else if (typeof image === "string") {
      uploadedUrl = image;
    }
    const foodData: FoodType = {
      name: name,
      ingredients: ingredients,
      image: uploadedUrl,
      price: parseFloat(price),
      categoryId: categoryId,
    };

    await editFood(foodId, foodData);

    return NextResponse.json(
      { message: "Food updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Failed to update food:", err);
    return NextResponse.json(
      { error: "Failed to update food" },
      { status: 500 }
    );
  }
};
