import React, { useState } from "react";
import logo from "../assets/navbar-icon.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#F5F7FA] mt-1 w-full h-[10vh] flex justify-between md:justify-evenly items-center p-2">
      <div className="Company flex gap-1 justify-center items-center">
        <img src={logo} alt="Your SVG" />
        <h1 className="text-xl font-bold ">Nexcent</h1>
      </div>
      <div className="links hidden md:block">
        <ul
          type="none"
          className="flex gap-10 text-xl justify-center items-center"
        >
          <li>
            <a
              className="hover:border-b hover:border-[var(--primary-color)] "
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:border-b hover:border-[var(--primary-color)] "
              href="#"
            >
              Service
            </a>
          </li>
          <li>
            <a
              className="hover:border-b hover:border-[var(--primary-color)] "
              href="#"
            >
              Feature
            </a>
          </li>
          <li>
            <a
              className="hover:border-b hover:border-[var(--primary-color)] "
              href="#"
            >
              Product
            </a>
          </li>
          <li>
            <a
              className="hover:border-b hover:border-[var(--primary-color)] "
              href="#"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              className="hover:border-b hover:border-[var(--primary-color)] "
              href="#"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-1 justify-center items-center ">
        <button className=" font-semibold text-[var(--primary-color)] hover:border-[var(--primary-color)] hover:border p-2 rounded-md ">
          Login
        </button>
        <button className="p-2 shadow-sm hover:scale-95 shadow-slate-800 hover:bg-[var(--primary-color-hover)]  text-white bg-[var(--primary-color)] rounded-md  ">
          Signup
        </button>
        <div className="mobile-menu">
          <button
            onClick={() => setOpen(!open)}
            className="hamburger ms-4 hover:scale-125 transition-all"
          >
            {open && <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>}

            {!open && <svg
              className="w-6 h-6 block md:hidden cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>}
          </button>
          <div
            id="menu"
            className={`${
              !open && "hidden"
            } absolute h-max bg-black/35 md:flex md:items-center right-3 pe-3`}
          >
            <ul
              type="none"
              className="flex flex-col gap-2 ps-4 py-3 text-white md:hidden"
            >
              <li>
                <a className="hover:border-b hover:border-text-white " href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:border-b hover:border-text-white " href="#">
                  Service
                </a>
              </li>
              <li>
                <a className="hover:border-b hover:border-text-white " href="#">
                  Feature
                </a>
              </li>
              <li>
                <a className="hover:border-b hover:border-text-white " href="#">
                  Product
                </a>
              </li>
              <li>
                <a className="hover:border-b hover:border-text-white " href="#">
                  Testimonial
                </a>
              </li>
              <li>
                <a className="hover:border-b hover:border-text-white " href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
