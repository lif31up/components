import React from "react";
import TailwindProperties from "@/styles/tailwindProperties";

function SegmentDisplay({}) {
  const style: TailwindProperties = {
    xl: "xl:justify-between xl:items-center xl:px-16",
    base: "flex bg-neutral-50 border-y border-neutral-300 py-1",
  };
  return (
    <div
      className={`${style.xl} ${style.lg} ${style.sm} ${style.md} ${style.mb} ${style.base}`}
    >
      <h1 className="text-base font-medium text-neutral-600">
        요소 라이브러리 / 로그인
      </h1>
      <h2 className="text-xs font-bold text-neutral-900 tracking-wider">
        ⊕ 한국어
      </h2>
    </div>
  );
}
export default SegmentDisplay;
