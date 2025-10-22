import { createUser } from "@/lib/services/user-service";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const dataJson = await request.json();
    console.log(dataJson);
    const { email, password } = await dataJson;
    const result = await createUser(email, password);
    if (result) {
      return NextResponse.json({
        success: true,
        meassage: "User Created Successfully",
      });
    } else {
      return NextResponse.json({
        success: true,
        meassage: "User Creation Failed",
      });
    }
  } catch (error) {
    console.error("Failed to update food:", error);
    return NextResponse.json(
      { error: "Failed to update food" },
      { status: 500 }
    );
  }
}
