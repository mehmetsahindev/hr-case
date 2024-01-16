import PexelsPhotobyRayPiedra from "../assets/img/PexelsPhotobyRayPiedra.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="bg-triangle lg:bg-none">
      <div className="flex flex-col lg:flex-row items-center text-center lg:text-start gap-[32px] lg:gap-[80px] section-container">
        <div className="flex-grow space-y-[32px] lg:space-y-[32px]">
          <h1 className="font-[800] text-[56px]/[61.6px] lg:text-[72px]/[79.2px]">
            Collectible Sneakers
          </h1>
          <p className="text-[18px]/[28.8px]">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem
            mauris. Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-[16px]">
            <Button size="l" style="outline" type="primary" text="Sign up now" />
            <Button
              size="m"
              style="link"
              type="primary"
              text="Watch Demo"
              iconLeft={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -2 24 24"
                  width="28"
                  fill="currentColor"
                >
                  <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4.126-6.254l-4.055 2.898c-.905.646-2.13.389-2.737-.576A2.201 2.201 0 0 1 7 12.898V7.102C7 5.942 7.883 5 8.972 5c.391 0 .774.124 1.099.356l4.055 2.898c.905.647 1.146 1.952.54 2.917a2.042 2.042 0 0 1-.54.575zM8.972 7.102v5.796L13.027 10 8.972 7.102z"></path>
                </svg>
              }
            />
          </div>
        </div>
        <div className="w-[361px] h-[314.2px] lg:w-[486px] lg:h-[423px] relative flex items-end justify-center flex-shrink-0">
          <div className="w-[272.61px] h-[276.32px] lg:w-[367px] lg:h-[372px] rounded-[50px] bg-amber-400"></div>
          <img src={PexelsPhotobyRayPiedra} className="absolute top-0 w-[361px] lg:w-[486px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
