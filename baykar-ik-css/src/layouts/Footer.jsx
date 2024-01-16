import React from "react";
import AppStore from "../assets/img/app_store.png";
import GooglePlay from "../assets/img/google_play.png";

import Youtube from "../assets/svg/youtube.svg?react";
import Facebook from "../assets/svg/facebook.svg?react";
import Twitter from "../assets/svg/twitter.svg?react";
import Instagram from "../assets/svg/instagram.svg?react";
import Linkedin from "../assets/svg/linkedin.svg?react";
import World from "../assets/svg/world.svg?react";
import FooterLink from "../components/FooterLink";

const Footer = () => {
  return (
    <div className="section-container !pt-0 !pb-0 bg-blue-gray-900 text-white">
      {/* COLUMNS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 text-center lg:text-start gap-[48px] py-[48px] border-t border-b border-blue-gray-600">
        <div>
          <FooterLink className="text-inherit">Product</FooterLink>
          <div>
            <FooterLink>Pricing</FooterLink>
            <FooterLink>Overview</FooterLink>
            <FooterLink>Browse</FooterLink>
            <FooterLink>Accessibility</FooterLink>
            <FooterLink>Five</FooterLink>
          </div>
        </div>
        <div>
          <FooterLink className="text-inherit">Solutions</FooterLink>
          <div>
            <FooterLink>Brainstorming</FooterLink>
            <FooterLink>Ideation</FooterLink>
            <FooterLink>Wireframing</FooterLink>
            <FooterLink>Research</FooterLink>
            <FooterLink>Design</FooterLink>
          </div>
        </div>
        <div>
          <FooterLink className="text-inherit">Support</FooterLink>
          <div>
            <FooterLink>Contact Us</FooterLink>
            <FooterLink>Developers</FooterLink>
            <FooterLink>Documentation</FooterLink>
            <FooterLink>Integration</FooterLink>
            <FooterLink>Reports</FooterLink>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="py-[12px]">
            <span href="#" className="font-[500] text-[16px]/[17.6px]">
              Get the App
            </span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-[8px]">
            <a href="#">
              <img src={AppStore} alt="" />
            </a>
            <a href="#">
              <img src={GooglePlay} alt="" />
            </a>
            <FooterLink className="!pt-[48px]">Follow Us</FooterLink>
            <div className="flex gap-[16px] text-blue-gray-200">
              <a href="#">
                <Youtube />
              </a>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="py-[48px] lg:py-[24px] flex flex-col lg:flex-row items-center gap-[24px] lg:gap-[48px]">
        <div className="flex-grow text-[16px]/[22.4px] text-blue-gray-200">Collers @ 2023. All rights reserved.</div>
        <div className="flex items-center gap-[32px]">
          <FooterLink>Terms</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Contact</FooterLink>
          <FooterLink>
            <World />
            EN
          </FooterLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
