import React from "react";
import Notification from "@/components/common/Notification";
import TailwindProperties from "@/styles/tailwindProperties";

function NotificationSection({}) {
  const style: TailwindProperties = {
    xl: "xl:w-auto xl:h-fit xl:mx-20 xl:my-8",
  };
  return (
    <section className={`${style.xl}`}>
      <Notification>새롭게 추가된 요소를 확인해보세요.</Notification>
    </section>
  );
}
export default NotificationSection;
