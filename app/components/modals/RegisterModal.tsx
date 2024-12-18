"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import { FaBullseye } from "react-icons/fa";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import { sign } from "crypto";
import useLoginModal from "@/hooks/useLoginModal";
const RegisterModal = () => {
  const RegisterModal = useRegisterModal();
  const LoginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data)
      .then(() => {
        toast.success('Thành công!')
        RegisterModal.onClose();
        LoginModal.onOpen();
      })
      .catch((error) => {
        toast.error('Có gì đó không ổn.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const toggle = useCallback(() => {
    RegisterModal.onClose();
    LoginModal.onOpen();
  }, [LoginModal, RegisterModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Chào mừng bạn đến với Homeify" subtitle="Tạo một tài khoản!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Tiếp tục với Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Tiếp tục với Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")} //kieu khong bam vao github de login duoc :)) 2:36:38
      />
      <div
        className="
                    text-neutral-500
                    text-center
                    mt-4
                    font-light
                "
      >
        <div className="justify-center flex flex-row items-center gap-2">
          <div>Bạn đã có tài khoản?</div>
          <div
            onClick={toggle}
            className="
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        "
          >
           Đăng nhập
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={RegisterModal.isOpen}
      title="Đăng ký"
      actionLabel="Tiếp tục"
      onClose={RegisterModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
