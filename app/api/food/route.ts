export async function GET() {
  return Response.json({ data: "Hello from Food" });
}
export async function POST() {
  return Response.json({ message: "Hello from post Food" });
}
