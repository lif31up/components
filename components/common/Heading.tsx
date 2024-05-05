import React from "react";
import Default from "@/utils/propsInterface";
import TailwindProperties from "@/styles/tailwindProperties";

type Data = {
  filename: string;
  title: string;
  description: string;
};
interface Heading extends Default {
  data: Data;
}
function Heading({ data, className }: Heading) {
  const { filename, title, description }: Data = data;
  return (
    <div
      className={`${heading.xl} ${heading.lg} ${heading.mb} ${heading.sm} ${heading.mb} ${heading.base} ${className}`}
    >
      <div className="flex justify-between items-end">
        <h2 className="text-4xl text-neutral-800 select-none">{title}</h2>
        <h1 className="w-fit h-fit py-2 px-4 text-xs text-right text-red-400 font-bold tracking-wider bg-neutral-100 select-none rounded-2xl border border-neutral-300">
          {filename + ".tsx"}
        </h1>
      </div>
      <p className="text-base text-neutral-700 font-medium  mt-7">
        {description}
      </p>
    </div>
  );
}
export default Heading;

const heading: TailwindProperties = {
  xl: "",
  base: "",
};
