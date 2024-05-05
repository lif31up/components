import React from "react";
import TailwindProperties from "@/styles/tailwindProperties";
import Default from "@/utils/propsInterface";

interface Notification extends Default {
  children: string;
}
function Notification({ className, children }: Notification) {
  const style: TailwindProperties = {
    xl: "xl:py-4 xl:px-8",
    base: "bg-sky-50 rounded border",
  };
  return (
    <div className={`${style.xl} ${style.mb} ${style.base} ${className}`}>
      <div className="flex items-center">
        <p className="text-xl  mr-4">💡</p>
        <p className="text-base font-normal text-sky-800  mt-1">{children}</p>
      </div>
    </div>
  );
}
export default Notification;
