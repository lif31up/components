import React from "react";
import ScrollerSection from "@/component/section/ScrollerSection";
import LoginSection from "@/component/section/LoginSection";
import PopUpSection from "@/component/section/PopUpSection";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <PopUpSection />
      <ScrollerSection className="mt-4" />
      <LoginSection className="mt-4" />
    </main>
  );
}
