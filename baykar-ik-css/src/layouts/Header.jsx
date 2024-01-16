import { MenuScale, NavArrowRight, Xmark } from "iconoir-react";
import Button from "../components/Button";
import { useState } from "react";
import MenuItem from "../components/MenuItem";

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <header className="flex justify-between items-center section-container !py-[16px] lg:!py-[24px]">
      <h5 className=" font-bold text-[32px]/[32.2px] text-amber-900">Collers</h5>
      <div className="hidden lg:flex items-center gap-[16px]">
        <MenuItem>Products</MenuItem>
        <MenuItem>Solutions</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>Resources</MenuItem>
        <MenuItem>Log In</MenuItem>
        <Button style="outline" type="primary" text="Sign up now" />
      </div>
      <div onClick={(e) => setMenuStatus(true)} className="block lg:hidden">
        <MenuScale />
      </div>
      {/* MOBILE MENU */}
      <div
        className={`fixed z-[100] top-0 left-0 bottom-0 right-0 bg-black bg-opacity-20 lg:hidden ${!menuStatus && "hidden"}`}
        onClick={(e) => {
          e.target == e.currentTarget && setMenuStatus(false);
        }}
      >
        <div className={`flex flex-col gap-[12px] h-full w-[300px] bg-white`}>
          <div className="p-[16px] flex justify-between items-center">
            <h5 className=" font-bold text-[32px]/[32.2px] text-amber-900">Collers</h5>
            <div onClick={(e) => setMenuStatus(false)}>
              <Xmark />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] px-[16px] pb-[16px]">
            <MenuItem>Products</MenuItem>
            <MenuItem>Solutions</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Resources</MenuItem>
            <MenuItem>Log In</MenuItem>
            <Button size="m" style="outline" type="primary" text="Sign up now" className="!w-full mt-[12px]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
