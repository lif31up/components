"use client";

import React, { useRef } from "react";
import PropsInterface from "@/utils/propsInterface";
import TailwindProperties from "@/styles/tailwindProperties";
import { FieldErrors, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

function LoginWindow({ className }: PropsInterface) {
  const userData: React.MutableRefObject<FormData> = useRef({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData | FieldErrors): void => {
    userData.current = data as FormData;
  };
  const style: TailwindProperties = {
    xl: "xl:flex w-full",
    base: "",
  };
  return (
    <form
      className={`${style.xl} ${style.base} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-1/2 flex-wrap grid p-4 bg-neutral-100 shadow">
        <input
          className="w-full px-2 rounded-2xl border-2"
          type="text"
          autoComplete="off"
          placeholder="아이디를 입력하세요"
          {...register("email", {
            required: "입력하신 아이디는 이메일 형식이 아닙니다.",
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.email && (
          <p className="w-full text-xs text-red-400 mt-2">
            {errors.email.message}
          </p>
        )}
        <input
          className="w-full px-2 rounded-2xl border-2  mt-4"
          type="password"
          autoComplete="off"
          placeholder="비밀번호를 입력하세요"
          {...register("password", {
            required:
              "비밀번호는 하나 이상의 대문자와 숫자로 구성된 여덟 자리여야 합니다.",
            pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
          })}
        />
        {errors.password && (
          <p className="w-auto text-xs text-red-400 mt-2">
            {errors.password.message}
          </p>
        )}
        <button className="mt-8 bg-neutral-300 px-6 py-2" type="submit">
          확인
        </button>
      </div>
      <div className="flex-wrap w-1/2 p-4 grid justify-items-center items-center bg-neutral-200 shadow">
        <h1>{"email: " + userData.current.email}</h1>
        <h1>{"password: " + userData.current.password}</h1>
      </div>
    </form>
  );
}
export default LoginWindow;
