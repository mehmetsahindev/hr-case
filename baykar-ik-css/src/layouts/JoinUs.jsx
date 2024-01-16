import VideoImg from "../assets/img/Video.png";
import Button from "../components/Button";
import Screen from "../components/Screen";

const JoinUs = () => {
  return (
    <div className="section-container pt-[16px] pb-[56px] lg:pt-[160px] lg:pb-[160px] overflow-hidden">
      <div className="px-[16px] py-[32px] lg:px-[80px] lg:py-[80px] rounded-[30px] bg-white shadow-container">
        <div className="flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[80px]">
          {/* LEFT SIDE */}
          <div className="flex-grow flex flex-col gap-[24px]">
            <h2 className="font-[800] text-[32px]/[35.2px] text-center lg:text-start lg:text-[56px]/[61.6px]">Why join us</h2>
            <ul className="flex flex-col gap-[8px] lg:gap-0">
              <li className="flex items-baseline gap-[8px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -12 24 24" width="24" className="fill-green-700 w-[24px] h-[24px] flex-shrink-0">
                  <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                </svg>
                <span className="text-[16px]/[22.4px] lg:text-[20px]/[36px]">Est et in pharetra magna adipiscing ornare aliquam.</span>
              </li>
              <li className="flex items-baseline gap-[8px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -12 24 24" width="24" className="fill-green-700 w-[24px] h-[24px] flex-shrink-0">
                  <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                </svg>
                <span className="text-[16px]/[22.4px] lg:text-[20px]/[36px]">Tellus arcu sed consequat ac velit ut eu blandit.</span>
              </li>
              <li className="flex items-baseline gap-[8px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -12 24 24" width="24" className="fill-green-700 w-[24px] h-[24px] flex-shrink-0">
                  <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                </svg>
                <span className="text-[16px]/[22.4px] lg:text-[20px]/[36px]">Ullamcorper ornare in et egestas dolor orci.</span>
              </li>
            </ul>
            <div className="flex justify-center lg:justify-start">
              <Button style="outline" type="primary" size="l" text="Sign up now" className="relative z-20" />
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex-grow relative">
            {/* DESKTOP COMPONENT - START */}
            <Screen image={VideoImg} />
            {/* DESKTOP COMPONENT - END */}
            <div className="w-[49px] h-[50px] lg:w-[85px] lg:h-[86px] rounded-[50px] opacity-75 bg-green-700 absolute bottom-[-18.8px] left-[43px] lg:bottom-[-36px] lg:left-[70px] z-40"></div>
            <div className="w-[134.59px] h-[134.59px] lg:w-[218px] lg:h-[218px] rounded-[50px] opacity-75 bg-pink-700 absolute bottom-[-59.39px] right-[-55.31px] lg:bottom-[-109px] lg:right-[-118px] z-20"></div>
            <div className="w-[36.42px] h-[37.04px] lg:w-[59px] lg:h-[60px] rounded-[50px] opacity-75 bg-blue-light-700 absolute top-[-44.31px] right-[31.74px] lg:top-[-88px] lg:right-[23px] z-20"></div>
            <div className="w-[55.56px] h-[55.56px] lg:w-[90px] lg:h-[90px] rounded-[30px] opacity-75 bg-amber-700 absolute top-[25.46px] left-[-21.91px] lg:top-[25px] lg:left-[-20px] z-20"></div>
            <div className="w-[45.69px] h-[45.69px] lg:w-[74px] lg:h-[74px] rounded-[30px] opacity-75 bg-fuchsia-700 absolute bottom-[-19.26px] right-[56.43px] lg:bottom-[-44px] lg:right-[63px] z-10"></div>
            <div className="w-[411.34px] h-[134.55px] lg:w-[666.28px] lg:h-[217.93px] origin-bottom-right -rotate-45 bg-amber-200 absolute top-[-113.0px] right-[1.13px] lg:top-[-200.19px] lg:right-[-30.24px] z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
