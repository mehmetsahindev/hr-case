import React from "react";

const FooterLink = (props) => {
  const { children, href = "#", className } = props;

  return (
    <div className={`py-[12px] text-blue-gray-200 ${className}`}>
      <a href={href} className="font-[500] text-[16px]/[17.6px] flex items-center gap-[8px]">
        {children}
      </a>
    </div>
  );
};

export default FooterLink;
