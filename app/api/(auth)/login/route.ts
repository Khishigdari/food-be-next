import { loginUser } from "@/lib/services/user-service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const dataJson = request.json();
  const { email, password } = await dataJson;
  const result = await loginUser(email, password);
  if (result) {
    return NextResponse.json({
      success: true,
      message: "Login Successfull",
    });
  } else {
    return NextResponse.json({
      success: false,
      message: "Login Failed",
    });
  }
}
