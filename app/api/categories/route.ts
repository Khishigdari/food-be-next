import { NextResponse } from "next/server";
// import { defaultCategories } from "./data";
import {
  createCategory,
  getAllCategories,
} from "@/lib/services/category-service";

//  ========= REVIEW iin importuud =========

// import { Category } from "@/lib/models/Category";
// import { NextResponse } from "next/server";

//  ========= REVIEW iin importuud =========

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
export async function POST(req: Request) {
  // console.log("Category Post");
  const body = await req.json();
  // console.log({ body });
  const { newCategory } = body;
  // console.log({ newCategory });
  await createCategory(newCategory);
  return new NextResponse(JSON.stringify({ message: "Category created" }), {
    status: 200,
  });
}

// ======== REVIEW =========

// let mockCategory = [
//   {
//     _id: "32743",
//     categoryName: "Salad",
//     createdAt: "2025-10-14",
//     updatedAt: "2025-10-14",
//   },
// ];

// export const GET = async (req: Request) => {
//   return NextResponse.json(mockCategory); //request yvuulj bhad response avah ystoi, ter response ruga mockCategoryga yvuulj baigaa
// };

// export const POST = async (req: Request) => {
//   const body = await req.json();

//   mockCategory.push({
//     categoryName: body.categoryName, //body.categoryName => ni postman ii POST deer body => raw => json => songood {"":""} geed ugsunuu pushlej baigaa
//     _id: "123",
//     createdAt: "2025-10-14",
//     updatedAt: "2025-10-14",
//   });

//   return NextResponse.json({ message: "Success", category: mockCategory }); //category: ni data: ch bj bolno, yu bichne ter ni postman deer garch irne
// };

// ======== REVIEW =========
