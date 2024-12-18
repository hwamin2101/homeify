'use client';
import useCountries from "@/hooks/useCountries";
import useSearchModal from "@/hooks/useSearchModal";
import { useSearchParams } from "next/navigation";
import {BiSearch} from "react-icons/bi";
import { useMemo } from 'react';
import { start } from "repl";
import { differenceInDays } from "date-fns";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get('locationValue');
  const startDate = params?.get('startDate');
  const endDate = params?.get('endDate');
  const guestCount = params?.get('guestCountt');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'Địa điểm';
  }, [getByValue, locationValue]);

  const durationLable = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff  = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1
      }

      return `${diff} Ngày`;
    }
    return 'Thời gian'
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Khách`;
    }
    return 'Thêm khách';
  }, [guestCount]);

  return ( 
    <div
    onClick={searchModal.onOpen}
    className ="
    border-[1px]
    w-full
    py-2
    md:w-auto
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointed
    "
    >
      <div
      className="
        flex
        felx-row
        items-center
        justfy-between
      "
      >
        <div
        className="
        text-sm
        font-semibold
        px-6
        "
        >
          {locationLabel}
        </div>
        <div
        className="
        hidden
        sm:block
        text-sm
        font-semibold
        px-6
        border-x-[1px]
        flex-1
        text-center
        "
        >
          {durationLable}
        </div>
        <div
        className="
        text-sm
        pl-6
        pr-2
        text-gray-600
        flex
        flex-row
        items-center
        gap-3
        "
        >
          <div className="hidden sm:block">{guestLabel}</div>
          <div
          className="
          p-2
         bg-customBlue
          rounded-full
          text-white
          "
          >
            <BiSearch size={18}/>
          </div>
        </div>


      </div>
    </div>

   );
}
 
export default Search;