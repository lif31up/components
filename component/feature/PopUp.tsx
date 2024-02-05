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
    base: "",
  };
  return isOpen
    ? ReactDOM.createPortal(
        <button
          onClick={onClose}
          className={`${style.sm} ${style.base} ${className}`}
        >
          {children}
        </button>,
        document.body
      )
    : null;
}

export default PopUp;
