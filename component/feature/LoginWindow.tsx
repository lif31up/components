"use client";

import React, { useRef } from "react";
import Default from "@/util/interface";
import TailwindProperties from "@/util/tailwindProperties";
import { FieldErrors, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

function LoginWindow({ className }: Default): React.JSX.Element {
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
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className="mt-2">
        <label className="inline-block text-xl w-1/5 h-fit">PW: </label>
        <input
          className="border-black border w-4/5"
          type="password"
          autoComplete="off"
          {...register("password", {
            required:
              "비밀번호는 하나 이상의 대문자와 숫자로 구성된 여덟 자리여야 합니다.",
            pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button className="mt-8 bg-neutral-300 px-6 py-2" type="submit">
        확인
      </button>
    </form>
  );
}
export default LoginWindow;
