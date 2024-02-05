import React from "react";
import HorizontalScroller from "@/component/feature/HorizontalScroller";
import Default from "@/utils/interface";
import TailwindProperties from "@/utils/tailwindProperties";
import Heading from "@/component/common/Heading";

function ScrollerSection({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: "sm:w-full sm:px-80 sm:py-6 sm:bg-white",
    base: "w-full px-6 bg-white py-2",
  };
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <Heading
        data={{
          filename: "ScrollerSection.tsx",
          title: "수평 스크롤러",
          desc: "사용자가 좌우로 스크롤할 수 있게 하는 요소입니다.",
          href: "https://github.com/lif31up/components",
        }}
      />
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
