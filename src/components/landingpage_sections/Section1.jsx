import React from "react";
import illustration from "../../assets/illustration.svg"
function Section1() {
  return (
    <div className=" py-10 bg-[#F5F7FA] p-2   w-full gap-2 flex justify-evenly items-center">
      <section
        className="w-full md:w-[45%] px-10
         flex flex-col justify-start items-start gap-1"
      >
        <h2 className="text-5xl md:text-7xl text-[var(--secondary-color)]">Lessons and insights</h2>
        <h2 className="text-5xl md:text-7xl text-[var(--primary-color)]">from 8 years</h2>
        <p className="text-[var(--subheading-color)] text-md md:text-lg mt-3">Where to grow your business as a photographer: site or social media</p>
        
        <button className="p-3 shadow-sm hover:scale-95 shadow-slate-800 hover:bg-[var(--primary-color-hover)] mt-5 w-[150px] text-white bg-[var(--primary-color)] rounded-md  ">
          Register
        </button>
      
      </section>
      <section>
        <img className="hidden md:block" src={
            illustration
        } alt=""  />
      </section>
    </div>
  );
}

export default Section1;
