import React from "react";
import "../section_css/marketing.css"
import right from "../../assets/section5/Right-arrow.svg";

const Marketing = () => {
  return (
    <div className="marketing p-3 pb-12 flex flex-col justify-center items-center gap-3">
      <h3 className="text-4xl">Caring is new Marketing</h3>
      <p className="text-[var(--subheading-color)] w-[40%] text-center">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div className="cards grid gap-9  lg:grid-cols-3">
        <div className="card">
          <div className="card-content">
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <div className="flex justify-center items-center gap-2">
              <a className="text-[var(--primary-color)] text-lg font-semibold ">
                Read More
              </a>
              <img className="h-6" src={right} alt=""  />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <div className="flex justify-center items-center gap-2">
              <a className="text-[var(--primary-color)] text-lg font-semibold ">
                Read More
              </a>
              <img className="h-6" src={right} alt=""  />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <div className="flex justify-center items-center gap-2">
              <a className="text-[var(--primary-color)] text-lg font-semibold ">
                Read More
              </a>
              <img className="h-6" src={right} alt=""  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
