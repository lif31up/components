import React from "react";
import Default from "@/utils/interface";
import LoginWindow from "@/component/feature/LoginWindow";
import Heading from "@/component/common/Heading";
import { heading } from "@/styles/common";

function LoginSection({ className }: Default) {
  return (
    <section
      className={`${heading.xl} ${heading.lg} ${heading.md} ${heading.sm} ${heading.base} ${className}`}
    >
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
