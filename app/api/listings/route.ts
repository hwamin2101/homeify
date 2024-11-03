import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Người dùng chưa được xác thực." }, { status: 401 });
  }

  const body = await request.json();
  const { title, description, imageSrc, category, roomCount, bathroomCount, guestCount, location, price } = body;

  // Validate the request body
  for (const value of Object.keys(body)) {
    if (!body[value]) {
      return NextResponse.json({ error: `${value} bắt buộc` }, { status: 400 });
    }
  }

  try {
    const listing = await prisma.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        locationValue: location?.value || null,
        price: parseInt(price, 10),
        userId: currentUser.id,
      },
    });

    return NextResponse.json(listing);
  } catch (error) {
    console.error("Lỗi khi tạo danh sách:", error);
    return NextResponse.json({ error: "Không tạo được danh sách" }, { status: 500 });
  }
}
