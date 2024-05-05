import React from "react";
import PropsInterface from "@/utils/propsInterface";
import Heading from "@/components/common/Heading";
import LoginWindow from "@/components/feature/LoginWindow";
import { section } from "@/styles/common";
import TailwindProperties from "@/styles/tailwindProperties";

function LoginSection({ className }: PropsInterface) {
  const component: TailwindProperties = {
    xl: "xl:w-full xl:h-fit xl:flex xl:my-8",
    base: "p-8 rounded border border-neutral-300 -outline-offset-8 outline outline-1",
  };
  return (
    <section className={`${section.xl} ${section.base} ${className}`}>
      <Heading
        data={{
          filename: "LoginWindow.tsx",
          title: "로그인 창",
          description:
            "로그인은 프론트엔드 개발자가 반드시 개발할 줄 알아야 할 기능입니다. 해당 로그인 요소는 비밀번호, 이메일, 총 두 개의 입력을 받습니다. 각 입력은 서로 다른 패턴을 충분 조건으로 가지고 있습니다. 만약 하나라도 충분 조건을 만족시키지 않을 시 오류를 만들어 사용자에게 알립니다.",
        }}
      />
      <div className={`${component.xl} ${component.base}`}>
        <LoginWindow />
      </div>
    </section>
  );
}

export default LoginSection;
