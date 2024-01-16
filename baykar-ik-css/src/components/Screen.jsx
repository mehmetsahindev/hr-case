import React from "react";

const Screen = ({ image }) => {
  return (
    <div className="rounded-[20px] border-[5px] border-white bg-white shadow-desktop relative z-30">
      <div className="px-[16px] py-[8px]">
        <div className="flex gap-[5px] mb-[5px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="10" className="fill-rose-600">
            <path d="M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="10" className="fill-amber-400">
            <path d="M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="10" className="fill-green-500">
            <path d="M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"></path>
          </svg>
        </div>
      </div>
      <div>
        <img src={image} className="rounded-b-[15px] w-full" />
      </div>
    </div>
  );
};

export default Screen;
