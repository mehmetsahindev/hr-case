import React from "react";
import MapImage from "../assets/svg/map.svg";
import MapShoes from "../assets/img/map-shoes.png";

const Map = () => {
  return (
    <div className="py-[32px] lg:py-[80px] relative flex justify-center bg-amber-900 mt-[-1px]">
      <div className="bg-map h-[717px] w-full relative flex justify-center items-center">
        {/* <img src={MapImage} className="min-w-[1049px]" /> */}
        <div>
          <div className="w-[24px] h-[24px] border-[3px] border-lime-400 rounded-full absolute top-[150px] left-[23%] lg:top-[47%] lg:left-[23%] hidden lg:block"></div>
          <div className="w-[24px] h-[24px] border-[3px] border-lime-400 rounded-full absolute bottom-[17%] left-[32%] lg:bottom-[17%] lg:left-[32%] hidden lg:block"></div>
          <div className="w-[16px] h-[16px] border-[3px] border-lime-400 rounded-full absolute bottom-[25%] left-[36%] lg:bottom-[25%] lg:left-[36%] hidden lg:block"></div>
          <div className="w-[30px] h-[30px] border-[3px] border-lime-400 rounded-full absolute top-[25%] left-[95%] lg:top-[25%] lg:left-[33%] hidden lg:block"></div>
          <div className="w-[25px] h-[25px] border-[3px] border-lime-400 rounded-full absolute bottom-[30%] right-[43%] lg:bottom-[30%] lg:right-[43%] hidden lg:block"></div>
          <div className="w-[16px] h-[16px] border-[3px] border-lime-400 rounded-full absolute bottom-[45%] right-[17%] lg:bottom-[45%] lg:right-[17%] hidden lg:block"></div>
          <div className="w-[16px] h-[16px] border-[3px] border-lime-400 rounded-full absolute top-[10%] left-[40%] lg:top-[10%] lg:left-[40%] hidden lg:block"></div>
          <div className="w-[24px] h-[24px] border-[3px] border-lime-400 rounded-full absolute bottom-[42%] right-[25%] lg:bottom-[42%] lg:right-[25%] hidden lg:block"></div>
          <div className="w-[24px] h-[24px] border-[3px] border-lime-400 rounded-full absolute bottom-[20%] right-[20%] lg:bottom-[20%] lg:right-[15%] hidden lg:block"></div>
        </div>
        <div className="absolute text-center flex flex-col gap-[8px]">
          <h1 className="font-[800] text-[48px]/[52.8px] lg:text-[96px]/[105.6px] text-amber-50">11,658,467</h1>
          <h2 className="font-[800] text-[32px]/[35.2px] lg:text-[56px]/[61.6px] text-amber-50">Shoes Collected</h2>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] top-[0%] lg:left-[8%] lg:translate-x-0 flex flex-col items-center">
          <img src={MapShoes} className="w-[266px] rounded-[10px] shadow-custom-1 relative z-30" />
          <div className="w-[250px] bg-blue-gray-200 rounded-[5px] shadow-custom-2 mt-[-3px] relative z-20 before:content-[''] before:absolute before:block before:w-[12px] before:h-[12px] before:bg-blue-gray-200 before:rotate-45 before:bottom-[-6px] before:left-[50%] before:translate-x-[-50%] before:z-10">
            <div className="px-[16px] pt-[16px] pb-[8px]">
              <p className="text-[14px]/[19.6px]">
                Emma Simpson collected one pair of <span className="font-[500] text-[14px]/[15.4px]">Cool Shoes</span>.
              </p>
            </div>
          </div>
          <div className="w-[32px] h-[32px] border-[3px] border-lime-400 rounded-full bg-lime-200 mt-[-10px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Map;
