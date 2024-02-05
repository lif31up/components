"use client";

import React, { useState } from "react";
import PopUp from "@/component/feature/PopUp";
import Default from "@/util/interface";
import TailwindProperties from "@/util/tailwindProperties";
import Heading from "@/component/common/Heading";

function PopUpSection({ className }: Default) {
  const [isPopUp, setIsPupUp] = useState(false);
  const openPopUp = () => setIsPupUp(true);
  const closePopUp = () => setIsPupUp(false);
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
          리액트돔 포탈을 이용해서 팝업을 구현했습니다. 눌러서 제거할 수
          있습니다.
        </p>
      </PopUp>
    </section>
  );
}
export default PopUpSection;
