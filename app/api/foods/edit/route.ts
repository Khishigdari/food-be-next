import { editFood } from "@/lib/services/food-service";
import { FoodType } from "@/lib/types/types";
import { uploadImageToCloudinary } from "@/lib/utils/uploadImage";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    console.log({ formData });

    // const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const ingredients = formData.get("ingredients") as string;
    const price = formData.get("price") as string;
    const categoryId = formData.get("categoryId") as string;
    const image = formData.get("image") as File | string;
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
    console.log(uploadedUrl, "url");
    const foodData: FoodType = {
      name: name,
      ingredients: ingredients,
      image: uploadedUrl,
      // image: uploadedUrl,
      price: parseFloat(price),
      categoryId: categoryId,
    };

    await editFood(foodId, foodData);

    return NextResponse.json(
      { message: "Food updated successfully", data: foodData }, // dara ni ustgah
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
