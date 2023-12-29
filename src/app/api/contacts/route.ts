import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();
  
  const prisma = new PrismaClient()

  await prisma.contact.create({
    data: {
      name,
      email,
      phone,
      message
    }
  })
  
  return new NextResponse(JSON.stringify({ name, email, phone, message }), {
    status: 200,
  });
}