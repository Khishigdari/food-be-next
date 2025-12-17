// import { User } from "@/lib/models/User";
// import connectDB from "@/lib/mongodb";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//   try {
//     const { email } = await request.json();

//     await connectDB();

//     const user = await User.findOne({ email }).select("_id");

//     if (!user) {
//       return NextResponse.json(
//         { success: false, message: "User not found" },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       userId: user._id.toString(),
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, message: "error" },
//       { status: 500 }
//     );
//   }
// }
