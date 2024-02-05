"use client";

import React from "react";
import Default from "@/utils/interface";
import TailwindProperties from "@/utils/tailwindProperties";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { authToken } from "@/libs/auth";

function Navigator({ className, id }: Default) {
  const [token, setToken]: [null | string, SetterOrUpdater<any>] =
    useRecoilState(authToken);
  const style: TailwindProperties = {
    base: "absolute",
  };
  return (
    <section id={id} className={`${style.base} ${className}`}>
      <div className="w-full h-16 px-8 fixed top-0 left-0 z-40 bg-neutral-200">
        <h1 className="text-xl font-bold">{token}</h1>
      </div>
      <div className={"h-16"} />
    </section>
  );
}
export default Navigator;
