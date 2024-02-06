"use client";

import React from "react";
import Heading from "@/component/common/Heading";
import TailwindProperties from "@/utils/tailwindProperties";
import Default from "@/utils/interface";
import TokenMaker from "@/component/feature/TokenMaker";
import { RecoilRoot } from "recoil";
import Navigator from "@/component/common/Navigator";
import { heading } from "@/styles/common";

function TokenSection({ className }: Default) {
  return (
    <RecoilRoot>
      <Navigator />
      <section
        className={`${heading.xl} ${heading.lg} ${heading.md} ${heading.sm} ${heading.base} ${className}`}
      >
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
    </RecoilRoot>
  );
}
export default TokenSection;
