"use client";

import React, { useEffect } from "react";
import Default from "@/utils/interface";
import TailwindProperties from "@/utils/tailwindProperties";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { authToken } from "@/libs/auth";

function Navigator({ className }: Default) {
  const [token, setToken]: [null | string, SetterOrUpdater<any>] =
    useRecoilState(authToken);
  const id: string = "top-bar";
  useEffect((): void => {
    const target: HTMLElement | null = document.getElementById(id);
    if (!target) return;
    target.style.transition = "0.5s ease-in-out";
    window.addEventListener("scroll", (): void => {
      if (window.scrollY > 1) {
        target.style.height = "3.75rem";
      } else {
        target.style.height = "4rem";
      }
    });
  }, []);
  const style: TailwindProperties = {
    md: "",
    base: "fixed top-0 left-0 bg-neutral-100 w-full h-16 flex items-center justify-center shadow",
  };
  return (
    <>
      <div className={`${style.sm} ${style.base} ${className}`} id={id}>
        <h1 className="text-xl font-bold">{token}</h1>
      </div>
    </>
  );
}
export default Navigator;
