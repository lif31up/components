import React from "react";
import PropsInterface from "@/utils/propsInterface";
import TailwindProperties from "@/styles/tailwindProperties";
interface Data {
  filename: string;
  title: string;
  desc: string;
  href: string;
}
interface Heading extends PropsInterface {
  data: Data;
}
function Heading({ className, data }: Heading) {
  const { filename, title, desc, href }: Data = data;
  const style: TailwindProperties = {
    sm: "sm:my-16 p-4",
    base: "bg-neutral-100 shadow relative",
  };
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <h2 className="text-sm font-bold text-neutral-400 tracking-wider">
        {filename}
      </h2>
      <h1 className="text-3xl font-bold text-gray-800 mt-8">{title}</h1>
      <p className="text-sm font-medium text-neutral-500 mt-2">{desc}</p>
      <a href={href} className="sm:absolute sm:top-0 sm:right-0">
        <h1 className="w-fit py-4 px-4 text-white font-bold bg-green-400 rounded-2xl shadow sm:m-4 mt-8">
          리포지토리로 이동
        </h1>
      </a>
    </section>
  );
}
export default Heading;
