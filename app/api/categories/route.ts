import { NextResponse } from "next/server";
// import { defaultCategories } from "./data";
import { getAllCategories } from "@/lib/services/category-service";

export async function GET() {
  // const response = NextResponse.json(
  //   { data: defaultCategories },
  //   { status: 200 }
  // );
  // response.headers.set("Access-Control-Allow-Origin", "*"); // Or '*' for all origins
  // response.headers.set(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, PUT, DELETE, OPTIONS"
  // );
  // response.headers.set(
  //   "Access-Control-Allow-Headers",
  //   "Content-Type, Authorization"
  // );
  // return response;

  const categories = await getAllCategories();

  return new NextResponse(JSON.stringify({ data: categories }), {
    status: 200,
  });
}
// export async function POST(req: Request) {
//   console.log("Category Post");
//   const body = await req.json();
//   console.log({ body });
//   const { newCategory } = body;
//   console.log({ newCategory });
//   defaultCategories.push(newCategory);

//   const response = NextResponse.json(
//     { data: defaultCategories },
//     { status: 200 }
//   );
//   response.headers.set("Access-Control-Allow-Origin", "*"); // Or '*' for all origins
//   response.headers.set(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS"
//   );
//   response.headers.set(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization"
//   );
//   return response;
// }
