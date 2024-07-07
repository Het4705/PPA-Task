import React from "react";
import icon1 from "../../assets/Stats/Icon.png";
import icon2 from "../../assets/Stats/Vector-1.svg";
import icon3 from "../../assets/Stats/Vector-2.svg";
import icon4 from "../../assets/Stats/Vector.svg";
import CountUp from "react-countup";

function Section3() {
  const formatNumber = (n) => {
    return Intl.NumberFormat("en-us").format(n);
  }
  return (
    <div className="flex gap-5 flex-col md:flex-row my-5  py-10 justify-around items-center bg-[var(--secondary-background-color)]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl text-[var(--secondary-color)]">
          Helping a local
        </h2>
        <h2 className="text-4xl text-[var(--primary-color)]">
          business reinvent itself
        </h2>
        <p className="text-lg text-[var(--subheading-color)]">
          We reached here with our hard work and dedication
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        
        <div className="flex justify-start items-center gap-3">
          <div>
            <img src={icon4} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-2xl font-bold text-[var(--secondary-color)]">
              <CountUp 
                end={2245341}
                formattingFn={formatNumber}
              />
              
            </p>
            <p className="text-md font-bold text-[var(--subheading-color)]">
              Members
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center gap-3">
          <div>
            <img src={icon1} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-2xl font-bold text-[var(--secondary-color)]">
              <CountUp 
                end={46328}
                formattingFn={formatNumber}
              />
            </p>
            <p className="text-md font-bold text-[var(--subheading-color)]">
              Clubs
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center gap-3">
          <div>
            <img src={icon2} alt="" />
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="text-2xl font-bold text-[var(--secondary-color)]">
            <CountUp 
                end={828867}
                formattingFn={formatNumber}
              />
            </p>
            <p className="text-md font-bold text-[var(--subheading-color)]">
              Event Bookings
            </p>
          </div>
        </div>

        <div className="flex  justify-start items-center gap-3">
          <div>
            <img src={icon3} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-2xl font-bold text-[var(--secondary-color)]">
            <CountUp 
                end={1926436}
                formattingFn={formatNumber}
              />
            </p>
            <p className="text-md font-bold text-[var(--subheading-color)]">
              Payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
