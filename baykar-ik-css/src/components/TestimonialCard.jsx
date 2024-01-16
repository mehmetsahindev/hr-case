import React from "react";

const TestimonialCard = ({
  companyLogo,
  companyName,
  userAvatar,
  userName,
  userTitle,
  text,
}) => {
  return (
    <div className="rounded-[20px] border border-blue-gray-200 shadow-testimonial h-full bg-white relative z-50">
      <div className="p-[24px] lg:p-[32px] flex flex-col gap-[8px] lg:gap-[16px] h-full">
        {/* ICON */}
        <div className="px-0 py-[16px]">
          <div className="flex items-center gap-[8px]">
            <img src={companyLogo} height={32} />
            <h6 className="font-[700] text-[24px]/[26.4px] text-blue-gray-600">
              {companyName}
            </h6>
          </div>
        </div>
        {/* TEXT */}
        <div className="flex-grow">
          <p className="text-[16px]/[22.4px] lg:text-[24px]/[38.4px] text-black">
            {text}
          </p>
        </div>
        {/* USER CARD */}
        <div className="pt-[16px] flex items-center gap-[16px]">
          <img
            src={userAvatar}
            className="w-[64px] h-[64px] rounded-[100px]"
            width={64}
            height={64}
          />
          <div>
            <p className="text-black text-[18px]/[28.8px]">{userName}</p>
            <p className="text-blue-gray-600 text-[16px]/[22.4px]">
              {userTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
