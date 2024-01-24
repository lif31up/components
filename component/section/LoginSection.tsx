import React from "react";
import TailwindProperties from "@/util/tailwindProperties";
import Default from "@/util/interface";
import LoginWindow from "@/component/common/LoginWindow";

function LoginSection({ className }: Default) {
  const style: TailwindProperties = {
    sm: "sm:w-full sm:px-80 sm:py-6 sm:bg-neutral-100",
    base: "w-full px-6 py-2 bg-neutral-100",
  };
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <header>
        <h2 className="text-sm font-bold text-neutral-500 mt-8">
          LoginWindow.tsx
        </h2>
        <h1 className="text-5xl font-bold text-gray-800">로그인 창</h1>
        <p className="text-base font-normal text-neutral-800 mt-2">
          로그인 창은 사용자로부터 인증 형식에 맞는 값을 받아 서버에 전송합니다.
        </p>
      </header>
      <div className="grid justify-items-center">
        <LoginWindow className="my-8" />
      </div>
    </section>
  );
}

export default LoginSection;
