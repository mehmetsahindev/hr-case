import React from "react";
import ProductCard from "../components/ProductCard";
import Product_1 from "../assets/img/Product_1.png";
import Product_2 from "../assets/img/Product_2.png";
import Product_3 from "../assets/img/Product_3.png";
import Button from "../components/Button";

const ShowCase = () => {
  return (
    <div className="bg-blue-gray-900 overflow-hidden">
      <div className="section-container text-white flex flex-col gap-[32px] lg:gap-[80px]">
        <div className="flex flex-col lg:flex-row text-center lg:text-start items-center gap-[32px] lg:gap-[80px]">
          <div className="flex-grow">
            <h2 className="font-[700] text-[32px]/[32.2px] lg:text-[56px]/[61.6px]">The best of the best</h2>
          </div>
          <Button size="xl" style="outline" type="white" text="Sign up now" />
        </div>
        <div className="relative">
          <div>
            <div className="w-[202.09px] h-[202.09px] lg:w-[271px] lg:h-[271px] opacity-75 rounded-[50px] bg-pink-700 absolute z-0 left-[35px] top-[20%] lg:left-[-35px] lg:top-[40%]"></div>
            <div className="w-[120.06px] h-[120.06px] lg:w-[161px] lg:h-[161px] opacity-75 rounded-[50px] bg-blue-light-700 absolute z-0 right-[-16px] left-auto top-[43%] lg:right-auto lg:left-[33%] lg:top-[-31px]"></div>
            <div className="w-[96.95px] h-[96.95px] lg:w-[130px] lg:h-[130px] opacity-75 rounded-[30px] bg-amber-700 absolute z-0 left-[10%] top-[55%] lg:left-[57%] lg:top-[60%]"></div>
            <div className="w-[150.64px] h-[150.64px] lg:w-[202px] lg:h-[202px] opacity-75 rounded-[30px] bg-fuchsia-700 absolute z-0 left-[-16px] top-[71%] lg:left-[77%] lg:top-[63%]"></div>
            <div className="w-[173.01px] h-[173.01px] lg:w-[232px] lg:h-[232px] opacity-75 rounded-[50px] bg-green-700 absolute z-0 right-[3%] left-auto top-[77%] lg:right-auto lg:left-[85%] lg:top-[10%]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[48px] relative z-10">
            <ProductCard image={Product_1} title={"Title"} text={"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."} />
            <ProductCard image={Product_2} title={"Title"} text={"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."} />
            <ProductCard image={Product_3} title={"Title"} text={"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
