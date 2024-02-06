import React from "react";
import TailwindProperties from "@/utils/tailwindProperties";
import Default from "@/utils/interface";

interface HorizontalScroller extends Default {
  children: Array<React.ReactNode>;
}
function HorizontalScroller({ className, children }: HorizontalScroller) {
  const style: TailwindProperties = {
    sm: "sm:w-full sm:overflow-hidden",
    base: "w-full overflow-hidden",
  };
  return (
    <div className={`${style.sm} ${style.base} ${className}`}>
      <div className="overflow-x-auto whitespace-nowrap snap-x">
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
    sm: "sm:mx-8",
    base: "inline-block mx-2",
  };
  return (
    <div className={`${style.sm} ${style.base} snap-start`}>{children}</div>
  );
}
