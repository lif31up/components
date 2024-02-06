"use client";

import React from "react";
import Heading from "@/components/common/Heading";
import PropsInterface from "@/utils/propsInterface";
import TokenMaker from "@/components/feature/TokenMaker";
import { RecoilRoot } from "recoil";
import Navigator from "@/components/common/Navigator";
import { heading } from "@/styles/common";

function TokenSection({ className }: PropsInterface) {
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
            desc: "토큰을 발행하고 이를 클라이언트 쿠키와 리코일 아톰에 저장합니다. 따라서 만약 인증에 대한 변화가 생길 때마다 이를 구독하는 요소들을 리렌더링됩니다.",
            href: "https://github.com/lif31up/components",
          }}
        />
        <TokenMaker />
      </section>
    </RecoilRoot>
  );
}
export default TokenSection;
