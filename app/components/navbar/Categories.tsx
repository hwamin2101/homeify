'use client'

import Container from "../Container";
import {TbBeach, TbMountain, TbPool} from 'react-icons/tb';
import {GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill} from 'react-icons/gi';
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: 'Beach',
    displayLabel: 'Bãi Biển',
    icon: TbBeach,
    description: 'Nơi nghỉ gần bãi biển'
  },
  {
    label: 'Windmills',
    displayLabel: 'Cối Xay Gió',
    icon: GiWindmill,
    description: 'Nơi nghỉ có cối xay gió'
  },
  {
    label: 'Modern',
    displayLabel: 'Hiện Đại',
    icon: MdOutlineVilla,
    description: 'Nơi nghỉ hiện đại'
  },
  {
    label: 'Countryside',
    displayLabel: 'Nông Thôn',
    icon: TbMountain,
    description: 'Nơi nghỉ ở nông thôn'
  },
  {
    label: 'Pools',
    displayLabel: 'Hồ Bơi',
    icon: TbPool,
    description: 'Nơi nghỉ có hồ bơi'
  },
  {
    label: 'Island',
    displayLabel: 'Đảo',
    icon: GiIsland,
    description: 'Nơi nghỉ trên đảo'
  },
  {
    label: 'Lake',
    displayLabel: 'Hồ',
    icon: GiBoatFishing,
    description: 'Nơi nghỉ gần hồ'
  },
  {
    label: 'Skiing',
    displayLabel: 'Trượt Tuyết',
    icon: FaSkiing,
    description: 'Nơi nghỉ có hoạt động trượt tuyết'
  },
  {
    label: 'Castle',
    displayLabel: 'Lâu Đài',
    icon: GiCastle,
    description: 'Nơi nghỉ trong lâu đài'
  },
  {
    label: 'Camping',
    displayLabel: 'Cắm Trại',
    icon: GiForestCamp,
    description: 'Nơi nghỉ có hoạt động cắm trại'
  },
  {
    label: 'Arctic',
    displayLabel: 'Bắc Cực',
    icon: BsSnow,
    description: 'Nơi nghỉ gần Bắc Cực'
  },
  {
    label: 'Cave',
    displayLabel: 'Hang Động',
    icon: GiCaveEntrance,
    description: 'Nơi nghỉ trong hang động'
  },
  {
    label: 'Desert',
    displayLabel: 'Sa Mạc',
    icon: GiCactus,
    description: 'Nơi nghỉ trong sa mạc'
  },
  {
    label: 'Barns',
    displayLabel: 'Nhà Kho',
    icon: GiBarn,
    description: 'Nơi nghỉ trong nhà kho'
  },
  {
    label: 'Lux',
    displayLabel: 'Sang Trọng',
    icon: IoDiamond,
    description: 'Nơi nghỉ sang trọng'
  },
];

export const categoryTranslations = {
  Beach: 'Bãi Biển',
  Windmills: 'Cối Xay Gió',
  Modern: 'Hiện Đại',
  Countryside: 'Nông Thôn',
  Pools: 'Hồ Bơi',
  Island: 'Đảo',
  Lake: 'Ven hồ',
  Skiing: 'Trượt Tuyết',
  Castle: 'Lâu Đài',
  Camping: 'Cắm Trại',
  Arctic: 'Vùng Bắc Cực',
  Cave: 'Hang Động',
  Desert: 'Sa Mạc',
  Barns: 'Nhà kho',
  Lux: 'Sang Trọng'
};

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathName = usePathname();

  const isMainPage = pathName ==='/';
  if(!isMainPage){
    return null;
  }

  return ( 
    <Container>
      <div
      className="
      pt-4
      flex
      flex-row
      items-center
      justify-between
      overflow-x-auto
      "
      >
        {categories.map((item)=>(
          <CategoryBox
          key={item.label}
          label={item.label}
          displayLabel={item.displayLabel} // Truyền tên tiếng Việt
          selected={category === item.label}
          icon={item.icon}        
             />
        ))}
        
      </div>
    </Container>
   );
}
// 28/09/2024 3:11:34 
 
export default Categories;