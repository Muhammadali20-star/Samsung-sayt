import React from "react";
import { LINKS } from "../../static";
import { IoCartOutline, IoPersonOutline  } from "react-icons/io5";
import "./style.css";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  return (
    <header className="mb-100">
      <nav className="container mx-auto flex justify-between h-20 items-center text-white">
        <ul className="flex gap-6 collection">
          {LINKS?.map((link, index) => (
            <li className="text-[#1E1D1D]" key={index}>{link}</li>
          ))}
        </ul>
        <div className="flex items-center border-none bg-[#F6F6F6] rounded-[15px] px-2">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.75901 13.491 2.625 9.625 2.625C5.75901 2.625 2.625 5.75901 2.625 9.625C2.625 13.491 5.75901 16.625 9.625 16.625Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.375 18.375L14.5688 14.5688" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input type="text" placeholder="Search" className="outline-none w-[120px] h-[30px] text-[#8B8E99] text-sm py-1 px-3" />
          </div>
          <div className="flex gap-4 items-center justify-center">
          <p>
            <IoCartOutline className="text-2xl text-[#1E1D1D]" />
          </p>
          <p>
            <IoPersonOutline  className="text-2xl text-[#1E1D1D]" />
          </p>
          </div>
      </nav>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default Header;
