"use client";
import {SafeUser} from "@/types";
interface ListingHeadProps{
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}
const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser
  // 04/10/2024 - 6:00:00
}) => {
  return (
    <div>
      Listing Head
    </div>
  );
}
 
export default ListingHead;