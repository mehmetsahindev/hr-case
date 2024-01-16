import React from "react";

const FeatureBox = ({ image, icon, title, text }) => {
  return (
    <div className="flex flex-col gap-[16px] items-center lg:items-start text-center lg:text-start">
      <div className="relative">
        <img src={image} className="absolute top-0 left-[30px]" />
        {icon}
      </div>
      <p className="font-[500] text-[20px]/[22px]">{title}</p>
      <p className="text-[18px]/[28.8px]">{text}</p>
    </div>
  );
};

export default FeatureBox;
