import React from "react";
import Default from "@/util/interface";
import TailwindProperties from "@/util/tailwindProperties";

function Navigator({ className, id }: Default) {
  const style: TailwindProperties = {
    base: "absolute",
  };
  return (
    <section id={id} className={`${style.base} ${className}`}>
      <div className="w-full h-16 fixed top-0 left-0 z-40 bg-neutral-200">
        <h1>Navigator.tsx</h1>
        <p>HELLO</p>
      </div>
      <div className={"h-16"} />
    </section>
  );
}
export default Navigator;
