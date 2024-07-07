import React from "react";
import rightWhite from "../../assets/section5/Right-arrow-white.svg";
import logoWhite from "../../assets/navbar-icon-white.svg";
import logo1 from "../../assets/SocialMedia/Path-1.svg";
import logo2 from "../../assets/SocialMedia/Path-2.svg";
import logo3 from "../../assets/SocialMedia/Path-3.svg";
import logo from "../../assets/SocialMedia/Path.svg";
import send from "../../assets/send.svg";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="p-3 py-7 gap-3 flex flex-col justify-around items-center bg-[var(--secondary-background-color)] ">
        <p className="text-4xl font-bold w-full md:w-1/4 text-center">
          Pellentesque suscipit fringilla libero eu.
        </p>
        <button className="flex items-center gap-2 p-2 px-5 text-white bg-[var(--primary-color)] rounded-md hover:bg-[var(--primary-color-hover)] hover:scale-95  ">
          Get a Demo
          <img className="w-5" src={rightWhite} alt="right" />
        </button>
      </div>

      <div className="grid w-full p-5 grid-cols-2 lg:grid-cols-4 gap-7 justify-around bg-[var(--primary-dark-background-color)]">
        <div className="Company flex flex-col  gap-4 justify-start items-start">
          <div className="flex justify-center items-center">
            <img src={logoWhite} alt="Your SVG" />
            <h1 className="text-3xl font-bold text-white">Nexcent</h1>
          </div>

          <p className="text-[#F5F7FA]">Copyright © 2020 Nexcent ltd.</p>
          <p className="text-[#F5F7FA]">All rights reserved</p>
          <div className="flex gap-3   justify-center items-center">
            <div className="bg-slate-600 hover:scale-95 cursor-pointer p-2 rounded-full flex justify-center items-center">
              <img src={logo} alt="" srcset="" />
            </div>
            <div className="bg-slate-600  hover:scale-95 cursor-pointer p-2 rounded-full flex justify-center items-center">
              <img src={logo1} alt="" srcset="" />
            </div>
            <div className="bg-slate-600 hover:scale-95 cursor-pointer  p-2 rounded-full flex justify-center items-center">
              <img src={logo2} alt="" srcset="" />
            </div>
            <div className="bg-slate-600 hover:scale-95 cursor-pointer  p-2 rounded-full flex justify-center items-center">
              <img src={logo3} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <h2 className="text-2xl text-white font-semibold">Company</h2>
          <a
            href="#"
            className="text-lg
               text-[#F5F7FA]
               "
          >
            About us
          </a>
          <a
            href="#"
            className="text-lg
               text-[#F5F7FA]
               "
          >
            Blog
          </a>
          <a
            href="#"
            className="text-lg
               text-[#F5F7FA]
               "
          >
            Contact us
          </a>
          <a
            href="#"
            className="text-lg
               text-[#F5F7FA]
               "
          >
            Testimonials
          </a>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <h2 className="text-2xl text-white font-semibold">Support</h2>
          <a
            href="#"
            className="text-lg
               text-[#F5F7FA]
               "
          >
            Help center
          </a>
          <a
            href="#"
            className="text-lg
               text-[#F5F7FA]
               "
          >
            Terms of service
          </a>
          <a
            href="#"
            className="text-lg
               text-[#F5F7FA]
               "
          >
            Legal
          </a>
          <a
            href="#"
            className="text-lg
               text-[#F5F7FA]
               "
          >
            Status
          </a>
        </div>
        <div className="flex items-center md:block">
          <div className="flex item flex-col gap-3">
            <h2 className="text-2xl text-white font-semibold">Stay up to date</h2>
            <div className="flex  bg-slate-600 p-2 gap-1 rounded-lg w-max">
              <input
                type="text"
                className="bg-transparent"
                placeholder="Your email address"
              />
              <img src={send} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
