import React from "react";
import ScrollerSection from "@/components/section/ScrollerSection";
import LoginSection from "@/components/section/LoginSection";
import PopUpSection from "@/components/section/PopUpSection";
import TokenSection from "@/components/section/TokenSection";

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
