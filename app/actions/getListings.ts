import prisma from '@/libs/prismadb';

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      // Các tùy chọn truy vấn
    });

    const SafeListing = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return SafeListing;
  } catch (error: any) {
    throw new Error(error);
  }
}
