import React from "react";
import TailwindProperties from "@/styles/tailwindProperties";
import Link from "next/link";
import SegmentDisplay from "@/components/feature/SegmentDisplay";

function TopBar({}) {
  const style: TailwindProperties = {
    xl: "xl:flex xl:justify-between xl:items-center  xl:px-16",
    base: "w-full h-16",
  };
  return (
    <section className="w-full h-fit fixed top-0 left-0 bg-white">
      <div className={`${style.xl} ${style.base}`}>
        <div title="left" className="flex">
          <div className="flex-wrap w-fit">
            <h1 className="text-sm text-neutral-900  mt-1">
              Component Library
            </h1>
          </div>
          <div className="flex-wrap w-fit flex items-center gap-8  pl-8  text-neutral-700">
            <Link className="text-neutral-400" href="#">
              Home
            </Link>
            <Link href="#">Login</Link>
            <Link href="#">Token</Link>
            <Link href="#">Scroller</Link>
            <Link href="#">Music</Link>
          </div>
        </div>
        <div title="right" className="flex">
          <button className="font-normal text-neutral-700 mx-4">MAIL</button>
          <button className="py-1 px-4 font-normal text-white text-base bg-black rounded">
            Go to the Repository
          </button>
        </div>
      </div>
      <SegmentDisplay />
    </section>
  );
}
export default TopBar;
