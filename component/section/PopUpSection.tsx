"use client";

import React, { useState } from "react";
import PopUp from "@/component/feature/PopUp";
import Heading from "@/component/common/Heading";
import Default from "@/util/interface";
import TailwindProperties from "@/util/tailwindProperties";

function PopUpSection({ className }: Default) {
  const [isPopUp, setIsPupUp] = useState(true);
  const closePopUp = () => setIsPupUp(false);
  const style: TailwindProperties = {
    sm: "sm:w-full sm:px-80 sm:py-6",
    base: "w-full px-6 py-2",
  };
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <PopUp
        isOpen={isPopUp}
        onClose={closePopUp}
        className="w-full h-16 bg-neutral-500 py-2 text-base text-white font-bold fixed top-0 left-0 z-50"
      >
        <h1>PopUp.tsx</h1>
        <p>
          리액트돔 포탈을 이용해서 팝업을 구현했습니다. 눌러서 제거할 수
          있습니다.
        </p>
      </PopUp>
      <div className="h-16 w-full" />
    </section>
  );
}
export default PopUpSection;
