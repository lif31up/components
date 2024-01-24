import React from "react";
import HorizontalScroller from "@/component/common/HorizontalScroller";
import Default from "@/util/interface";
import Link from "next/link";

function ScrollerSection({ className }: Default): React.JSX.Element {
  return (
    <section className={`${className} grid justify-items-center`}>
      <header className="my-20 w-3/4 bg-white px-8 py-12 rounded-2xl shadow">
        <h2 className="text-sm font-extrabold text-neutral-500 tracking-widest">
          HorizontalScroller.tsx
        </h2>
        <h1 className="text-2xl font-bold text-gray-800 select-none">
          수평으로 스크롤되며 snap이 적용된 스크롤러를 만들었습니다.
        </h1>
        <p className="text-base text-neutral-600 mt-2 mb-12">
          snap-align, align-start 특성이 정의되었습니다.
        </p>
        <Link
          href="https://github.com/lif31up/components"
          className="px-4 py-4 bg-emerald-300 rounded text-white font-bold"
        >
          코드를 확인하세요
        </Link>
      </header>
      <HorizontalScroller>
        <div className="bg-black w-96 h-96" />
        <div className="bg-black w-96 h-96" />
        <div className="bg-black w-96 h-96" />
        <div className="bg-black w-96 h-96" />
        <div className="bg-black w-96 h-96" />
        <div className="bg-black w-96 h-96" />
        <div className="bg-black w-96 h-96" />
        <div className="bg-black w-96 h-96" />
        <div className="bg-black w-96 h-96" />
        <div className="bg-black w-96 h-96" />
        <div className="bg-black w-96 h-96" />
        <div className="bg-black w-96 h-96" />
      </HorizontalScroller>
    </section>
  );
}
export default ScrollerSection;
