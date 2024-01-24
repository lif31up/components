import React from "react";
import TailwindProperties from "@/util/tailwindProperties";
import Default from "@/util/interface";
import LoginWindow from "@/component/common/LoginWindow";

function LoginSection({ className }: Default) {
  const style: TailwindProperties = {
    sm: "",
    base: "px-24 my-24 grid justify-items-center",
  };
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <LoginWindow />
    </section>
  );
}

export default LoginSection;
