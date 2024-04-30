import React, { useState } from 'react';
import ehbLogo from "../assets/ehb-logo.jpg";
import { IoIosMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleButtonClick = () => {
    setClicked(!clicked);
  }
  return (
  <>
    <nav className="border flex items-center gap-7 flex-grow">
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

      {/* Categorie button + pop up */}
      <div className="relative">
        <button onClick={handleButtonClick}>
          <IoIosMenu className="flex h-full size-8 text-Grijs" />
          {clicked && (
            <div className="origin-top-right absolute -right-1/2 transform translate-x-1/2 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-center">
              <h3 className='text-lg'>Categoriën</h3>
              <ul className=''>
                <li>Audio</li>
                <li>Video</li>
                <li>XR</li>
                <li>Tools</li>
                <li>Belichting</li>
                <li>Varia</li>
              </ul>
            </div>
          )}
        </button>
      </div>
      
      <div className="flex">
        <div className="flex flex-grow h-12 border items-center gap-1 ">
          <IoSearchOutline className="size-7 text-Grijs ml-2" />
          <input
            type="search"
            name="search-bar"
            id=""
            placeholder="Zoek hier..."
            className="h-full w-full  rounded-lg border-Lichtgrijs p-2"
          />
        </div>
        <FaUser className="flex h-full size-8 text-Grijs" />
        <FaShoppingCart className="flex h-full size-8 text-Grijs " />
      </div>
    </nav>
  </>
  );
};

export default NavBar;

// test
