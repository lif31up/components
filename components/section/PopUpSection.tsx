"use client";

import React, { useState } from "react";
import PropsInterface from "@/utils/propsInterface";
import Heading from "@/components/common/Heading";
import { section } from "@/styles/common";
import TailwindProperties from "@/styles/tailwindProperties";
import PopUp from "@/components/feature/PopUp";

function LoginSection({ className }: PropsInterface) {
  const [isOpen, setIsOpen] = useState(false);
  const closePopUp = () => setIsOpen(false);
  const openPopUp = () => setIsOpen(true);
  const component: TailwindProperties = {
    xl: "xl:w-full xl:h-fit xl:flex xl:justify-center xl:items-center  xl:my-8",
    base: "p-8 rounded border border-neutral-300 -outline-offset-8 outline outline-1",
  };
  return (
    <section className={`${section.xl} ${section.base} ${className}`}>
      <Heading
        data={{
          filename: "PopUp.tsx",
          title: "팝업 창",
          description:
            "팝업 창은 많은 웹 사이트에서 채용된 사용자 인터페이스입니다. 리액트에서는 이를 ReactDOM.Portal로 구현할 수 있으며 이에는 주된 노드 트리와 분리하여 다룰 수 있다는 장점이 있습니다.",
        }}
      />
      <div className={`${component.xl} ${component.base}`}>
        <button className="px-4 py-2 bg-neutral-300 shadow" onClick={openPopUp}>
          클릭하기
        </button>
        <PopUp isOpen={isOpen} onClose={closePopUp}>
          <h1>닫기 버튼을 눌러서 팝업을 닫으세요.</h1>
        </PopUp>
      </div>
    </section>
  );
}

export default LoginSection;
