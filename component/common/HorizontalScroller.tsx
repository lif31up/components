import React from "react";
import TailwindProperties from "@/util/tailwindProperties";
import Default from "@/util/interface";

interface HorizontalScroller extends Default {
  children: Array<React.ReactNode>;
}
function HorizontalScroller({
  className,
  children,
}: HorizontalScroller): React.JSX.Element {
  const style: TailwindProperties = {
    sm: "w-screen overflow-hidden",
    base: "",
  };
  return (
    <div className={`${style.sm} ${style.base} ${className} snap-x`}>
      <div className="overflow-x-auto whitespace-nowrap snap">
        {children.map(
          (element: React.ReactNode, index: number): React.ReactNode => {
            return <Item key={index}>{element}</Item>;
          }
        )}
      </div>
    </div>
  );
}
export default HorizontalScroller;

function Item({ children }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: "",
    base: "inline-block mx-8 min-w-96 min-h-96",
  };
  return (
    <div className={`${style.sm} ${style.base} snap-start`}>{children}</div>
  );
}
