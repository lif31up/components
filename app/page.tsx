import React from "react";
import ScrollerSection from "@/component/section/ScrollerSection";
import LoginSection from "@/component/section/LoginSection";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <ScrollerSection className="mt-4" />
      <LoginSection className="mt-4" />
    </main>
  );
}
