import React from "react";
import Button from "../components/Button";
import ArrowRight from "../assets/svg/arrow-right.svg?react";
import Search from "../assets/svg/search.svg?react";
import ShieldCheck from "../assets/svg/shield-check.svg?react";
import Rocket from "../assets/svg/rocket.svg?react";
import Screen from "../assets/svg/screen.svg?react";
import Podcast from "../assets/svg/podcast.svg?react";
import SettingsAlt from "../assets/svg/settings-alt.svg?react";
import ScreenComponent from "../components/Screen.jsx";

import Screen_1 from "../assets/img/Screen_1.png";
import Screen_2 from "../assets/img/Screen_2.png";
import Picture from "../assets/img/Picture.png";

const Features = () => {
  return (
    <div className="section-container !pb-[96px] lg:!pb-[128px] flex flex-col gap-[32px] lg:gap-[80px] bg-waves">
      {/* SECTION TEXT */}
      <div className="flex flex-col gap-[32px] text-center lg:text-start">
        <h2 className="font-[700] lg:font-[800] text-[32px]/[35.2px] lg:text-[56px]/[61.6px]">Grow your collection</h2>
        <p className="text-[16px]/[22.4px] lg:text-[18px]/[28.8px]">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit
          rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      {/* SECTION CONTENT */}
      <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[80px]">
        {/* LEFT SIDE */}
        <div className="flex-shrink-0 flex flex-row no-scrollbar overflow-x-auto mx-[-16px] pl-[16px] pb-[10px] lg:flex-col lg:overflow-x-visible lg:mx-0 lg:pl-0 lg:pb-0 gap-[16px]">
          <Button
            size="l"
            style="filled"
            type="white"
            text="Bibendum tellus"
            iconLeft={<Search />}
            iconRight={<ArrowRight />}
            className="shadow-button"
          />
          <Button size="l" style="filled" type="dark" text="Cras eget" iconLeft={<ShieldCheck />} />
          <Button size="l" style="filled" type="dark" text="Dolor pharetra" iconLeft={<Rocket />} />
          <Button size="l" style="filled" type="dark" text="Amet, fringilla" iconLeft={<Screen />} />
          <Button size="l" style="filled" type="dark" text="Amet nibh" iconLeft={<Podcast />} />
          <Button size="l" style="filled" type="dark" text="Sed velit" iconLeft={<SettingsAlt />} />
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-grow flex-shrink-01 relative w-full lg:w-auto">
          <div className="w-[80%] mb-[15%]">
            <ScreenComponent image={Screen_1} />
          </div>
          <div className="w-[80%] absolute bottom-0 right-[30px] lg:right-[91px]">
            <ScreenComponent image={Screen_2} />
          </div>
          <div className="absolute z-50 right-0 bottom-[12%] w-[25%]">
            <img src={Picture} className="rounded-[16px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
