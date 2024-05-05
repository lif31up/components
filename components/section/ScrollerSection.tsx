import React from "react";
import PropsInterface from "@/utils/propsInterface";
import Heading from "@/components/common/Heading";
import { section } from "@/styles/common";
import TailwindProperties from "@/styles/tailwindProperties";
import HorizontalScroller from "@/components/feature/HorizontalScroller";

function LoginSection({ className }: PropsInterface) {
  const component: TailwindProperties = {
    xl: "xl:w-full xl:h-fit xl:flex xl:justify-center xl:items-center  xl:my-8",
    base: "p-8 rounded border border-neutral-300 -outline-offset-8 outline outline-1",
  };
  return (
    <section className={`${section.xl} ${section.base} ${className}`}>
      <Heading
        data={{
          filename: "HorizontalScroller.tsx",
          title: "수평 스크롤러",
          description:
            "수평 스크롤러는 아이템을 수평으로 스크롤할 수 있게 만들어줍니다. 이때, CSS에서 snap을 정의하여 더 나은 스크롤링을 할 수 있도록 구현해두었습니다. 이러한 요소는 모바일에서 사용 빈도가 높기 때문에 직접 자료를 찾아보며 연구해보았습니다.",
        }}
      />
      <div className={`${component.xl} ${component.base}`}>
        <HorizontalScroller>
          <div className="h-12 w-12 bg-black" />
          <div className="h-12 w-12 bg-black" />
          <div className="h-12 w-12 bg-black" />
          <div className="h-12 w-12 bg-black" />
          <div className="h-12 w-12 bg-black" />
          <div className="h-12 w-12 bg-black" />
          <div className="h-12 w-12 bg-black" />
        </HorizontalScroller>
      </div>
    </section>
  );
}

export default LoginSection;
