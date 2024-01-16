import React from "react";
import Button from "./Button";

const ProductCard = ({ image, title, text }) => {
  return (
    <div className="rounded-[10px] overflow-hidden border border-blue-gray-900 shadow-card bg-blue-gray-900">
      <img src={image} className="w-full rounded-[4px]" />
      <div className="pt-[32px] pb-0 px-[32px] flex flex-col gap-[16px]">
        <h6 className="font-[700] text-[24px]/[26.4px]">{title}</h6>
        <p className="text-[18px]/[28.8px]">{text}</p>
      </div>
      <div className="p-[32px]">
        <Button
          size="l"
          style="outline"
          type="white"
          className="!w-full"
          text="Buy Now"
          iconLeft={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-3 -4 24 24"
              width="28"
              fill="currentColor"
            >
              <path d="M7 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.962 1.923A.962.962 0 0 1 .962 0h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H6.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L16.5 9.12a1.923 1.923 0 0 1-1.866 1.457H7.122a3.846 3.846 0 0 1-3.755-3.012L2.113 1.923H.962z"></path>
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default ProductCard;
