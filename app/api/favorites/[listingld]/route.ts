import { NextResponse } from "next/server";

import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

interface IParams {
  listingId: string; // listingId luôn là bắt buộc
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  // Kiểm tra xem ID đã tồn tại chưa trước khi thêm
  if (!favoriteIds.includes(listingId)) {
    favoriteIds.push(listingId);
  }

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  // Lọc bỏ listingId khỏi danh sách yêu thích
  favoriteIds = favoriteIds.filter((id) => id !== listingId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
}
// recheck favorited function - 5:24:22