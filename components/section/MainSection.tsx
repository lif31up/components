import React from "react";
import TailwindProperties from "@/styles/tailwindProperties";
import Default from "@/utils/propsInterface";

interface MainSection extends Default {
  children: React.ReactNode[];
}
function MainSection({ children }: MainSection) {
  const style: TailwindProperties = {
    xl: "xl:w-auto xl:h-fit xl:flex xl:items-start xl:justify-center xl:my-4",
    base: "",
  };
  return (
    <section className={`${style.xl} ${style.base}`}>
      <div className="flex-wrap w-1/5">
        <h1>HELLO</h1>
      </div>
      <div className="flex-wrap w-3/5 grid gap-8">{children}</div>
      <div className="flex-wrap w-2/5 bg-black"></div>
    </section>
  );
}
export default MainSection;
