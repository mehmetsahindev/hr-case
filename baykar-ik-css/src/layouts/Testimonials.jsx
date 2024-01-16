import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "iconoir-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../components/TestimonialCard";

import Logo_1 from "../assets/img/Logo_1.svg";
import Logo_2 from "../assets/img/Logo_2.svg";
import Logo_3 from "../assets/img/Logo_3.svg";
import Logo_4 from "../assets/img/Logo_4.svg";
import User_1 from "../assets/img/User_1.png";
import User_2 from "../assets/img/User_2.png";
import User_3 from "../assets/img/User_3.png";
import User_4 from "../assets/img/User_4.png";
import Button from "../components/Button";

const Testimonials = () => {
  let sliderRef = useRef();

  const settings = {
    className: "testimonialsSlider relative z-20",
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1155,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const sliderPrev = () => {
    sliderRef.current.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="flex flex-col gap-[32px] lg:gap-[80px] py-[48px] lg:py-[80px]">
      <div className="section-container w-full flex gap-[48px] !pt-0 !pb-0">
        <div className="flex-grow text-center lg:text-start">
          <h2 className="font-[700] text-[32px]/[32.2px] lg:font-[800] lg:text-[56px]/[61.6px]">
            Because they love us
          </h2>
        </div>
        <div className="flex-shrink-0 hidden lg:flex gap-[24px]">
          <Button
            size="m"
            type="primary"
            style="outline"
            onClick={sliderPrev}
            iconLeft={<ArrowLeft />}
            className="!rounded-full"
          />
          <Button
            size="m"
            type="primary"
            style="outline"
            onClick={sliderNext}
            iconLeft={<ArrowRight />}
            className="!rounded-full"
          />
        </div>
      </div>
      <div className="relative">
        <div className="w-full px-0 lg:px-[40px] absolute top-[-16px] lg:top-[-40px] bottom-[56px] lg:bottom-[80px] z-10">
          <div className="bg-amber-200 h-full"></div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          <TestimonialCard
            companyLogo={Logo_1}
            companyName={"Zoomer"}
            userAvatar={User_1}
            userName={"Hellen Jummy"}
            userTitle={"Team Lead"}
            text={
              "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
            }
          />
          <TestimonialCard
            companyLogo={Logo_2}
            companyName={"SHELLS"}
            userAvatar={User_2}
            userName={"Hellena John"}
            userTitle={"Co-founder"}
            text={
              "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
            }
          />
          <TestimonialCard
            companyLogo={Logo_3}
            companyName={"ArtVenue"}
            userAvatar={User_3}
            userName={"David Oshodi"}
            userTitle={"Manager"}
            text={
              "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed."
            }
          />
          <TestimonialCard
            companyLogo={Logo_4}
            companyName={"WALLMART"}
            userAvatar={User_4}
            userName={"Jane Doe"}
            userTitle={"Developer"}
            text={
              "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque."
            }
          />
          <TestimonialCard
            companyLogo={Logo_1}
            companyName={"Zoomer"}
            userAvatar={User_1}
            userName={"Hellen Jummy"}
            userTitle={"Team Lead"}
            text={
              "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
            }
          />
          <TestimonialCard
            companyLogo={Logo_2}
            companyName={"SHELLS"}
            userAvatar={User_2}
            userName={"Hellena John"}
            userTitle={"Co-founder"}
            text={
              "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
            }
          />
          <TestimonialCard
            companyLogo={Logo_3}
            companyName={"ArtVenue"}
            userAvatar={User_3}
            userName={"David Oshodi"}
            userTitle={"Manager"}
            text={
              "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed."
            }
          />
          <TestimonialCard
            companyLogo={Logo_4}
            companyName={"WALLMART"}
            userAvatar={User_4}
            userName={"Jane Doe"}
            userTitle={"Developer"}
            text={
              "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque."
            }
          />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
