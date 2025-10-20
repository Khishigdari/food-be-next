import { createUSer } from "@/lib/services/user-service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const dataJson = await request.json();
  console.log(dataJson);
  const { email, password } = await dataJson;
  const result = await createUSer(email, password);
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
}
