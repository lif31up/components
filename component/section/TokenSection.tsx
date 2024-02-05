import React from "react";
import Heading from "@/component/common/Heading";
import TailwindProperties from "@/util/tailwindProperties";
import Default from "@/util/interface";
import TokenMaker from "@/component/feature/TokenMaker";

function TokenSection({ className }: Default) {
  const style: TailwindProperties = {
    sm: "sm:w-full sm:px-80 sm:py-6",
    base: "w-full px-6 py-2",
  };
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <Heading
        data={{
          filename: "TokenMaker.tsx",
          title: "토큰 발행기",
          desc: "토큰을 발행하고 안전하게 저장합니다. 그리고 저장한 토큰에 따라서 리액트 요소들이 리렌더링됩니다.",
          href: "https://github.com/lif31up/components",
        }}
      />
      <TokenMaker />
    </section>
  );
}
export default TokenSection;
