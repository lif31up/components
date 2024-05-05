import React from "react";
import NotificationSection from "@/components/section/NotificationSection";
import MainSection from "@/components/section/MainSection";
import LoginSection from "@/components/section/LoginSection";
import ScrollerSection from "@/components/section/ScrollerSection";
import PopUpSection from "@/components/section/PopUpSection";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <div className="h-24" />
      <NotificationSection />
      <MainSection>
        <LoginSection />
        <ScrollerSection />
        <PopUpSection />
      </MainSection>
    </main>
  );
}
