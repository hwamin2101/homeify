"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import React, { useState, useCallback } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import useRentModal from "@/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface userMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<userMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const RegisterModal = useRegisterModal();
  const LoginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return LoginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, LoginModal, rentModal]);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
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
          Cho thuê chỗ ở qua Homeify
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
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
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
                <MenuItem onClick={() => router.push("/trips")} label="Chuyến đi" />
                <MenuItem onClick={() => router.push("/favorites")} label="Yêu thích" />
                <MenuItem onClick={() => router.push("/reservations")} label="Đặt chỗ " />
                <MenuItem onClick={() => router.push("/properties")} label="Quản lý nhà/phòng cho thuê" />
                <MenuItem onClick={rentModal.onOpen} label="Bắt đầu cho thuê" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Đăng xuất" />
              </>
            ) : (
              <>
                <MenuItem onClick={LoginModal.onOpen} label="Đăng nhập" />

                <MenuItem onClick={RegisterModal.onOpen} label="Đăng ký" />
              </>
            )}
          </div>
        </div>
        // 26/09/2024 - 2:28:00 - Social Login
      )}
    </div>
  );
};

export default UserMenu;
