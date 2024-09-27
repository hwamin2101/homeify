'use client';
import {AiOutlineMenu} from "react-icons/ai";
import Avatar from "../Avatar";
import React, {useState, useCallback} from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";


interface userMenuProps{
  currentUser?: SafeUser | null
}
const UserMenu: React.FC<userMenuProps> = ({
  currentUser
}) => {
  const RegisterModal = useRegisterModal();
  const LoginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(()=>{
    setIsOpen ((value)=>!value);
  },[]);
  return (  
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
      <div
      onClick={()=>{}}
      className="
      hidden
      md:block
      text-sm
      font-semibold
      py-3
      px-4
      rounded-full
      hover:bg-neutral-100
      trasition
      cursor-pointer
      "
      >
        Homeify your home
      </div>
      <div
      onClick={toggleOpen}
      className="
      p-4
      md:py-1
      md:px-2
      border-[1px]
      border-neutral-200
      flex
      flex-row
      items-center
      gap-3
      rounded-full
      cursor-pointer
      hover:shadow-md
      transition
      "
      >
        <AiOutlineMenu/>
        <div className="hidden md:block">
          <Avatar/>
        </div>
        </div>
      </div>

      {isOpen && (
        <div
        className="
        absolute
        rounded-xl
        shadow-md
        w-[40vw]
        md:w-3/4
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm
        "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
               <>
               <MenuItem
               onClick={()=>{}}
               label="My trips"
               />
               <MenuItem
               onClick={()=>{}}
               label="My favorites"
               />
                <MenuItem
               onClick={()=>{}}
               label="My reservation"
               />
                <MenuItem
               onClick={()=>{}}
               label="My properties"
               />
                <MenuItem
               onClick={()=>{}}
               label="Homeify my home"
               />
               <hr/>
               <MenuItem
               onClick={()=> signOut()}
               label="Log out"
               />
             </>
            ):(
          <>
            <MenuItem
            onClick={LoginModal.onOpen}
            label="Login"
            />
         
            <MenuItem
            onClick={RegisterModal.onOpen}
            label="Sign up"
            />
          </>
            )}
          </div>
        </div>
        // 26/09/2024 - 2:28:00 - Social Login 
      )}
    </div>
  );
}
 
export default UserMenu;