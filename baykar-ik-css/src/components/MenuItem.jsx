import React from "react";

const MenuItem = ({ children, href }) => {
  return (
    <div className="px-[8px] py-[12px]">
      <a href={href} className="text-amber-900 text-[16px]/[24px] tracking-[0.5px]">
        {children}
      </a>
    </div>
  );
};

export default MenuItem;
