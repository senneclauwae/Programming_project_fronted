import React from "react";
import ehbLogo from "../assets/ehb-logo.jpg";
import { IoIosMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="w-100wh border flex items-center gap-7">
      <a href="/">
        <header className="flex w-max h-20 gap-x-3 items-center ">
          <img
            src={ehbLogo}
            alt="ehb Logo"
            className="h-full ml-2 items-center object-cover flex"
          />
          <div className="flex border h-12 border-red-500"></div>
          <h1 className="flex flex-col -space-y-8">
            <span className="text-2xl text-red-500">Medialab</span>
            <br />
            <span className="text-xs text-Lichtgrijs}">Uitleendienst</span>
          </h1>
        </header>
      </a>
      <IoIosMenu className="flex h-full size-8 text-Grijs" />
      <div className="flex space-between items-center justify-end">
        <div className="flex w-96 h-12 border items-center gap-1 grow">
          <IoSearchOutline className="size-7 text-Grijs ml-2" />
          <input
            type="search"
            name="search-bar"
            id=""
            placeholder="Zoek hier..."
            className="h-full w-full  rounded-lg border-Lichtgrijs p-2"
          />
        </div>
        <FaUser className="flex h-full size-8 text-Grijs " />
        <FaShoppingCart className="flex h-full size-8 text-Grijs " />
      </div>
    </nav>
  );
};

export default NavBar;
