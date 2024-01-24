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
    sm: "",
    base: "w-fit p-6 shadow border bg-white rounded-2xl",
  };
  return (
    <form
      className={`${style.sm} ${style.base} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <h1>{"email: " + userData.current.email}</h1>
        <h2>{"password: " + userData.current.password}</h2>
      </div>
      <div>
        <label className="text-xl mr-4">Email</label>
        <input
          className="border"
          type="text"
          autoComplete="off"
          {...register("email", {
            required: "Email is required",
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className="mt-2">
        <label className="text-xl mr-4">Password</label>
        <input
          className="border"
          type="password"
          {...register("password", { required: "Password is required" })}
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
