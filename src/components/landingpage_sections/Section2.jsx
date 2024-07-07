import React from "react";
import Logo from "../../assets/clients_logos/Logo.svg";
import Logo1 from "../../assets/clients_logos/Logo1.svg";
import Logo2 from "../../assets/clients_logos/Logo2.svg";
import Logo3 from "../../assets/clients_logos/Logo3.svg";
import Logo4 from "../../assets/clients_logos/Logo4.svg";
import Logo5 from "../../assets/clients_logos/Logo5.svg";
import Logo6 from "../../assets/clients_logos/Logo6.svg";
import Icon from "../../assets/communities/Icon.svg";
import Icon1 from "../../assets/communities/Icon1.svg";
import Icon2 from "../../assets/communities/Icon2.svg";
import vector from "../../assets/communities/vector.svg";

function Section2() {
  return (
    <div className="flex mt-2 gap-5 flex-col items-center ">
      <h2 className="text-4xl text-[var(--secondary-color)] ">Our Clients</h2>
      <p className="text-lg text-[var(--subheading-color)]">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="clients-container">
        <div className="clients w-[90%] my-4 flex justify-around items-center">
          <img src={Logo} alt="Logo" />
          <img src={Logo1} alt="Logo1" />
          <img src={Logo2} alt="Logo2" />
          <img src={Logo3} alt="Logo3" />
          <img src={Logo4} alt="Logo4" />
          <img src={Logo5} alt="Logo5" />
          <img src={Logo6} alt="Logo6" />
        </div>
      </div>
      <div className="flex flex-col mt-3 justify-center items-center ">
        <h2 className="text-4xl text-[var(--secondary-color)] ">
          Manage your entire community
        </h2>
        <h2 className="text-4xl text-[var(--secondary-color)] ">
          {" "}
          in a single system
        </h2>
        <p
          className="mt-1 text-lg
         text-[var(--subheading-color)] border-b p-2 border-[#e8f5e9] w-[80%] flex justify-center"
        >
          What is Nexcent suitable of?
        </p>

        <div className="flex flex-wrap gap-3 justify-center items-center mt-4">
          <div className="m-1 w-1/3 flex  justify-between items-center flex-col">
            <img src={Icon} alt="" />
            <h3 className="text-[var(--secondary-color)] text-3xl">
              Membership
            </h3>
            <h3 className="text-[var(--secondary-color)] text-3xl">
              Organisation
            </h3>
            <p className=" text-center text-[var(--subheading-color)] text-lg mt-1">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="m-1 w-1/3 flex justify-between items-center flex-col">
            <img src={Icon1} alt="" />
            <h3 className="text-[var(--secondary-color)] text-3xl">National</h3>
            <h3 className="text-[var(--secondary-color)] text-3xl">
              Associations
            </h3>
            <p className="text-[var(--subheading-color)] text-center text-lg mt-1">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="m-1 w-1/3 flex justify-between items-center flex-col">
            <img src={Icon2} alt="" />
            <h3 className="text-[var(--secondary-color)] text-3xl">
              Clubs And
            </h3>
            <h3 className="text-[var(--secondary-color)] text-3xl">Groups</h3>
            <p className="text-center text-[var(--subheading-color)] text-lg mt-1">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <img className="w-[50%]" src={vector} alt="" />
        <div className="flex flex-col justify-center items-start w-[60%]">
          <h2 className="text-4xl text-[var(--secondary-color)] font-bold ">
            The unseen of spending three years<br></br> at Pixelgrade
          </h2>
          <p className="text-lg text-[var(--subheading-color)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="p-3 shadow-sm hover:scale-95 shadow-slate-800 hover:bg-[var(--primary-color-hover)] mt-5 w-[150px] text-white bg-[var(--primary-color)] rounded-md  ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
