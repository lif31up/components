import React from "react";
import TailwindProperties from "@/util/tailwindProperties";
import Default from "@/util/interface";
import LoginWindow from "@/component/common/LoginWindow";
import Heading from "@/component/common/Heading";

function LoginSection({ className }: Default) {
  const style: TailwindProperties = {
    sm: "sm:w-full sm:px-80 sm:py-6",
    base: "w-full px-6 py-2",
  };
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <Heading
        data={{
          filename: "LoginWindow.tsx",
          title: "로그인 창",
          desc: "사용자가 로그인 정보를 입력할 수 있게 하는 요소입니다. 리액트 후크 폼을 통해 작성했습니다.",
          href: "https://github.com/lif31up/components",
        }}
      />
      <div className="grid justify-items-center">
        <LoginWindow className="my-8 sm:mt-4" />
      </div>
    </section>
  );
}

export default LoginSection;