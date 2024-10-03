import prisma from "@/libs/prismadb";
interface IParams{
  listingId?: string;
}
export default asycn function getListingById(
  params: IParams
){
  try{
    const{listingId} = params;
    const listing = await prisma.listing.findUnique({
      where:{
        id: listingId
      },
      include:{
        user: true
      }
    });
    if(!listing){
      return null;
    }

    return {
      ...listing,
      createdAt: listing.createdAt.toIOString(),
      user:{
        ...listing.user,
        createdAt: listing.user.createdAt.toIOString(),
        createdAt: listing.user.createdAt.toIOString(),
        emailVerified:
          listing.user.emailVerified?.toIOString()||null,
      }
    };
  }catch(erorr:any){
    throw new Error(error);
  }
}