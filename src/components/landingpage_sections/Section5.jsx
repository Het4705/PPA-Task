import React from "react";
import tesla from "../../assets/tesla.svg";
import logo from "../../assets/section5/Logo.svg";
import logo1 from "../../assets/section5/Logo-1.svg";
import logo2 from "../../assets/section5/Logo-2.svg";
import logo3 from "../../assets/section5/Logo-3.svg";
import logo4 from "../../assets/section5/Logo-4.svg";
import logo5 from "../../assets/section5/Logo-5.svg";
import right from "../../assets/section5/Right-arrow.svg";

function Section5() {
  return (
    <div className="p-3 my-8 gap-10 flex flex-col md:flex-row justify-around items-center bg-[var(--secondary-background-color)] ">
      <img src={tesla} height="10px" alt=""  />

      <div className="flex  flex-col justify-start items-start mt-1 md:w-[50%] px-10 gap-2">
        <p className="text-lg text-left text-[var(--secondary-color)]">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet mag
        </p>
        <h3 className="font-semibold text-2xl text-[var(--primary-color)]">
          Het Patel
        </h3>
        <p className=" text-lg text-left text-[var(--secondary-color)]">
          British Dragon Boat Racing Association{" "}
        </p>
        <div className="flex justify-start items-center gap-5 flex-wrap">
          <img src={logo} alt="company-logo"  />
          <img src={logo1} alt="company-logo"  />
          <img src={logo2} alt="company-logo"  />
          <img src={logo3} alt="company-logo"  />
          <img src={logo4} alt="company-logo"  />
          <img src={logo5} alt="company-logo"  />
          <div className=" flex justify-center items-center gap-2">
            <a className="text-[var(--primary-color)] text-lg font-semibold ">
              Meet All Customers
            </a>
            <img className="h-6" src={right} alt=""  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
