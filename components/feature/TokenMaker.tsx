"use client";

import React from "react";
import PropsInterface from "@/utils/propsInterface";
import { SetterOrUpdater, useRecoilState } from "recoil";
import TailwindProperties from "@/styles/tailwindProperties";
// @ts-ignore
import { authToken, handleLogin, handleLogout } from "@/libs/auth";

function TokenMaker({ className }: PropsInterface) {
  const [token, setToken]: [null | string, SetterOrUpdater<any>] =
    useRecoilState(authToken);
  const setAtom = (value: string): void => {
    console.log(token);
    return setToken(value);
  };
  const login = async () => {
    console.log(token);
    await handleLogin("user@react.com", "password", setAtom);
  };
  const logout = async () => {
    await handleLogout(setAtom);
  };
  const style: TailwindProperties = {
    sm: "sm:flex sm:items-center",
    base: "grid",
  };
  return (
    <div className={`${style.sm} ${style.base} ${className}`}>
      <button
        className="p-4 text-xl font-bold bg-neutral-200 shadow"
        onClick={login}
      >
        AUTHENTICATE
      </button>
      <button
        className="p-4 text-xl font-bold bg-neutral-200 shadow"
        onClick={logout}
      >
        LOGOUT
      </button>
      <TokenStatusIndicator />
    </div>
  );
}
export default TokenMaker;

function TokenStatusIndicator({ className }: PropsInterface) {
  const [token, setToken]: [null | string, any] = useRecoilState(authToken);
  return (
    <div className={`h-fit w-fit p-2 ${className}`}>
      <h1 className="text-xl">{token}</h1>
    </div>
  );
}
