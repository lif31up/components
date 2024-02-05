import React from "react";
import ScrollerSection from "@/component/section/ScrollerSection";
import LoginSection from "@/component/section/LoginSection";
import PopUpSection from "@/component/section/PopUpSection";
import TokenSection from "@/component/section/TokenSection";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <ScrollerSection className="mt-4" />
      <LoginSection className="mt-4" />
      <PopUpSection className="mt-4" />
      <TokenSection className="mt-4" />
    </main>
  );
}
