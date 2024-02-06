"use client";

import React, { useState } from "react";
import PopUp from "@/component/feature/PopUp";
import PropsInterface from "@/utils/propsInterface";
import TailwindProperties from "@/styles/tailwindProperties";
import Heading from "@/component/common/Heading";
import { heading } from "@/styles/common";

function PopUpSection({ className }: PropsInterface) {
  const [isPopUp, setIsPupUp] = useState(false);
  const openPopUp = () => setIsPupUp(true);
  const closePopUp = () => setIsPupUp(false);
  return (
    <section
      className={`${heading.xl} ${heading.lg} ${heading.md} ${heading.sm} ${heading.base} ${className}`}
    >
      <Heading
        data={{
          filename: "PopUp.tsx",
          title: "팝업",
          desc: "리액트돔 포탈을 이용해서 팝업을 구현했습니다. 아래 버튼을 눌러서 확인할 수 있습니다.",
          href: "https://github.com/lif31up/components",
        }}
      />
      <div className="w-full grid justify-items-center items-center">
        <button
          onClick={openPopUp}
          className="w-full h-fit px-4 py-4 text-base bg-neutral-300 shadow"
        >
          팝업 뛰우기
        </button>
      </div>
      <PopUp isOpen={isPopUp} onClose={closePopUp}>
        <h1 className="text-xl font-bold">PopUp.tsx</h1>
        <p>
          리액트돔 포탈을 이용해서 팝업을 구현했습니다. 아래 버튼을 눌러서
          확인할 수 있습니다.
        </p>
      </PopUp>
    </section>
  );
}
export default PopUpSection;
