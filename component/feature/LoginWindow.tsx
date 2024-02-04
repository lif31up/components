"use client";

import React, { useRef } from "react";
import Default from "@/util/interface";
import TailwindProperties from "@/util/tailwindProperties";
import {
  FieldErrors,
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface UseForm {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: { errors: FieldErrors };
}

interface Form {
  email: string;
  password: string;
}

function LoginWindow({ className }: Default): React.JSX.Element {
  const userData: React.MutableRefObject<Form> = useRef({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: UseForm = useForm();
  const onSubmit = (data: Form | FieldErrors): void => {
    userData.current = data as Form;
    console.log(`email: ${data?.email}\npassword: ${data?.password}`);
  };
  const style: TailwindProperties = {
    sm: "sm:w-80",
    base: "w-full p-6 shadow border bg-white text-black",
  };
  return (
    <form
      className={`${style.sm} ${style.base} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <h1>{"ID: " + userData.current.email}</h1>
        <h2>{"PW: " + userData.current.password}</h2>
      </div>
      <div>
        <label className="inline-block text-xl w-1/5 h-fit">ID: </label>
        <input
          className="border-black border w-4/5"
          type="text"
          autoComplete="off"
          {...register("email", {
            required: "입력하신 아이디는 이메일 형식이 아닙니다.",
          })}
        />
      </div>

      <div className="mt-2">
        <label className="inline-block text-xl w-1/5 h-fit">PW: </label>
        <input
          className="border-black border w-4/5"
          type="password"
          {...register("password", {
            required: "비밀번호는 반드시 9자 이상이어야 합니다.",
          })}
        />
      </div>
      <button className="mt-8 bg-neutral-300 px-6 py-2" type="submit">
        확인
      </button>
    </form>
  );
}
export default LoginWindow;
