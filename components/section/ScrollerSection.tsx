import React from "react";
import HorizontalScroller from "@/components/feature/HorizontalScroller";
import PropsInterface from "@/utils/propsInterface";
import TailwindProperties from "@/styles/tailwindProperties";
import Heading from "@/components/common/Heading";
import { heading } from "@/styles/common";

function ScrollerSection({ className }: PropsInterface) {
  return (
    <section
      className={`${heading.xl} ${heading.lg} ${heading.md} ${heading.sm} ${heading.base} ${className}`}
    >
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
