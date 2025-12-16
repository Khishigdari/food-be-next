// import { createOrder } from "@/lib/services/order-service";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//   try {
//     // const data = await request.json();
//     const { foodId, quantity } = await request.json();

//     if (!foodId || !quantity) {
//       return NextResponse.json(
//         { success: false, message: "Missing data" },
//         { status: 400 }
//       );
//     }

//     const result = await createOrder(foodId, quantity);

//     if (result) {
//       return NextResponse.json({
//         success: true,
//         message: "Order placed successfully",
//       });
//     } else {
//       return NextResponse.json({
//         success: false,
//         message: "Order placement failed",
//       });
//     }
//   } catch (error) {
//     console.error("Failed to place order:", error);
//     return NextResponse.json(
//       {
//         error: "Error to place an order",
//       },
//       { status: 500 }
//     );
//   }
// }

import { createOrder } from "@/lib/services/order-service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    const order = await createOrder(items);

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
