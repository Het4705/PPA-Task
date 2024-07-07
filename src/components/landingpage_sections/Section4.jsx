import React from "react";
import vector from "../../assets/section4/pana.svg";

function Section4() {
  return (
    <div className="my-8 flex flex-col gap-3 md:flex-row justify-evenly items-center">
      <img src={vector} alt="image"  />
      <div className="px-10 md:w-[45%] flex flex-col justify-start items-start ">
        <h2 className="text-5xl p-1 text-[var(--secondary-color)]">
          How to design your site footer like we did
        </h2>
        <p className="mt-2 text-lg text-left text-[var(--subheading-color)]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida
        </p>
        <button className="p-3 shadow-sm hover:scale-95 shadow-slate-800 hover:bg-[var(--primary-color-hover)] mt-5 w-[150px] text-white bg-[var(--primary-color)] rounded-md  ">
          Learn More 
        </button>
      </div>
      
    </div>
  );
}

export default Section4;
