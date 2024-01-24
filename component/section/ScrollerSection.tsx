import React from "react";
import HorizontalScroller from "@/component/common/HorizontalScroller";
import Default from "@/util/interface";
import TailwindProperties from "@/util/tailwindProperties";

function ScrollerSection({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: "sm:w-full sm:px-80 sm:py-6 sm:bg-white",
    base: "w-full px-6 bg-white py-2",
  };
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <header>
        <h2 className="text-sm font-bold text-neutral-500 mt-8">
          HorizontalScroller.tsx
        </h2>
        <h1 className="text-5xl font-bold text-gray-800">수평 스크롤러</h1>
        <p className="text-base font-normal text-neutral-800 mt-2">
          수평 스크롤러는 사용자가 좌우로 원소들을 스크롤할 수 있게 만들어
          줍니다.
        </p>
      </header>
      <HorizontalScroller className="my-8">
        <div className="bg-black w-24 h-24" />
        <div className="bg-black w-24 h-24" />
        <div className="bg-black w-24 h-24" />
        <div className="bg-black w-24 h-24" />
        <div className="bg-black w-24 h-24" />
        <div className="bg-black w-24 h-24" />
        <div className="bg-black w-24 h-24" />
        <div className="bg-black w-24 h-24" />
        <div className="bg-black w-24 h-24" />
        <div className="bg-black w-24 h-24" />
      </HorizontalScroller>
    </section>
  );
}
export default ScrollerSection;
