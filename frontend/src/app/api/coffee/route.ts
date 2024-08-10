import { NextResponse } from "next/server";
import insertCoffee from "@/app/db/insertCoffee";

export async function POST(req: Request) {
  try {
    const { name, description, type, price, image_url } = await req.json();
    const newCoffee = await insertCoffee(
      name,
      description,
      type,
      price,
      image_url
    );
    return NextResponse.json(newCoffee);
  } catch (error) {
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
