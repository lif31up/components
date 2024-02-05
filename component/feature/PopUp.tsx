import React, { ReactPortal } from "react";
import ReactDOM from "react-dom";
import Default from "@/util/interface";
import TailwindProperties from "@/util/tailwindProperties";

interface PopUp extends Default {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
function PopUp({
  isOpen,
  onClose,
  className,
  children,
}: PopUp): ReactPortal | null {
  const style: TailwindProperties = {
    sm: "",
    base: "w-screen h-screen grid justify-items-center items-center fixed top-0 left-0 z-50 bg-neutral-500",
  };
  return isOpen
    ? ReactDOM.createPortal(
        <section className={`${style.sm} ${style.base} ${className}`}>
          <div className="w-fit h-fit p-4 bg-white">
            {children}
            <button
              onClick={onClose}
              className="w-fit h-fit p-4 text-base font-bold bg-neutral-200 shadow mt-8"
            >
              닫기
            </button>
          </div>
        </section>,
        document.body
      )
    : null;
}

export default PopUp;
