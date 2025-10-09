import { NextResponse } from "next/server";
import { defaultCategories } from "./data";

export async function GET() {
  const response = NextResponse.json(
    { data: defaultCategories },
    { status: 200 }
  );
  response.headers.set("Access-Control-Allow-Origin", "*"); // Or '*' for all origins
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
}
export async function POST(req: Request) {
  console.log("Category Post");
  const body = await req.json();
  console.log({ body });
  const { newCategory } = body;
  console.log({ newCategory });
  defaultCategories.push(newCategory);

  const response = NextResponse.json(
    { data: defaultCategories },
    { status: 200 }
  );
  response.headers.set("Access-Control-Allow-Origin", "*"); // Or '*' for all origins
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
}
