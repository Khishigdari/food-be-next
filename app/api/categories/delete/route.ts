import { deleteCategories } from "@/lib/services/category-service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { categoryId } = body;
  console.log("delete categoryId", body);
  await deleteCategories(categoryId);

  const response = NextResponse.json({ data: categoryId }, { status: 200 });
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
